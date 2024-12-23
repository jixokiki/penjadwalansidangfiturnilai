// "use client";
// import { useState, useEffect } from 'react';
// import { db } from '../../firebase'; 
// import { doc, setDoc, collection, getDocs } from 'firebase/firestore';
// import { useRouter } from 'next/navigation';
// import styles from './listmahasiswaaccsempro.module.css'; // Import CSS Module
// import NavbarKaprodi from '../navbarkaprodi/page';

// export default function ListMahasiswaAccSempro() {
//   const [mahasiswaList, setMahasiswaList] = useState([]); // State for Mahasiswa list
//   const [pengujiList, setPengujiList] = useState([]); // State for Dosen (Penguji) list
//   const [selectedPenguji, setSelectedPenguji] = useState({}); // State to track selected penguji for each mahasiswa
//   const router = useRouter();

//   // Fetch Mahasiswa data from Firestore
//   const fetchMahasiswaData = async () => {
//     try {
//       const mahasiswaCollection = collection(db, "usersSempro");
//       const mahasiswaSnapshot = await getDocs(mahasiswaCollection);
//       const mahasiswaData = mahasiswaSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setMahasiswaList(mahasiswaData);
//     } catch (error) {
//       console.error("Error fetching mahasiswa data: ", error);
//     }
//   };

//   // Fetch Dosen (Penguji) data from Firestore
//   const fetchDosenData = async () => {
//     try {
//       const usersCollection = collection(db, "users");
//       const usersSnapshot = await getDocs(usersCollection);
//       const dosenList = usersSnapshot.docs
//         .map(doc => ({ id: doc.id, ...doc.data() }))
//         .filter(user => user.role === "penguji"); // Filter for penguji role
//       setPengujiList(dosenList);
//     } catch (error) {
//       console.error("Error fetching dosen: ", error);
//     }
//   };

//   // Fetch Mahasiswa and Dosen data on component mount
//   useEffect(() => {
//     fetchMahasiswaData();
//     fetchDosenData();
//   }, []);

//   // Function to update status and selected penguji
//   const updateStatusAndPenguji = async (id) => {
//     try {
//       // Get the selected penguji's name
//       const pengujiName = pengujiList.find(penguji => penguji.id === selectedPenguji[id])?.nama;

//       // Update Firestore with the selected penguji's name
//       await setDoc(doc(db, "usersSempro", id), { 
//         status: "Semua dokumen sesuai dan lengkap",
//         penguji: pengujiName // Store only the name
//       }, { merge: true });
      
//       // Update local state to reflect changes
//       setMahasiswaList(prevList => 
//         prevList.map(mahasiswa => 
//           mahasiswa.id === id 
//             ? { ...mahasiswa, penguji: pengujiName } // Add the selected penguji's name to the mahasiswa
//             : mahasiswa
//         )
//       );
      
//       alert("Status and penguji updated successfully!");
//     } catch (error) {
//       console.error("Error updating status: ", error);
//       alert("Failed to update status.");
//     }
//   };

//   return (
//     <div>
//       <NavbarKaprodi />
//       <h2 className={styles.subTitle}>Daftar Mahasiswa Dokumen Lengkap</h2>
//       <ul className={styles.list}>
//         {mahasiswaList.filter(mahasiswa => mahasiswa.status === "Semua dokumen sesuai dan lengkap").map((mahasiswa) => (
//           <li key={mahasiswa.id} className={styles.listItem}>
//             <p><strong>Nama:</strong> {mahasiswa.nama}</p>
//             <p><strong>Jurusan:</strong> {mahasiswa.jurusan}</p>
//             <p><strong>Angkatan:</strong> {mahasiswa.angkatan}</p>
//             <p><strong>Cabang Kampus:</strong> {mahasiswa.cabangKampus}</p>
//             <p><strong>Nomor WhatsApp:</strong> {mahasiswa.noWhatsapp}</p>
//             <p><strong>Status:</strong> {mahasiswa.status || "Belum diverifikasi"}</p>

//             {mahasiswa.penguji ? ( // Check if penguji is already assigned
//               <p><strong>Dosen Penguji:</strong> {mahasiswa.penguji}</p> // Display only the penguji's name
//             ) : (
//               <div className={styles.buttonContainer}>
//                 <select 
//                   onChange={(e) => setSelectedPenguji(prev => ({ ...prev, [mahasiswa.id]: e.target.value }))}
//                 >
//                   <option value="">Select Penguji</option>
//                   {pengujiList.map(penguji => (
//                     <option key={penguji.id} value={penguji.id}>{penguji.nama}</option>
//                   ))}
//                 </select>
//                 <button 
//                   className={styles.button} 
//                   onClick={() => updateStatusAndPenguji(mahasiswa.id)}
//                   disabled={!selectedPenguji[mahasiswa.id]} // Disable if no penguji selected
//                 >
//                   Send
//                 </button>
//               </div>
//             )}

//             <p>File Pengajuan: <a href={mahasiswa.pengajuanSidangUrl} target="_blank" rel="noopener noreferrer">Download</a></p>
//             <p>File KRS: <a href={mahasiswa.krsUrl} target="_blank" rel="noopener noreferrer">Download</a></p>
//             <p>File Daftar Nilai: <a href={mahasiswa.daftarNilaiUrl} target="_blank" rel="noopener noreferrer">Download</a></p>
//             <p>File TA1: <a href={mahasiswa.fileTA1Url} target="_blank" rel="noopener noreferrer">Download</a></p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }




