// "use client";
// import { useState, useEffect } from 'react';
// import { db } from '../../firebase'; 
// import { doc, setDoc, collection, getDocs } from 'firebase/firestore';
// import { useRouter } from 'next/navigation';
// import styles from './listmahasiswasempro.module.css'; // Import CSS Module
// import NavbarAdmin from '../navbaradmin/page';

// export default function ListMahasiswaSempro() {
//   const [mahasiswaList, setMahasiswaList] = useState([]); // State for Mahasiswa list
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

//   // Fetch Mahasiswa data on component mount
//   useEffect(() => {
//     fetchMahasiswaData();
//   }, []);

//   // Function to update status
//   const updateStatus = async (id) => {
//     try {
//       await setDoc(doc(db, "usersSempro", id), { status: "Semua dokumen sesuai dan lengkap" }, { merge: true });
//       alert("Status updated successfully!");
//       fetchMahasiswaData(); // Refresh data after update
//     } catch (error) {
//       console.error("Error updating status: ", error);
//       alert("Failed to update status.");
//     }
//   };

//   return (
//     <div>
//       <NavbarAdmin />
//       <h2 className={styles.subTitle}>Daftar Mahasiswa Terdaftar</h2>
//       <ul className={styles.list}>
//         {mahasiswaList.map((mahasiswa) => (
//           <li key={mahasiswa.id} className={styles.listItem}>
//             <p><strong>Nama:</strong> {mahasiswa.nama}</p>
//             <p><strong>Jurusan:</strong> {mahasiswa.jurusan}</p>
//             <p><strong>Angkatan:</strong> {mahasiswa.angkatan}</p>
//             <p><strong>Cabang Kampus:</strong> {mahasiswa.cabangKampus}</p>
//             <p><strong>Nomor WhatsApp:</strong> {mahasiswa.noWhatsapp}</p>
//             <p><strong>Status:</strong> {mahasiswa.status || "Belum diverifikasi"}</p>
//             <div className={styles.buttonContainer}>
//               <button 
//                 className={styles.button} 
//                 onClick={() => updateStatus(mahasiswa.id)}
//                 disabled={mahasiswa.status === "Semua dokumen sesuai dan lengkap"} // Disable if already accepted
//               >
//                 Acc
//               </button>
//               <p>File Pengajuan: <a href={mahasiswa.pengajuanSidangUrl} target="_blank" rel="noopener noreferrer">Download</a></p>
//               <p>File KRS: <a href={mahasiswa.krsUrl} target="_blank" rel="noopener noreferrer">Download</a></p>
//               <p>File Daftar Nilai: <a href={mahasiswa.daftarNilaiUrl} target="_blank" rel="noopener noreferrer">Download</a></p>
//               <p>File TA1: <a href={mahasiswa.fileTA1Url} target="_blank" rel="noopener noreferrer">Download</a></p>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }



"use client";
import { useState, useEffect } from 'react';
import { db } from '../../firebase'; 
import { doc, setDoc, collection, getDocs, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useRouter } from 'next/navigation';
import styles from './listmahasiswasempro.module.css'; // Import CSS Module
import NavbarAdmin from '../navbaradmin/page';

