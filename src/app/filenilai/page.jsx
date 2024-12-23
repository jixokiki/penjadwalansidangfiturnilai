// 'use client'
// import { useState, useEffect } from "react";
// import { db } from "../../firebase";
// import { collection, getDocs, setDoc, doc as firestoreDoc, getDoc } from "firebase/firestore"; 
// import styles from "./filerevisi.module.css";
// import Navbar from "../navbar/Navbar";

// export default function ListAllUsersSempro() {
//   const [usersSemproList, setUsersSemproList] = useState([]);
//   const [pengujiList, setPengujiList] = useState([]); // Daftar penguji
//   const [selectedPenguji, setSelectedPenguji] = useState({}); // Selected penguji
//   const [selectedDate, setSelectedDate] = useState({}); // Selected date for each user

//   // Fetch semua data dari usersSempro collection
//   const fetchAllUsersSemproData = async () => {
//     try {
//       const usersSemproCollection = collection(db, "usersSempro");
//       const usersSemproSnapshot = await getDocs(usersSemproCollection);
//       const usersSemproData = await Promise.all(
//         usersSemproSnapshot.docs.map(async (doc) => {
//           const userData = { id: doc.id, ...doc.data() };

//           const jadwalSemproDocRef = firestoreDoc(db, "revisiMahasiswaSempro", doc.id);
//           const jadwalSemproDocSnap = await getDoc(jadwalSemproDocRef);
//           if (jadwalSemproDocSnap.exists()) {
//             const jadwalSemproData = jadwalSemproDocSnap.data();
//             userData.penguji = jadwalSemproData.penguji || null;
//             userData.penguji2 = jadwalSemproData.penguji2 || null;
//             userData.revisi = jadwalSemproData.revisi || {};
//             userData.tanggalSidang = jadwalSemproData.tanggalSidang || null;  // Add tanggalSidang here
//           }
//           return userData;
//         })
//       );
//       setUsersSemproList(usersSemproData);
//     } catch (error) {
//       console.error("Error fetching usersSempro data: ", error);
//     }
//   };

//   // Fetch data penguji dari koleksi 'penguji'
//   const fetchPengujiData = async () => {
//     try {
//       const pengujiCollection = collection(db, "penguji");
//       const pengujiSnapshot = await getDocs(pengujiCollection);
//       const pengujiData = pengujiSnapshot.docs
//         .filter((doc) => doc.data().role === "penguji")
//         .map((doc) => ({
//           id: doc.id,
//           nama: doc.data().nama,
//           jurusan: doc.data().jurusan,
//           cabangKampus: doc.data().cabangKampus,
//         }));
//       setPengujiList(pengujiData);
//     } catch (error) {
//       console.error("Error fetching penguji data: ", error);
//     }
//   };

//   const handleDateChange = (userId, date) => {
//     setSelectedDate((prevState) => ({
//       ...prevState,
//       [userId]: date,
//     }));
//   };

//   const handleSubmitPenguji = async (userId) => {
//     const selectedPengujiName = selectedPenguji[userId];
//     const selectedUserDate = selectedDate[userId];
    
//     if (!selectedPengujiName || !selectedUserDate) {
//       alert("Silakan pilih penguji dan tanggal terlebih dahulu.");
//       return;
//     }
  
//     const user = usersSemproList.find((user) => user.id === userId);
    
//     const dataToSave = {
//       ...user,
//       penguji: selectedPengujiName,
//       tanggalSidang: selectedUserDate,
//     };
  
//     try {
//       const jadwalPengujiDocRef = firestoreDoc(db, "jadwalPenguji2", userId);
//       await setDoc(jadwalPengujiDocRef, dataToSave, { merge: true });
//       alert("Data berhasil dikirim ke jadwalPenguji2.");
//     } catch (error) {
//       console.error("Error saving data:", error);
//       alert("Terjadi kesalahan saat menyimpan data.");
//     }
//   };

//   useEffect(() => {
//     fetchAllUsersSemproData();
//     fetchPengujiData();
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <h2 className={styles.subTitle}>Daftar Revisi</h2>
//       <ul className={styles.list}>
//         {usersSemproList.map((user) => (
//           <li key={user.id} className={styles.listItem}>
//             <p><strong>Nama:</strong> {user.nama}</p>
//             <p><strong>Jurusan:</strong> {user.jurusan}</p>
//             <p><strong>Angkatan:</strong> {user.angkatan}</p>
//             <p><strong>Cabang Kampus:</strong> {user.cabangKampus}</p>
//             <p><strong>Nomor WhatsApp:</strong> {user.noWhatsapp}</p>
//             <p><strong>Status:</strong> {user.status || "Belum diverifikasi"}</p>
//             <p><strong>Penguji:</strong> {user.penguji || "Belum dipilih"}</p>
//              {/* Display the tanggalSidang */}
//             <p><strong>Tanggal Sidang:</strong> {user.tanggalSidang || "Tanggal tidak tersedia"}</p>