"use client";
import { useState, useEffect } from 'react';
import { db } from '../../firebase'; 
import { doc, setDoc, collection, getDocs } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import styles from './listmahasiswaaccskripsi.module.css'; // Import CSS Module
import NavbarKaprodi from '../navbarkaprodi/page';

export default function ListMahasiswaAccSkripsi() {
  const [mahasiswaList, setMahasiswaList] = useState([]); // State for Mahasiswa list
  const [pengujiList, setPengujiList] = useState([]); // State for Dosen (Penguji) list
  const [selectedPenguji, setSelectedPenguji] = useState({}); // State to track selected penguji for each mahasiswa
  const router = useRouter();

  // Fetch Mahasiswa data from Firestore
  const fetchMahasiswaData = async () => {
    try {
      const mahasiswaCollection = collection(db, "usersSkripsi");
      const mahasiswaSnapshot = await getDocs(mahasiswaCollection);
      const mahasiswaData = mahasiswaSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMahasiswaList(mahasiswaData);
    } catch (error) {
      console.error("Error fetching mahasiswa data: ", error);
    }
  };

  // Fetch Dosen (Penguji) data from Firestore
  const fetchDosenData = async () => {
    try {
      const usersCollection = collection(db, "users");
      const usersSnapshot = await getDocs(usersCollection);
      const dosenList = usersSnapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(user => user.role === "penguji"); // Filter for penguji role
      setPengujiList(dosenList);
    } catch (error) {
      console.error("Error fetching dosen: ", error);
    }
  };

  // Fetch Mahasiswa and Dosen data on component mount
  useEffect(() => {
    fetchMahasiswaData();
    fetchDosenData();
  }, []);

  // Function to update status and selected penguji
  const updateStatusAndPenguji = async (id) => {
    try {
      // Get the selected penguji's name
      const pengujiName = pengujiList.find(penguji => penguji.id === selectedPenguji[id])?.nama;

      // Update Firestore with the selected penguji's name and new status
      await setDoc(doc(db, "usersSkripsi", id), { 
        status: "Data Dikirim Ke Penguji",
        penguji: pengujiName // Store only the name
      }, { merge: true });
      
      // Update local state to reflect changes
      setMahasiswaList(prevList => 
        prevList.map(mahasiswa => 
          mahasiswa.id === id 
            ? { ...mahasiswa, penguji: pengujiName, status: "Data Dikirim Ke Penguji" } // Update status and penguji
            : mahasiswa
        )
      );
      
      alert("Status and penguji updated successfully!");
    } catch (error) {
      console.error("Error updating status: ", error);
      alert("Failed to update status.");
    }
  };

  return (
    <div>
      <NavbarKaprodi />
      <h2 className={styles.subTitle}>Daftar Mahasiswa Dokumen Lengkap</h2>
      <ul className={styles.list}>
        {mahasiswaList.filter(mahasiswa => mahasiswa.status === "Semua dokumen sesuai dan lengkap" || mahasiswa.status === "Data Dikirim Ke Penguji").map((mahasiswa) => (
          <li key={mahasiswa.id} className={styles.listItem}>
            <p><strong>Nama:</strong> {mahasiswa.nama}</p>
            <p><strong>Jurusan:</strong> {mahasiswa.jurusan}</p>
            <p><strong>Angkatan:</strong> {mahasiswa.angkatan}</p>
            <p><strong>Cabang Kampus:</strong> {mahasiswa.cabangKampus}</p>
            <p><strong>Nomor WhatsApp:</strong> {mahasiswa.noWhatsapp}</p>
            <p><strong>Status:</strong> {mahasiswa.status || "Belum diverifikasi"}</p>

            {mahasiswa.penguji ? ( // Check if penguji is already assigned
              <p><strong>Dosen Penguji:</strong> {mahasiswa.penguji}</p> // Display only the penguji's name
            ) : (
              <div className={styles.buttonContainer}>
                <select 
                  onChange={(e) => setSelectedPenguji(prev => ({ ...prev, [mahasiswa.id]: e.target.value }))}
                >
                  <option value="">Select Penguji</option>
                  {pengujiList.map(penguji => (
                    <option key={penguji.id} value={penguji.id}>{penguji.nama}</option>
                  ))}
                </select>
                <button 
                  className={styles.button} 
                  onClick={() => updateStatusAndPenguji(mahasiswa.id)}
                  disabled={!selectedPenguji[mahasiswa.id]} // Disable if no penguji selected
                >
                  Send
                </button>
              </div>
            )}

            <p>File Pengajuan: <a href={mahasiswa.pengajuanSidangUrl} target="_blank" rel="noopener noreferrer">Download</a></p>
            <p>File KRS: <a href={mahasiswa.krsUrl} target="_blank" rel="noopener noreferrer">Download</a></p>
            <p>File Daftar Nilai: <a href={mahasiswa.daftarNilaiUrl} target="_blank" rel="noopener noreferrer">Download</a></p>
            <p>File TA1: <a href={mahasiswa.fileTA1Url} target="_blank" rel="noopener noreferrer">Download</a></p>
          </li>
        ))}
      </ul>
    </div>
  );
}
