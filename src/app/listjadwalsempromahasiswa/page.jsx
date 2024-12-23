// "use client";
// import { useState, useEffect } from 'react';
// import { db } from '../../firebase';
// import { collection, getDocs } from 'firebase/firestore';
// import styles from './listjadwalsempro.module.css';
// // import NavbarPenguji from '../navbarpenguji/page';
// import Navbar from '../navbar/Navbar';

// export default function ListJadwalSemproMahasiswa() {
//   const [jadwalSemproList, setJadwalSemproList] = useState([]);

//   // Fetch all data from jadwalSempro collection
//   const fetchJadwalSemproData = async () => {
//     try {
//       const jadwalSemproCollection = collection(db, "jadwalSempro");
//       const jadwalSemproSnapshot = await getDocs(jadwalSemproCollection);
//       const jadwalSemproData = jadwalSemproSnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setJadwalSemproList(jadwalSemproData);
//     } catch (error) {
//       console.error("Error fetching jadwalSempro data: ", error);
//     }
//   };

//   // Fetch data on component mount
//   useEffect(() => {
//     fetchJadwalSemproData();
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <h2 className={styles.subTitle}>Daftar Jadwal Sidang Sempro</h2>
//       <ul className={styles.list}>
//         {jadwalSemproList.map((jadwal) => (
//           <li key={jadwal.id} className={styles.listItem}>
//             <p><strong>Nama:</strong> {jadwal.nama}</p>
//             <p><strong>Jurusan:</strong> {jadwal.jurusan}</p>
//             <p><strong>Angkatan:</strong> {jadwal.angkatan}</p>
//             <p><strong>Cabang Kampus:</strong> {jadwal.cabangKampus}</p>
//             <p><strong>Nomor WhatsApp:</strong> {jadwal.noWhatsapp}</p>
//             <p><strong>Mode Sidang:</strong> {jadwal.mode}</p>

//             {jadwal.mode === "online" && (
//               <div>
//                 <p><strong>Link GMeet:</strong> <a href={jadwal.gmeetLink} target="_blank" rel="noopener noreferrer">{jadwal.gmeetLink}</a></p>
//               </div>
//             )}

//             {jadwal.mode === "offline" && (
//               <div>
//                 <p><strong>Jam:</strong> {jadwal.jam}</p>
//                 <p><strong>Tanggal:</strong> {jadwal.tanggal} {jadwal.bulan} {jadwal.tahun}</p>
//                 <p><strong>Ruangan:</strong> {jadwal.ruangan}</p>
//                 <p><strong>Kampus:</strong> {jadwal.kampus}</p>
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }




//update tgl 19 desember 2024
// "use client";
// import { useState, useEffect } from 'react';
// import { db, storage } from '../../firebase';
// import { collection, getDocs, addDoc } from 'firebase/firestore';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import styles from './listjadwalsempro.module.css';
// import Navbar from '../navbar/Navbar';
// import Calendar from 'react-calendar'; // Import Calendar component
// import 'react-calendar/dist/Calendar.css'; // Import calendar styles

// export default function ListJadwalSemproMahasiswa() {
//   const [jadwalSemproList, setJadwalSemproList] = useState([]);
//   const [dokumenPengajuan, setDokumenPengajuan] = useState(null);
//   const [revisiFiles, setRevisiFiles] = useState([null, null, null, null]);
//   const [selectedFiles, setSelectedFiles] = useState({ pengajuan: null, krs: null, nilai: null, ta1: null });
//   const [usersSemproData, setUsersSemproData] = useState([]); // State to hold usersSempro data
//   const [jadwalSemproData, setJadwalSemproData] = useState([]); // State to hold usersSempro data
//   const [selectedDate, setSelectedDate] = useState(null); // To store the selected date from the calendar
//   const [isMounted, setIsMounted] = useState(false); // State to track component mount

//   // Fetch data from jadwalSempro collection
//   const fetchJadwalSemproData = async () => {
//     try {
//       const jadwalSemproCollection = collection(db, "jadwalSempro");
//       const jadwalSemproSnapshot = await getDocs(jadwalSemproCollection);
//       const jadwalSemproData = jadwalSemproSnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setJadwalSemproList(jadwalSemproData);
//     } catch (error) {
//       console.error("Error fetching jadwalSempro data: ", error);
//     }
//   };