//             {/* Show additional fields */}
//             <p><strong>Daftar Nilai:</strong> <a href={user.daftarNilaiUrl} target="_blank" rel="noopener noreferrer">Link</a></p>
//             <p><strong>File TA 1:</strong> <a href={user.fileTA1Url} target="_blank" rel="noopener noreferrer">Link</a></p>
//             <p><strong>KRS:</strong> <a href={user.krsUrl} target="_blank" rel="noopener noreferrer">Link</a></p>
//             <p><strong>Pengajuan Sidang:</strong> <a href={user.pengajuanSidangUrl} target="_blank" rel="noopener noreferrer">Link</a></p>

//             {/* Display revisi data */}
//             {user.revisi && (
//               <div>
//                 <h4>Revisi</h4>
//                 {user.revisi.PEBIMBING && (
//                   <div>
//                     <h5>PEBIMBING</h5>
//                     <p>{user.revisi.PEBIMBING.text}</p>
//                     <img src={user.revisi.PEBIMBING.imageUrl} alt="PEBIMBING" style={{ width: "100px" }} />
//                   </div>
//                 )}
//                 {user.revisi.KETUA_PENGUJI && (
//                   <div>
//                     <h5>KETUA PENGUJI</h5>
//                     <p>{user.revisi.KETUA_PENGUJI.text}</p>
//                     <img src={user.revisi.KETUA_PENGUJI.imageUrl} alt="KETUA PENGUJI" style={{ width: "100px" }} />
//                   </div>
//                 )}
//                 {user.revisi.ANGGOTA_PENGUJI && (
//                   <div>
//                     <h5>ANGGOTA PENGUJI</h5>
//                     <p>{user.revisi.ANGGOTA_PENGUJI.text}</p>
//                     <img src={user.revisi.ANGGOTA_PENGUJI.imageUrl} alt="ANGGOTA PENGUJI" style={{ width: "100px" }} />
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* Penguji selection
//             <label>Pilih Penguji:</label>
//             <select
//               onChange={(e) => setSelectedPenguji({ ...selectedPenguji, [user.id]: e.target.value })}
//               value={selectedPenguji[user.id] || ""}
//             >
//               <option value="">Pilih Penguji</option>
//               {pengujiList.map((penguji) => (
//                 <option key={penguji.id} value={penguji.nama}>
//                   {penguji.nama} - {penguji.jurusan} ({penguji.cabangKampus})
//                 </option>
//               ))}
//             </select>

//             <label>Pilih Tanggal Sidang:</label>
//             <input
//               type="date"
//               onChange={(e) => handleDateChange(user.id, e.target.value)}
//               value={selectedDate[user.id] || ""}
//             />
//             <button onClick={() => handleSubmitPenguji(user.id)}>Kirim Jadwal</button> */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


//update tgl 23 10.00 2024
// "use client"
// import { useState, useEffect } from "react";
// import { db } from "../../firebase";
// import { collection, getDocs, setDoc, doc as firestoreDoc, getDoc } from "firebase/firestore"; 
// import styles from "./filenilai.module.css";
// import Navbar from "../navbar/Navbar";

// export default function ListAllUsersSempro() {
//   const [usersSemproList, setUsersSemproList] = useState([]);

//   const fetchAllUsersSemproData = async () => {
//     try {
//       const usersSemproCollection = collection(db, "usersSempro");
//       const usersSemproSnapshot = await getDocs(usersSemproCollection);
//       const usersSemproData = await Promise.all(
//         usersSemproSnapshot.docs.map(async (doc) => {
//           const userData = { id: doc.id, ...doc.data() };

//           const jadwalSemproDocRef = firestoreDoc(db, "nilaiMahasiswaSempro", doc.id);
//           const jadwalSemproDocSnap = await getDoc(jadwalSemproDocRef);
//           if (jadwalSemproDocSnap.exists()) {
//             const jadwalSemproData = jadwalSemproDocSnap.data();
//             userData.penguji = jadwalSemproData.penguji || null;
//             userData.penguji2 = jadwalSemproData.penguji2 || null;
//             userData.revisi = jadwalSemproData.revisi || {};
//             userData.tanggalSidang = jadwalSemproData.tanggalSidang || null;
//           }
//           return userData;
//         })
//       );
//       setUsersSemproList(usersSemproData);
//     } catch (error) {
//       console.error("Error fetching usersSempro data: ", error);
//     }
//   };