export default function ListMahasiswaSempro() {
  const [mahasiswaList, setMahasiswaList] = useState([]);
  const [selectedMahasiswa, setSelectedMahasiswa] = useState(null);
  const [revisiFile, setRevisiFile] = useState(null);
  const [revisiField, setRevisiField] = useState("");
  const [revisiKeterangan, setRevisiKeterangan] = useState("");
  const router = useRouter();

  const storage = getStorage(); // Inisialisasi Firebase Storage

  // Fetch Mahasiswa data from Firestore
  const fetchMahasiswaData = async () => {
    try {
      const mahasiswaCollection = collection(db, "usersSempro");
      const mahasiswaSnapshot = await getDocs(mahasiswaCollection);
      const mahasiswaData = mahasiswaSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMahasiswaList(mahasiswaData);
    } catch (error) {
      console.error("Error fetching mahasiswa data: ", error);
    }
  };

  // Fetch Mahasiswa data on component mount
  useEffect(() => {
    fetchMahasiswaData();
  }, []);

  // Function to update status
  const updateStatus = async (id) => {
    try {
      await setDoc(doc(db, "usersSempro", id), { status: "Semua dokumen sesuai dan lengkap" }, { merge: true });
      alert("Status updated successfully!");
      fetchMahasiswaData(); // Refresh data after update
    } catch (error) {
      console.error("Error updating status: ", error);
      alert("Failed to update status.");
    }
  };

  // Function to handle revisi submission
  const submitRevisi = async () => {
    if (!revisiField || !revisiFile || !revisiKeterangan) {
      alert("Harap lengkapi semua data revisi.");
      return;
    }

    try {
      // Upload file to Firebase Storage
      const fileRef = ref(storage, `revisiFiles/${selectedMahasiswa.id}_${revisiField}_${Date.now()}.pdf`);
      await uploadBytes(fileRef, revisiFile);
      const fileUrl = await getDownloadURL(fileRef);

      // Save revision data to Firestore
      const revisiData = {
        mahasiswaId: selectedMahasiswa.id,
        revisiField,
        revisiKeterangan,
        revisiFileUrl: fileUrl, // Save the URL instead of the file
        timestamp: new Date().toISOString(),
      };
      await addDoc(collection(db, "revisiDokumen"), revisiData);

      alert("Revisi dokumen berhasil dikirim.");
      setSelectedMahasiswa(null);
      setRevisiField("");
      setRevisiFile(null);
      setRevisiKeterangan("");
      fetchMahasiswaData(); // Refresh data
    } catch (error) {
      console.error("Error submitting revisi: ", error);
      alert("Gagal mengirim revisi dokumen.");
    }
  };

  return (
    <div>
      <NavbarAdmin />
      <h2 className={styles.subTitle}>Daftar Mahasiswa Terdaftar</h2>
      <ul className={styles.list}>
        {mahasiswaList.map((mahasiswa) => (
          <li key={mahasiswa.id} className={styles.listItem}>
            <p><strong>Nama:</strong> {mahasiswa.nama}</p>
            <p><strong>Jurusan:</strong> {mahasiswa.jurusan}</p>
            <p><strong>Angkatan:</strong> {mahasiswa.angkatan}</p>
            <p><strong>Cabang Kampus:</strong> {mahasiswa.cabangKampus}</p>
            <p><strong>Nomor WhatsApp:</strong> {mahasiswa.noWhatsapp}</p>
            <p><strong>Status:</strong> {mahasiswa.status || "Belum diverifikasi"}</p>
            <div className={styles.buttonContainer}>
              <button 
                className={styles.button} 
                onClick={() => setSelectedMahasiswa(mahasiswa)}
                disabled={mahasiswa.status === "Semua dokumen sesuai dan lengkap"} 
              >
                Acc
              </button>
              <p>File Pengajuan: <a href={mahasiswa.pengajuanSidangUrl} target="_blank" rel="noopener noreferrer">Download</a></p>
              <p>File KRS: <a href={mahasiswa.krsUrl} target="_blank" rel="noopener noreferrer">Download</a></p>
              <p>File Daftar Nilai: <a href={mahasiswa.daftarNilaiUrl} target="_blank" rel="noopener noreferrer">Download</a></p>
              <p>File TA1: <a href={mahasiswa.fileTA1Url} target="_blank" rel="noopener noreferrer">Download</a></p>
            </div>
          </li>
        ))}
      </ul>
      {selectedMahasiswa && (
        <div className={styles.modal}>
          <h3>Apakah semua dokumen lengkap?</h3>
          <button onClick={() => updateStatus(selectedMahasiswa.id)} className={styles.button}>Yes</button>
          <button onClick={() => setSelectedMahasiswa(selectedMahasiswa)} className={styles.button}>No</button>
          {selectedMahasiswa && (
            <div>
              <h4>Form Revisi Dokumen</h4>
              <select value={revisiField} onChange={(e) => setRevisiField(e.target.value)}>
                <option value="">Pilih Dokumen</option>
                <option value="pengajuanSidang">File Pengajuan</option>
                <option value="krs">File KRS</option>
                <option value="daftarNilai">File Daftar Nilai</option>
                <option value="fileTA1">File TA 1</option>
              </select>
              <input 
                type="file" 
                onChange={(e) => setRevisiFile(e.target.files[0])} 
                accept="application/pdf"
              />
              <textarea 
                value={revisiKeterangan} 
                onChange={(e) => setRevisiKeterangan(e.target.value)} 
                placeholder="Keterangan revisi"
              />
              <button onClick={submitRevisi} className={styles.button}>Kirim Revisi Dokumen</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}