//   // Fetch dokumen pengajuan data
//   const fetchDokumenPengajuan = async () => {
//     try {
//       const revisiDokumenCollection = collection(db, "revisiDokumen");
//       const revisiDokumenSnapshot = await getDocs(revisiDokumenCollection);
//       const revisiDokumenData = revisiDokumenSnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setDokumenPengajuan(revisiDokumenData);
//     } catch (error) {
//       console.error("Error fetching revisiDokumen data: ", error);
//     }
//   };

//   // Fetch usersSempro data, including status
//   const fetchUsersSemproData = async () => {
//     try {
//       const usersSemproCollection = collection(db, "usersSempro");
//       const usersSemproSnapshot = await getDocs(usersSemproCollection);
//       const usersSemproData = usersSemproSnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setUsersSemproData(usersSemproData);
//     } catch (error) {
//       console.error("Error fetching usersSempro data: ", error);
//     }
//   };

//   // Upload file to Firebase Storage and return its URL
//   const uploadFile = async (file, path) => {
//     const storageRef = ref(storage, path);
//     await uploadBytes(storageRef, file);
//     return await getDownloadURL(storageRef);
//   };

//   // Handle file upload change for revisi files
//   const handleFileChange = (index, file) => {
//     const updatedFiles = [...revisiFiles];
//     updatedFiles[index] = file;
//     setRevisiFiles(updatedFiles);
//   };

//   // Handle selected files change
//   const handleSelectedFileChange = (key, file) => {
//     setSelectedFiles((prev) => ({ ...prev, [key]: file }));
//   };

//   // Submit revisi files
//   const submitRevisi = async () => {
//     if (!revisiFiles.every((file) => file) || !Object.values(selectedFiles).every((file) => file)) {
//       alert("Semua file harus diunggah sebelum mengirim revisi.");
//       return;
//     }

//     try {
//       // Upload revisi files
//       const revisiUrls = await Promise.all(
//         revisiFiles.map((file, index) => uploadFile(file, `revisi/${file.name}`))
//       );

//       // Upload supporting files
//       const selectedFileUrls = {};
//       for (const [key, file] of Object.entries(selectedFiles)) {
//         selectedFileUrls[key] = await uploadFile(file, `dokumen/${file.name}`);
//       }

//       // Save to Firestore
//       await addDoc(collection(db, "revisiDokumenLengkap"), {
//         revisiFiles: revisiUrls,
//         ...selectedFileUrls,
//         timestamp: new Date(),
//       });

//       alert("Revisi berhasil dikirim!");
//       setRevisiFiles([null, null, null, null]);
//       setSelectedFiles({ pengajuan: null, krs: null, nilai: null, ta1: null });
//     } catch (error) {
//       console.error("Error submitting revisi: ", error);
//       alert("Terjadi kesalahan saat mengirim revisi.");
//     }
//   };

//   // Handle calendar date selection
//   const handleDateClick = (date) => {
//     setSelectedDate(date);
//   };

//   useEffect(() => {
//     fetchJadwalSemproData();
//     fetchDokumenPengajuan();
//     fetchUsersSemproData(); // Fetch usersSempro data when the component mounts
//     setIsMounted(true); // Set to true once the component has mounted
//   }, []);

//   if (!isMounted) {
//     return <div>Loading...</div>; // Display loading text while mounting
//   }

//   return (
//     <div>
//       <Navbar />
//       <h2 className={styles.subTitle}>Daftar Jadwal Sidang Sempro</h2>

//       <Calendar
//         onChange={handleDateClick}
//         value={selectedDate}
//         className={styles.calendar}
//       />
//       {selectedDate && (
//         <div className={styles.selectedDateInfo}>
//           <h3>Data untuk Tanggal {selectedDate.toLocaleDateString()}</h3>
//           <ul className={styles.list}>
//             {jadwalSemproList
//               .filter((jadwal) => {
//                 // Menggabungkan tanggal, bulan, dan tahun dari Firebase untuk membuat objek Date
//                 const jadwalDate = new Date(`${jadwal.tahun}-${jadwal.bulan}-${jadwal.tanggal}`);
//                 return jadwalDate.toLocaleDateString() === selectedDate.toLocaleDateString();
//               })
//               .map((jadwal) => (
//                 <li key={jadwal.id} className={styles.cardBox}>
//                   <h4>{jadwal.nama}</h4>
//                   <p><strong>Jurusan:</strong> {jadwal.jurusan}</p>
//                   <p><strong>Mode Sidang:</strong> {jadwal.mode}</p>
//                   <p><strong>Tanggal:</strong> {jadwal.tanggal} {jadwal.bulan} {jadwal.tahun}</p>
//                   <p><strong>Ruangan:</strong> {jadwal.ruangan}</p>
//                 </li>
//               ))}
//           </ul>
//         </div>
//       )}