//   useEffect(() => {
//     fetchAllUsersSemproData();
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <h2 className={styles.subTitle}>Lembar Nilai</h2>
//       <ul className={styles.list}>
//         {usersSemproList.map((user) => (
//           <li key={user.id} className={styles.listItem}>
//             <table className={styles.table}>
//               <tbody>
//                 <tr>
//                   <td><strong>Nama</strong></td>
//                   <td>{user.nama}</td>
//                 </tr>
//                 <tr>
//                   <td><strong>NIM</strong></td>
//                   <td>{user.id || "N/A"}</td>
//                 </tr>
//                 <tr>
//                   <td><strong>Judul</strong></td>
//                   <td>{user.judul || "N/A"}</td>
//                 </tr>
//                 <tr>
//                   <td><strong>Pembimbing</strong></td>
//                   <td>{user.pembimbing || "Belum dipilih"}</td>
//                 </tr>
//                 <tr>
//                   <td><strong>Hari/Tanggal</strong></td>
//                   <td>{user.tanggalSidang || "Belum tersedia"}</td>
//                 </tr>
//               </tbody>
//             </table>

//             <h4>Revisi dan Masukan</h4>
//             <table className={styles.table}>
//               <tbody>
//                 <tr>
//                   <td><strong>Pembimbing</strong></td>
//                   <td>
//                     {user.revisi?.PEMBIMBING?.text || "Tidak ada revisi"}
//                     {user.revisi?.PEMBIMBING?.imageUrl && (
//                       <img
//                         src={user.revisi.PEMBIMBING.imageUrl}
//                         alt="Revisi Pembimbing"
//                         style={{ width: "100px" }}
//                       />
//                     )}
//                   </td>
//                   <tr>
//                   <td><strong>Nilai</strong></td>
//                   <td>{user.text || "Belum dipilih"}</td>
//                 </tr>
//                 </tr>
//                 <tr>
//                   <td><strong>Ketua Penguji</strong></td>
//                   <td>
//                     {user.revisi?.KETUA_PENGUJI?.text || "Tidak ada revisi"}
//                     {user.revisi?.KETUA_PENGUJI?.imageUrl && (
//                       <img
//                         src={user.revisi.KETUA_PENGUJI.imageUrl}
//                         alt="Revisi Ketua Penguji"
//                         style={{ width: "100px" }}
//                       />
//                     )}
//                   </td>
//                 </tr>
//                 <tr>
//                   <td><strong>Anggota Penguji</strong></td>
//                   <td>
//                     {user.revisi?.ANGGOTA_PENGUJI?.text || "Tidak ada revisi"}
//                     {user.revisi?.ANGGOTA_PENGUJI?.imageUrl && (
//                       <img
//                         src={user.revisi.ANGGOTA_PENGUJI.imageUrl}
//                         alt="Revisi Anggota Penguji"
//                         style={{ width: "100px" }}
//                       />
//                     )}
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


"use client"
import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs, getDoc, doc as firestoreDoc } from "firebase/firestore"; 
import styles from "./filenilai.module.css";
import Navbar from "../navbar/Navbar";

