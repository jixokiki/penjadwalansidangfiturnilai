// "use client"
// import { useEffect, useState } from "react";
// import { auth, db } from "../../firebase";
// import { collection, query, where, getDocs } from "firebase/firestore";

// export default function DashboardDosen() {
//   const [penjadwalan, setPenjadwalan] = useState([]);

//   useEffect(() => {
//     const fetchPenjadwalan = async () => {
//       try {
//         const user = auth.currentUser;
//         const q = query(collection(db, "penjadwalan"), where("dosenNim", "==", user.uid));
//         const querySnapshot = await getDocs(q);
//         setPenjadwalan(querySnapshot.docs.map(doc => doc.data()));
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchPenjadwalan();
//   }, []);

//   return (
//     <div>
//       <h1>Dashboard Dosen</h1>
//       <ul>
//         {penjadwalan.map((jadwal, index) => (
//           <li key={index}>
//             {jadwal.mahasiswaNim} - {jadwal.jadwal}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


//tgl 6 desember 2024
// "use client";
// import { useEffect, useState } from "react";
// import { auth, db } from "../../firebase";
// import { collection, query, getDocs } from "firebase/firestore";
// import styles from "./dashboardDosen.module.css";
// import NavbarDosen from "../navbardosen/page";
// import { onAuthStateChanged } from "firebase/auth";
// import Calendar from "react-calendar"; // Import Calendar component
// import 'react-calendar/dist/Calendar.css'; // Import Calendar CSS

// export default function DashboardDosen() {
//   const [jadwalSemproList, setJadwalSemproList] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(null); // State for selected date
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setIsLoggedIn(!!user);
//     });
//     return () => unsubscribe();
//   }, []);

//   useEffect(() => {
//     const fetchJadwalSemproData = async () => {
//       try {
//         const jadwalSemproCollection = collection(db, "jadwalSempro");
//         const jadwalSemproSnapshot = await getDocs(jadwalSemproCollection);
//         const jadwalSemproData = jadwalSemproSnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setJadwalSemproList(jadwalSemproData);
//       } catch (error) {
//         console.error("Error fetching jadwalSempro data: ", error);
//       }
//     };
//     fetchJadwalSemproData();
//   }, []);

//   // Filter events for the selected date
//   const filteredJadwal = selectedDate
//     ? jadwalSemproList.filter((jadwal) => {
//         // Convert month names to numbers
//         const monthNames = [
//           "January", "February", "March", "April", "May", "June",
//           "July", "August", "September", "October", "November", "December"
//         ];
        
//         const monthIndex = monthNames.indexOf(jadwal.bulan); // Find the index of the month
//         if (monthIndex === -1) return false; // Invalid month name, skip this entry

//         // Create a Date object for the jadwal entry
//         const jadwalDate = new Date(
//           parseInt(jadwal.tahun), // Convert year to integer
//           monthIndex, // Month index (0 for January, 11 for December)
//           parseInt(jadwal.tanggal) // Convert day to integer
//         );

//         // Compare jadwalDate with selectedDate
//         return (
//           jadwalDate.toDateString() === selectedDate.toDateString()
//         );
//       })
//     : [];

//   return (
//     <>
//       <NavbarDosen isLoggedIn={isLoggedIn} />
//       <div className={styles.container}>
//         <h1 className={styles.title}>Dashboard Dosen</h1>
        
//         <h2 className={styles.subTitle}>Pilih Tanggal Sidang Sempro</h2>
//         {/* Calendar Component */}
//         <Calendar
//           onChange={setSelectedDate}
//           value={selectedDate}
//         />

//         {/* Display events for the selected date */}
//         {selectedDate && (
//           <div className={styles.selectedDateContainer}>
//             <h3 className={styles.selectedDateTitle}>Jadwal Sidang pada {selectedDate.toDateString()}</h3>
//             {filteredJadwal.length > 0 ? (
//               <ul className={styles.list}>
//                 {filteredJadwal.map((jadwal) => (
//                   <li key={jadwal.id} className={styles.listItem}>
//                     <p><strong>Nama:</strong> {jadwal.nama}</p>
//                     <p><strong>Jurusan:</strong> {jadwal.jurusan}</p>
//                     <p><strong>Angkatan:</strong> {jadwal.angkatan}</p>
//                     <p><strong>Cabang Kampus:</strong> {jadwal.cabangKampus}</p>
//                     <p><strong>Nomor WhatsApp:</strong> {jadwal.noWhatsapp}</p>
//                     <p><strong>Mode Sidang:</strong> {jadwal.mode}</p>

//                     {jadwal.mode === "online" && (
//                       <div>
//                         <p><strong>Link GMeet:</strong> <a href={jadwal.gmeetLink} target="_blank" rel="noopener noreferrer">{jadwal.gmeetLink}</a></p>
//                       </div>
//                     )}

//                     {jadwal.mode === "offline" && (
//                       <div>
//                         <p><strong>Jam:</strong> {jadwal.jam}</p>
//                         <p><strong>Ruangan:</strong> {jadwal.ruangan}</p>
//                         <p><strong>Kampus:</strong> {jadwal.kampus}</p>
//                       </div>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p className={styles.noData}>Tidak ada jadwal sidang untuk tanggal ini.</p>
//             )}
//           </div>
//         )}
//       </div>
//     </>
//   );
// }



"use client";
import { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import { collection, query, getDocs } from "firebase/firestore";
import NavbarDosen from "../navbardosen/page";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import styles from "./dashboardDosen.module.css";
import { onAuthStateChanged } from "firebase/auth";
import { enUS, id } from "date-fns/locale";


export default function DashboardDosen() {
  const [jadwalSemproList, setJadwalSemproList] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchJadwalSemproData = async () => {
      try {
        const jadwalSemproCollection = collection(db, "jadwalSempro");
        const jadwalSemproSnapshot = await getDocs(jadwalSemproCollection);
        const jadwalSemproData = jadwalSemproSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setJadwalSemproList(jadwalSemproData);
      } catch (error) {
        console.error("Error fetching jadwalSempro data:", error);
      }
    };
    fetchJadwalSemproData();
  }, []);

  const filteredJadwal = selectedDate
    ? jadwalSemproList.filter((jadwal) => {
        const jadwalDate = new Date(jadwal.date);
        return jadwalDate.toDateString() === selectedDate.toDateString();
      })
    : [];

  return (
    <>
      <NavbarDosen isLoggedIn={isLoggedIn} />
      <div className={styles.container}>
        <h1 className={styles.title}>Dashboard Dosen</h1>

        <h2 className={styles.subTitle}>Pilih Tanggal Sidang Sempro</h2>
        <Calendar onChange={setSelectedDate} value={selectedDate} />

        {selectedDate && (
          <div className={styles.selectedDateContainer}>
            <h3>Jadwal Sidang pada {selectedDate.toDateString()}</h3>
            {filteredJadwal.length > 0 ? (
              <ul className={styles.list}>
                {filteredJadwal.map((jadwal) => (
                  <li key={jadwal.id} className={styles.listItem}>
                    <p><strong>Nama:</strong> {jadwal.nama}</p>
                    <p><strong>Jurusan:</strong> {jadwal.jurusan}</p>
                    <p><strong>Mode:</strong> {jadwal.mode}</p>
                    {jadwal.mode === "online" && (
                      <p><strong>Link GMeet:</strong> <a href={jadwal.gmeetLink}>{jadwal.gmeetLink}</a></p>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Tidak ada jadwal sidang untuk tanggal ini.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