//       <h2 className={styles.subTitle}>Dokumen Pengajuan</h2>
//       {dokumenPengajuan && dokumenPengajuan.map((doc) => (
//         <div key={doc.id} className={styles.docItem}>
//           <p><strong>ID:</strong> {doc.id}</p>
//           <p><strong>Nama:</strong> {doc.nama}</p>
//         </div>
//       ))}

//       <h2 className={styles.subTitle}>Status Dokumen</h2>
//       {usersSemproData.length > 0 ? (
//         usersSemproData.map((user) => (
//           <div key={user.id} className={styles.cardBox}>
//             <p><strong>Nama:</strong> {user.nama}</p>
//             <p><strong>Status:</strong> {user.status || "Status belum diupdate"}</p>
            
//             {user.status === "Semua dokumen sesuai dan lengkap" && (
//               <p className={styles.statusComplete}>Semua dokumen sesuai dan lengkap</p>
//             )}
//             {user.status === "Data Dikirim Ke Penguji" && (
//               <div>
//                 <p className={styles.statusSent}>Data Dikirim Ke Penguji</p>
//                 <p><strong>Data Pengajuan:</strong> {user.dataPengajuan}</p>
//                 <p><strong>Nomor WhatsApp:</strong> {user.noWhatsapp}</p>
//                 <p><strong>Email:</strong> {user.email}</p>
//               </div>
//             )}
//           </div>
//         ))
//       ) : (
//         <p>Loading data...</p>
//       )}

//             {usersSemproData.length > 0 ? (
//         usersSemproData.map((user) => (
//           <div key={user.id} className={styles.cardBox}>
//             <p><strong>Nama:</strong> {user.nama}</p>
//             <p><strong>Status:</strong> {user.status || "Status belum diupdate"}</p>
            
//             {user.status === "Semua dokumen sesuai dan lengkap" && (
//               <p className={styles.statusComplete}>Semua dokumen sesuai dan lengkap</p>
//             )}
//             {user.status === "Data Dikirim Ke Penguji" && (
//               <div>
//                 <p className={styles.statusSent}>Data Dikirim Ke Penguji</p>
//                 <p><strong>Data Pengajuan:</strong> {user.dataPengajuan}</p>
//                 <p><strong>Nomor WhatsApp:</strong> {user.noWhatsapp}</p>
//                 <p><strong>Email:</strong> {user.email}</p>
//               </div>
//             )}
//           </div>
//         ))
//       ) : (
//         <p>Loading data...</p>
//       )}

// {jadwalSemproList
//               .filter((jadwal) => {
//                 // Menggabungkan tanggal, bulan, dan tahun dari Firebase untuk membuat objek Date
//                 const jadwalDate = new Date(`${jadwal.tahun}-${jadwal.bulan}-${jadwal.tanggal}`);
//                 return jadwalDate.toLocaleDateString()
//               })
//               .map((jadwal) => (
//                 <li key={jadwal.id} className={styles.cardBox}>
//                   {/* <h4>{jadwal.nama}</h4> */}
//                   {/* <p><strong>Jurusan:</strong> {jadwal.jurusan}</p>
//                   <p><strong>Mode Sidang:</strong> {jadwal.mode}</p> */}
//                   <p><strong>Tanggal:</strong> {jadwal.tanggal} {jadwal.bulan} {jadwal.tahun}</p>
//                   <p>*Silahkan klik tanggal sesuai tanggal yang diberikan untuk mengetahui detail lebih lanjut</p>
//                   {/* <p><strong>Ruangan:</strong> {jadwal.ruangan}</p> */}
//                 </li>
//               ))}

//       <h3 className={styles.subTitle}>Upload Revisi Files</h3>
//       {revisiFiles.map((file, index) => (
//         <div key={index}>
//           <input type="file" onChange={(e) => handleFileChange(index, e.target.files[0])} />
//         </div>
//       ))}

//       <h3 className={styles.subTitle}>Upload Dokumen Pendukung</h3>
//       {Object.keys(selectedFiles).map((key) => (
//         <div key={key}>
//           <label>{key.toUpperCase()}:</label>
//           <input type="file" onChange={(e) => handleSelectedFileChange(key, e.target.files[0])} />
//         </div>
//       ))}