export default function ListAllUsersSempro() {
  const [usersSemproList, setUsersSemproList] = useState([]);

  const fetchAllUsersSemproData = async () => {
    try {
      const usersSemproCollection = collection(db, "usersSempro");
      const usersSemproSnapshot = await getDocs(usersSemproCollection);
      const usersSemproData = await Promise.all(
        usersSemproSnapshot.docs.map(async (doc) => {
          const userData = { id: doc.id, ...doc.data() };

          const jadwalSemproDocRef = firestoreDoc(db, "nilaiMahasiswaSempro", doc.id);
          const jadwalSemproDocSnap = await getDoc(jadwalSemproDocRef);
          if (jadwalSemproDocSnap.exists()) {
            const jadwalSemproData = jadwalSemproDocSnap.data();
            userData.penguji = jadwalSemproData.penguji || null;
            userData.penguji2 = jadwalSemproData.penguji2 || null;
            userData.revisi = jadwalSemproData.revisi || {};
            userData.tanggalSidang = jadwalSemproData.tanggalSidang || null;
            userData.letterGrade = jadwalSemproData.letterGrade || null;
            userData.totalNilai = jadwalSemproData.totalNilai || null;
            userData.rataRata = jadwalSemproData.rataRata || null;
            userData.statusJadwalSidangSempro = jadwalSemproData.statusJadwalSidangSempro || null;
          }
          return userData;
        })
      );
      setUsersSemproList(usersSemproData);
    } catch (error) {
      console.error("Error fetching usersSempro data: ", error);
    }
  };

  useEffect(() => {
    fetchAllUsersSemproData();
  }, []);

  return (
    <div>
      <Navbar />
      <h2 className={styles.subTitle}>Lembar Nilai</h2>
      <ul className={styles.list}>
        {usersSemproList.map((user) => (
          <li key={user.id} className={styles.listItem}>
            <table className={styles.table}>
              <tbody>
                <tr>
                  <td><strong>Nama</strong></td>
                  <td>{user.nama}</td>
                </tr>
                <tr>
                  <td><strong>NIM</strong></td>
                  <td>{user.id || "N/A"}</td>
                </tr>
                <tr>
                  <td><strong>Judul</strong></td>
                  <td>{user.judul || "N/A"}</td>
                </tr>
                <tr>
                  <td><strong>Pembimbing</strong></td>
                  <td>{user.pembimbing || "Belum dipilih"}</td>
                </tr>
                <tr>
                  <td><strong>Hari/Tanggal</strong></td>
                  <td>{user.tanggalSidang || "Belum tersedia"}</td>
                </tr>
                <tr>
                  <td><strong>Angkatan</strong></td>
                  <td>{user.angkatan || "N/A"}</td>
                </tr>
                <tr>
                  <td><strong>Cabang Kampus</strong></td>
                  <td>{user.cabangKampus || "N/A"}</td>
                </tr>
                <tr>
                  <td><strong>Jurusan</strong></td>
                  <td>{user.jurusan || "N/A"}</td>
                </tr>
                <tr>
                  <td><strong>Daftar Nilai</strong></td>
                  <td><a href={user.daftarNilaiUrl || "#"} target="_blank">Link</a></td>
                </tr>
                <tr>
                  <td><strong>Nilai Huruf</strong></td>
                  <td>{user.letterGrade || "N/A"}</td>
                </tr>
                <tr>
                  <td><strong>No. Whatsapp</strong></td>
                  <td>{user.noWhatsapp || "N/A"}</td>
                </tr>
                <tr>
                  <td><strong>KRS</strong></td>
                  <td><a href={user.krsUrl || "#"} target="_blank">Link</a></td>
                </tr>
                <tr>
                  <td><strong>Pengajuan Sidang</strong></td>
                  <td><a href={user.pengajuanSidangUrl || "#"} target="_blank">Link</a></td>
                </tr>
                <tr>
                  <td><strong>Rata-rata Nilai</strong></td>
                  <td>{user.rataRata || "N/A"}</td>
                </tr>
                <tr>
                  <td><strong>Status</strong></td>
                  <td>{user.status || "N/A"}</td>
                </tr>
                <tr>
                  <td><strong>Status Jadwal Sidang Sempro</strong></td>
                  <td>{user.statusJadwalSidangSempro || "N/A"}</td>
                </tr>
                <tr>
                  <td><strong>Total Nilai</strong></td>
                  <td>{user.totalNilai || "N/A"}</td>
                </tr>
                <tr>
                  <td><strong>SKS Ditempuh</strong></td>
                  <td>{user.sksditempuh || "N/A"}</td>
                </tr>
                <tr>
                  <td><strong>SKS Berjalan</strong></td>
                  <td>{user.sksberjalan || "N/A"}</td>
                </tr>
              </tbody>
            </table>

            <h4>Revisi dan Masukan</h4>
            <table className={styles.table}>
              <tbody>
                <tr>
                  <td><strong>Pembimbing</strong></td>
                  <td>
                    {user.revisi?.PEMBIMBING?.text || "Tidak ada revisi"}
                    {user.revisi?.PEMBIMBING?.imageUrl && (
                      <img
                        src={user.revisi.PEMBIMBING.imageUrl}
                        alt="Revisi Pembimbing"
                        style={{ width: "100px" }}
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td><strong>Ketua Penguji</strong></td>
                  <td>
                    {user.revisi?.KETUA_PENGUJI?.text || "Tidak ada revisi"}
                    {user.revisi?.KETUA_PENGUJI?.imageUrl && (
                      <img
                        src={user.revisi.KETUA_PENGUJI.imageUrl}
                        alt="Revisi Ketua Penguji"
                        style={{ width: "100px" }}
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td><strong>Anggota Penguji</strong></td>
                  <td>
                    {user.revisi?.ANGGOTA_PENGUJI?.text || "Tidak ada revisi"}
                    {user.revisi?.ANGGOTA_PENGUJI?.imageUrl && (
                      <img
                        src={user.revisi.ANGGOTA_PENGUJI.imageUrl}
                        alt="Revisi Anggota Penguji"
                        style={{ width: "100px" }}
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td><strong>Nilai</strong></td>
                  <td>{user.revisi?.KETUA_PENGUJI?.text || "Belum dipilih"}</td>
                </tr>
              </tbody>
            </table>
          </li>
        ))}
      </ul>
    </div>
  );
}