//       <button onClick={submitRevisi} className={styles.submitButton}>Kirim Revisi</button>
//     </div>
//   );
// }




"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase"; // Import konfigurasi Firebase
import Navbar from "../navbar/Navbar";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const DisplayJadwalPengujiCalendar = () => {
  const [jadwalPengujiData, setJadwalPengujiData] = useState([]);
  const [loading, setLoading] = useState(true);

  const localizer = momentLocalizer(moment);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "jadwalPenguji2"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setJadwalPengujiData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Memperbarui pengambilan event berdasarkan tanggalSidang
  const events = jadwalPengujiData.map((item) => ({
    id: item.id,
    title: item.penguji || "Jadwal Sidang", // Nama penguji sebagai title utama
    start: moment(item.tanggalSidang, "YYYY-MM-DD").toDate(),
    end: moment(item.tanggalSidang, "YYYY-MM-DD").endOf('day').toDate(),
    allDay: true, // Jika acara berlangsung sepanjang hari
    angkatan: item.angkatan,
    cabangKampus: item.cabangKampus,
    dosen: item.dosen,
    fileTA1Url: item.fileTA1Url,
    jurusan: item.jurusan,
    noWhatsapp: item.noWhatsapp,
    status: item.status,
    nama: item.nama,
    penguji: item.penguji,
    penguji2: item.penguji2,
    daftarNilaiUrl: item.daftarNilaiUrl,
    krsUrl: item.krsUrl,
    sksberjalan: item.sksberjalan,
    sksditempuh: item.sksditempuh,
    statusJadwalSidangSempro: item.statusJadwalSidangSempro,
    pengajuanSidangUrl: item.pengajuanSidangUrl, // Menambahkan pengajuanSidangUrl
  }));

  if (loading) {
    return <p>Loading data...</p>;
  }

  // Fungsi untuk menampilkan lebih banyak informasi ketika event diklik
  const handleEventClick = (event) => {
    alert(`
      Detail Jadwal Sidang:
      Penguji: ${event.penguji || "Tidak ada penguji"}
      Penguji 2: ${event.penguji2 || "Tidak ada penguji"}
      Nama Mahasiswa: ${event.nama || "Tidak ada nama"}
      Jurusan: ${event.jurusan || "Tidak ada jurusan"}
      SKS Berjalan: ${event.sksberjalan || "Tidak ada data SKS Berjalan"}
      SKS Ditempuh: ${event.sksditempuh || "Tidak ada data SKS Ditempuh"}
      WhatsApp: ${event.noWhatsapp || "Tidak ada nomor WhatsApp"}
      NIM: ${event.id || "Tidak ada NIM"}
      Mahasiswa Cabang Kampus: ${event.cabangKampus || "Tidak ada data cabang kampus"}
      Mahasiswa Angkatan: ${event.angkatan || "Tidak ada data angkatan"}
      Tanggal Sidang: ${event.tanggalSidang || "Belum ada tanggal sidang"}
      Dosen Pebimbing: ${event.dosen || "Tidak ada dosen"}
      Status Penyerahan Dokumen: ${event.status || "Tidak ada status penyerahan dokumen"}
      Status Sidang: ${event.statusJadwalSidangSempro || "Tidak ada status Sidang"}
      File TA: ${event.fileTA1Url ? `<a href="${event.fileTA1Url}" target="_blank">Download File TA</a>` : "Tidak ada file TA"}
      Daftar Nilai: ${event.daftarNilaiUrl ? `<a href="${event.daftarNilaiUrl}" target="_blank">Download File Daftar Nilai</a>` : "Tidak ada file Daftar Nilai"}
      Data KRS: ${event.krsUrl ? `<a href="${event.krsUrl}" target="_blank">Download File Data KRS</a>` : "Tidak ada file Data KRS"}
      Pengajuan Sidang: ${event.pengajuanSidangUrl ? `<a href="${event.pengajuanSidangUrl}" target="_blank">Download Pengajuan Sidang</a>` : "Tidak ada pengajuan sidang"}
    `);
  };

  return (
    <div>
      <Navbar />
      <h2>Kalender Jadwal Penguji</h2>
      {jadwalPengujiData.length === 0 ? (
        <p>Tidak ada data ditemukan.</p>
      ) : (
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, margin: "50px" }}
          onSelectEvent={handleEventClick} // Menambahkan fungsi onClick untuk melihat detail
        />
      )}
    </div>
  );
};

export default DisplayJadwalPengujiCalendar;


