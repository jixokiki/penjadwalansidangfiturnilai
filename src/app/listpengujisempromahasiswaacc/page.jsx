// "use client";
// import { useState, useEffect } from 'react';
// import { db } from '../../firebase';
// import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
// import styles from './listpengujisempromahasiswaacc.module.css';
// import NavbarPenguji from '../navbarpenguji/page';

// export default function ListAllUsersSempro({ userNim }) {
//   const [usersSemproList, setUsersSemproList] = useState([]);
//   const [pengujiName, setPengujiName] = useState("");

//   // Fetch penguji name based on userNim
//   useEffect(() => {
//     const fetchPengujiName = async () => {
//       try {
//         const userDoc = await getDoc(doc(db, "users", userNim));
//         if (userDoc.exists() && userDoc.data().role === "penguji") {
//           setPengujiName(userDoc.data().nama); // Assuming "nama" holds the penguji's name
//         }
//       } catch (error) {
//         console.error("Error fetching penguji name:", error);
//       }
//     };

//     if (userNim) {
//       fetchPengujiName();
//     }
//   }, [userNim]);

//   // Fetch data from usersSempro collection and filter by penguji name
//   useEffect(() => {
//     const fetchAllUsersSemproData = async () => {
//       try {
//         const usersSemproCollection = collection(db, "usersSempro");
//         const usersSemproSnapshot = await getDocs(usersSemproCollection);
//         const usersSemproData = usersSemproSnapshot.docs
//           .map((doc) => ({ id: doc.id, ...doc.data() }))
//           .filter((data) => data.penguji === pengujiName); // Filter for specific penguji's data
//         setUsersSemproList(usersSemproData);
//       } catch (error) {
//         console.error("Error fetching usersSempro data: ", error);
//       }
//     };

//     if (pengujiName) {
//       fetchAllUsersSemproData();
//     }
//   }, [pengujiName]);

//   return (
//     <div>
//       <NavbarPenguji />
//       <h2 className={styles.subTitle}>Data Mahasiswa untuk Penguji: {pengujiName}</h2>
//       <ul className={styles.list}>
//         {usersSemproList.map((user) => (
//           <li key={user.id} className={styles.listItem}>
//             <p><strong>Nama:</strong> {user.nama}</p>
//             <p><strong>Jurusan:</strong> {user.jurusan}</p>
//             <p><strong>Angkatan:</strong> {user.angkatan}</p>
//             <p><strong>Cabang Kampus:</strong> {user.cabangKampus}</p>
//             <p><strong>Nomor WhatsApp:</strong> {user.noWhatsapp}</p>
//             <p><strong>Status:</strong> {user.status || "Belum diverifikasi"}</p>
//             {user.penguji && <p><strong>Dosen Penguji:</strong> {user.penguji}</p>}
//             <p>File Pengajuan: <a href={user.pengajuanSidangUrl} target="_blank" rel="noopener noreferrer">Download</a></p>
//             <p>File KRS: <a href={user.krsUrl} target="_blank" rel="noopener noreferrer">Download</a></p>
//             <p>File Daftar Nilai: <a href={user.daftarNilaiUrl} target="_blank" rel="noopener noreferrer">Download</a></p>
//             <p>File TA1: <a href={user.fileTA1Url} target="_blank" rel="noopener noreferrer">Download</a></p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }



// "use client";
// import { useState, useEffect } from 'react';
// import { db } from '../../firebase';
// import { collection, getDocs } from 'firebase/firestore';
// import styles from './listpengujisempromahasiswaacc.module.css';
// import NavbarPenguji from '../navbarpenguji/page';
// // import Navbar from '../navbar/page';

// export default function ListAllUsersSempro() {
//   const [usersSemproList, setUsersSemproList] = useState([]);

//   // Fetch all data from usersSempro collection
//   const fetchAllUsersSemproData = async () => {
//     try {
//       const usersSemproCollection = collection(db, "usersSempro");
//       const usersSemproSnapshot = await getDocs(usersSemproCollection);
//       const usersSemproData = usersSemproSnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setUsersSemproList(usersSemproData);
//     } catch (error) {
//       console.error("Error fetching usersSempro data: ", error);
//     }
//   };

//   // Fetch data on component mount
//   useEffect(() => {
//     fetchAllUsersSemproData();
//   }, []);

//   return (
//     <div>
//       <NavbarPenguji />
//       <h2 className={styles.subTitle}>Daftar Semua Data usersSempro</h2>
//       <ul className={styles.list}>
//         {usersSemproList.map((user) => (
//           <li key={user.id} className={styles.listItem}>
//             <p><strong>Nama:</strong> {user.nama}</p>
//             <p><strong>Jurusan:</strong> {user.jurusan}</p>
//             <p><strong>Angkatan:</strong> {user.angkatan}</p>
//             <p><strong>Cabang Kampus:</strong> {user.cabangKampus}</p>
//             <p><strong>Nomor WhatsApp:</strong> {user.noWhatsapp}</p>
//             <p><strong>Status:</strong> {user.status || "Belum diverifikasi"}</p>
//             {user.penguji && <p><strong>Dosen Penguji:</strong> {user.penguji}</p>}
//             <p>File Pengajuan: <a href={user.pengajuanSidangUrl} target="_blank" rel="noopener noreferrer">Download</a></p>
//             <p>File KRS: <a href={user.krsUrl} target="_blank" rel="noopener noreferrer">Download</a></p>
//             <p>File Daftar Nilai: <a href={user.daftarNilaiUrl} target="_blank" rel="noopener noreferrer">Download</a></p>
//             <p>File TA1: <a href={user.fileTA1Url} target="_blank" rel="noopener noreferrer">Download</a></p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


//update tgl 8 november 2024
// "use client";
// import { useState, useEffect } from 'react';
// import { db } from '../../firebase';
// import { collection, getDocs, addDoc } from 'firebase/firestore';
// import styles from './listpengujisempromahasiswaacc.module.css';
// import NavbarPenguji from '../navbarpenguji/page';

// export default function ListAllUsersSempro() {
//   const [usersSemproList, setUsersSemproList] = useState([]);
//   const [selectedOption, setSelectedOption] = useState({});
//   const [formValues, setFormValues] = useState({});

//   // Fetch all data from usersSempro collection
//   const fetchAllUsersSemproData = async () => {
//     try {
//       const usersSemproCollection = collection(db, "usersSempro");
//       const usersSemproSnapshot = await getDocs(usersSemproCollection);
//       const usersSemproData = usersSemproSnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setUsersSemproList(usersSemproData);
//     } catch (error) {
//       console.error("Error fetching usersSempro data: ", error);
//     }
//   };

//   // Handle scheduling option change
//   const handleOptionChange = (userId, option) => {
//     setSelectedOption((prev) => ({ ...prev, [userId]: option }));
//   };

//   // Handle form value change
//   const handleInputChange = (userId, field, value) => {
//     setFormValues((prev) => ({
//       ...prev,
//       [userId]: { ...prev[userId], [field]: value },
//     }));
//   };

//   // Submit schedule to Firebase
//   const handleSubmit = async (userId) => {
//     const scheduleData = {
//       ...formValues[userId],
//       userId,
//       mode: selectedOption[userId],
//     };

//     try {
//       await addDoc(collection(db, "jadwalSempro"), scheduleData);
//       alert("Jadwal sidang sempro berhasil disimpan");
//     } catch (error) {
//       console.error("Error adding schedule to Firebase:", error);
//       alert("Terjadi kesalahan saat menyimpan jadwal");
//     }
//   };

//   // Generate WhatsApp message link
//   const handleSendWhatsApp = (userId) => {
//     const userValues = formValues[userId];
//     let message = `Halo, berikut adalah informasi untuk sidang sempro Anda:\n\n`;

//     if (selectedOption[userId] === "online") {
//       message += `Mode: Online\nLink GMeet: ${userValues.gmeetLink}\nNomor WhatsApp: ${userValues.noWhatsapp}`;
//     } else if (selectedOption[userId] === "offline") {
//       message += `Mode: Offline\nJam: ${userValues.jam}\nTanggal: ${userValues.tanggal} ${userValues.bulan} ${userValues.tahun}\nRuangan: ${userValues.ruangan}\nKampus: ${userValues.kampus}\nNomor WhatsApp: ${userValues.noWhatsapp}`;
//     }

//     const whatsappUrl = `https://wa.me/${userValues.noWhatsapp}?text=${encodeURIComponent(message)}`;
//     window.open(whatsappUrl, "_blank");
//   };

//   // Fetch data on component mount
//   useEffect(() => {
//     fetchAllUsersSemproData();
//   }, []);

//   return (
//     <div>
//       <NavbarPenguji />
//       <h2 className={styles.subTitle}>Daftar Semua Data usersSempro</h2>
//       <ul className={styles.list}>
//         {usersSemproList.map((user) => (
//           <li key={user.id} className={styles.listItem}>
//             <p><strong>Nama:</strong> {user.nama}</p>
//             <p><strong>Jurusan:</strong> {user.jurusan}</p>
//             <p><strong>Angkatan:</strong> {user.angkatan}</p>
//             <p><strong>Cabang Kampus:</strong> {user.cabangKampus}</p>
//             <p><strong>Nomor WhatsApp:</strong> {user.noWhatsapp}</p>
//             <p><strong>Status:</strong> {user.status || "Belum diverifikasi"}</p>
//             {user.penguji && <p><strong>Dosen Penguji:</strong> {user.penguji}</p>}
//             <p>File Pengajuan: <a href={user.pengajuanSidangUrl} target="_blank" rel="noopener noreferrer">Download</a></p>
//             <p>File KRS: <a href={user.krsUrl} target="_blank" rel="noopener noreferrer">Download</a></p>
//             <p>File Daftar Nilai: <a href={user.daftarNilaiUrl} target="_blank" rel="noopener noreferrer">Download</a></p>
//             <p>File TA1: <a href={user.fileTA1Url} target="_blank" rel="noopener noreferrer">Download</a></p>

//             {user.status === "Data Dikirim Ke Penguji" && (
//               <div>
//                 <label>Mode Sidang:</label>
//                 <select
//                   value={selectedOption[user.id] || ""}
//                   onChange={(e) => handleOptionChange(user.id, e.target.value)}
//                 >
//                   <option value="">Pilih Mode</option>
//                   <option value="online">Online</option>
//                   <option value="offline">Offline</option>
//                 </select>

//                 {selectedOption[user.id] === "online" && (
//                   <div>
//                     <input
//                       type="text"
//                       placeholder="Masukkan Link GMeet"
//                       onChange={(e) => handleInputChange(user.id, "gmeetLink", e.target.value)}
//                     />
//                     <input
//                       type="text"
//                       placeholder="Masukkan Nomor WhatsApp"
//                       onChange={(e) => handleInputChange(user.id, "noWhatsapp", e.target.value)}
//                     />
//                   </div>
//                 )}

//                 {selectedOption[user.id] === "offline" && (
//                   <div>
//                     <input
//                       type="text"
//                       placeholder="Masukkan Jam"
//                       onChange={(e) => handleInputChange(user.id, "jam", e.target.value)}
//                     />
//                     <input
//                       type="text"
//                       placeholder="Masukkan Tanggal"
//                       onChange={(e) => handleInputChange(user.id, "tanggal", e.target.value)}
//                     />
//                     <input
//                       type="text"
//                       placeholder="Masukkan Bulan"
//                       onChange={(e) => handleInputChange(user.id, "bulan", e.target.value)}
//                     />
//                     <input
//                       type="text"
//                       placeholder="Masukkan Tahun"
//                       onChange={(e) => handleInputChange(user.id, "tahun", e.target.value)}
//                     />
//                     <input
//                       type="text"
//                       placeholder="Ruangan"
//                       onChange={(e) => handleInputChange(user.id, "ruangan", e.target.value)}
//                     />
//                     <input
//                       type="text"
//                       placeholder="Kampus"
//                       onChange={(e) => handleInputChange(user.id, "kampus", e.target.value)}
//                     />
//                     <input
//                       type="text"
//                       placeholder="Masukkan Nomor WhatsApp"
//                       onChange={(e) => handleInputChange(user.id, "noWhatsapp", e.target.value)}
//                     />
//                   </div>
//                 )}

//                 <button onClick={() => handleSubmit(user.id)}>Simpan Jadwal</button>
//                 <button onClick={() => handleSendWhatsApp(user.id)}>Kirim Info ke WhatsApp</button>
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


//update terbaru tgl 8 november 2024
// "use client";
// import { useState, useEffect } from 'react';
// import { db } from '../../firebase';
// import { collection, getDocs, addDoc, doc, getDoc } from 'firebase/firestore';
// import styles from './listpengujisempromahasiswaacc.module.css';
// import NavbarPenguji from '../navbarpenguji/page';

// export default function ListAllUsersSempro() {
//   const [usersSemproList, setUsersSemproList] = useState([]);
//   const [selectedOption, setSelectedOption] = useState({});
//   const [formValues, setFormValues] = useState({});

//   // Fetch all data from usersSempro collection
//   const fetchAllUsersSemproData = async () => {
//     try {
//       const usersSemproCollection = collection(db, "usersSempro");
//       const usersSemproSnapshot = await getDocs(usersSemproCollection);
//       const usersSemproData = usersSemproSnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setUsersSemproList(usersSemproData);
//     } catch (error) {
//       console.error("Error fetching usersSempro data: ", error);
//     }
//   };

//   // Handle scheduling option change
//   const handleOptionChange = (userId, option) => {
//     setSelectedOption((prev) => ({ ...prev, [userId]: option }));
//   };

//   // Handle form value change
//   const handleInputChange = (userId, field, value) => {
//     setFormValues((prev) => ({
//       ...prev,
//       [userId]: { ...prev[userId], [field]: value },
//     }));
//   };

//   // Submit schedule to Firebase with userSempro data included
//   const handleSubmit = async (userId) => {
//     try {
//       const userDocRef = doc(db, "usersSempro", userId);
//       const userDocSnap = await getDoc(userDocRef);

//       if (userDocSnap.exists()) {
//         const userSemproData = userDocSnap.data();
//         const scheduleData = {
//           ...formValues[userId],
//           userId,
//           mode: selectedOption[userId],
//           ...userSemproData // Include all data from userSempro in jadwalSempro
//         };

//         await addDoc(collection(db, "jadwalSempro"), scheduleData);
//         alert("Jadwal sidang sempro berhasil disimpan dan data pengguna disalin ke jadwalSempro.");
//       } else {
//         console.error("User data not found in usersSempro.");
//       }
//     } catch (error) {
//       console.error("Error adding schedule to Firebase:", error);
//       alert("Terjadi kesalahan saat menyimpan jadwal");
//     }
//   };

//   // Generate WhatsApp message link
//   const handleSendWhatsApp = (userId) => {
//     const userValues = formValues[userId];
//     let message = `Halo, berikut adalah informasi untuk sidang sempro Anda:\n\n`;

//     if (selectedOption[userId] === "online") {
//       message += `Mode: Online\nLink GMeet: ${userValues.gmeetLink}\nNomor WhatsApp: ${userValues.noWhatsapp}`;
//     } else if (selectedOption[userId] === "offline") {
//       message += `Mode: Offline\nJam: ${userValues.jam}\nTanggal: ${userValues.tanggal} ${userValues.bulan} ${userValues.tahun}\nRuangan: ${userValues.ruangan}\nKampus: ${userValues.kampus}\nNomor WhatsApp: ${userValues.noWhatsapp}`;
//     }

//     const whatsappUrl = `https://wa.me/${userValues.noWhatsapp}?text=${encodeURIComponent(message)}`;
//     window.open(whatsappUrl, "_blank");
//   };

//   // Fetch data on component mount
//   useEffect(() => {
//     fetchAllUsersSemproData();
//   }, []);

//   return (
//     <div>
//       <NavbarPenguji />
//       <h2 className={styles.subTitle}>Daftar Semua Data usersSempro</h2>
//       <ul className={styles.list}>
//         {usersSemproList.map((user) => (
//           <li key={user.id} className={styles.listItem}>
//             <p><strong>Nama:</strong> {user.nama}</p>
//             <p><strong>Jurusan:</strong> {user.jurusan}</p>
//             <p><strong>Angkatan:</strong> {user.angkatan}</p>
//             <p><strong>Cabang Kampus:</strong> {user.cabangKampus}</p>
//             <p><strong>Nomor WhatsApp:</strong> {user.noWhatsapp}</p>
//             <p><strong>Status:</strong> {user.status || "Belum diverifikasi"}</p>
//             {user.penguji && <p><strong>Dosen Penguji:</strong> {user.penguji}</p>}
//             <p>File Pengajuan: <a href={user.pengajuanSidangUrl} target="_blank" rel="noopener noreferrer">Download</a></p>
//             <p>File KRS: <a href={user.krsUrl} target="_blank" rel="noopener noreferrer">Download</a></p>
//             <p>File Daftar Nilai: <a href={user.daftarNilaiUrl} target="_blank" rel="noopener noreferrer">Download</a></p>
//             <p>File TA1: <a href={user.fileTA1Url} target="_blank" rel="noopener noreferrer">Download</a></p>

//             {user.status === "Data Dikirim Ke Penguji" && (
//               <div>
//                 <label>Mode Sidang:</label>
//                 <select
//                   value={selectedOption[user.id] || ""}
//                   onChange={(e) => handleOptionChange(user.id, e.target.value)}
//                 >
//                   <option value="">Pilih Mode</option>
//                   <option value="online">Online</option>
//                   <option value="offline">Offline</option>
//                 </select>

//                 {selectedOption[user.id] === "online" && (
//                   <div>
//                     <input
//                       type="text"
//                       placeholder="Masukkan Link GMeet"
//                       onChange={(e) => handleInputChange(user.id, "gmeetLink", e.target.value)}
//                     />
//                     <input
//                       type="text"
//                       placeholder="Masukkan Nomor WhatsApp"
//                       onChange={(e) => handleInputChange(user.id, "noWhatsapp", e.target.value)}
//                     />
//                   </div>
//                 )}

//                 {selectedOption[user.id] === "offline" && (
//                   <div>
//                     <input
//                       type="text"
//                       placeholder="Masukkan Jam"
//                       onChange={(e) => handleInputChange(user.id, "jam", e.target.value)}
//                     />
//                     <input
//                       type="text"
//                       placeholder="Masukkan Tanggal"
//                       onChange={(e) => handleInputChange(user.id, "tanggal", e.target.value)}
//                     />
//                     <input
//                       type="text"
//                       placeholder="Masukkan Bulan"
//                       onChange={(e) => handleInputChange(user.id, "bulan", e.target.value)}
//                     />
//                     <input
//                       type="text"
//                       placeholder="Masukkan Tahun"
//                       onChange={(e) => handleInputChange(user.id, "tahun", e.target.value)}
//                     />
//                     <input
//                       type="text"
//                       placeholder="Ruangan"
//                       onChange={(e) => handleInputChange(user.id, "ruangan", e.target.value)}
//                     />
//                     <input
//                       type="text"
//                       placeholder="Kampus"
//                       onChange={(e) => handleInputChange(user.id, "kampus", e.target.value)}
//                     />
//                     <input
//                       type="text"
//                       placeholder="Masukkan Nomor WhatsApp"
//                       onChange={(e) => handleInputChange(user.id, "noWhatsapp", e.target.value)}
//                     />
//                   </div>
//                 )}

//                 <button onClick={() => handleSubmit(user.id)}>Simpan Jadwal</button>
//                 <button onClick={() => handleSendWhatsApp(user.id)}>Kirim Info ke WhatsApp</button>
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


//tgl 17 desember 2024
// import { useState, useEffect } from "react";
// import { db } from "../../firebase";
// import { collection, getDocs, setDoc, doc as firestoreDoc, getDoc } from "firebase/firestore"; // Note: Using `setDoc` instead of `addDoc`
// import styles from "./listpengujisempromahasiswaacc.module.css";
// import NavbarPenguji from "../navbarpenguji/page";

// export default function ListAllUsersSempro() {
//   const [usersSemproList, setUsersSemproList] = useState([]);
//   const [selectedOption, setSelectedOption] = useState({});
//   const [formValues, setFormValues] = useState({});

//   // Fetch all data from the usersSempro collection
//   const fetchAllUsersSemproData = async () => {
//     try {
//       const usersSemproCollection = collection(db, "usersSempro");
//       const usersSemproSnapshot = await getDocs(usersSemproCollection);
//       const usersSemproData = await Promise.all(
//         usersSemproSnapshot.docs.map(async (doc) => {
//           const userData = { id: doc.id, ...doc.data() };

//           // Check if the user has jadwalSempro data
//           const jadwalSemproDocRef = firestoreDoc(db, "jadwalSempro", doc.id);
//           const jadwalSemproDocSnap = await getDoc(jadwalSemproDocRef);
//           if (jadwalSemproDocSnap.exists()) {
//             const jadwalSemproData = jadwalSemproDocSnap.data();
//             userData.penguji = jadwalSemproData.penguji || null;
//             userData.penguji2 = jadwalSemproData.penguji2 || null;
//             userData.tanggal = jadwalSemproData.tanggal || null;
//             userData.bulan = jadwalSemproData.bulan || null;
//             userData.tahun = jadwalSemproData.tahun || null;
//           }
//           return userData;
//         })
//       );
//       setUsersSemproList(usersSemproData);
//     } catch (error) {
//       console.error("Error fetching usersSempro data: ", error);
//     }
//   };

//   // Handle option change
//   const handleOptionChange = (userId, value) => {
//     setSelectedOption((prevState) => ({
//       ...prevState,
//       [userId]: value,
//     }));
//   };

//   // Handle input change
//   const handleInputChange = (userId, field, value) => {
//     setFormValues((prevState) => ({
//       ...prevState,
//       [userId]: {
//         ...(prevState[userId] || {}),
//         [field]: value,
//       },
//     }));
//   };

//   // Handle form submission
//   // const handleSubmit = async (userId) => {
//   //   const userFormData = formValues[userId];
//   //   if (!userFormData) {
//   //     alert("Form data is incomplete.");
//   //     return;
//   //   }

//   //   try {
//   //     // Correctly reference the document in the "jadwalSempro" collection
//   //     const jadwalSemproDocRef = firestoreDoc(db, "jadwalSempro", userId);
//   //     await setDoc(jadwalSemproDocRef, userFormData, { merge: true });
//   //     alert("Data berhasil disimpan.");
//   //   } catch (error) {
//   //     console.error("Error saving schedule data:", error);
//   //     alert("Error saving data.");
//   //   }
//   // };

//   const handleSubmit = async (userId) => {
//     const userFormData = formValues[userId];
//     if (!userFormData) {
//       alert("Form data is incomplete.");
//       return;
//     }
  
//     // Include the nama field in the userFormData
//     const user = usersSemproList.find((user) => user.id === userId);
//     if (user && user.nama) {
//       userFormData.nama = user.nama; // Add the nama field to the form data
//     }
  
//     try {
//       // Correctly reference the document in the "jadwalSempro" collection
//       const jadwalSemproDocRef = firestoreDoc(db, "jadwalSempro", userId);
//       await setDoc(jadwalSemproDocRef, userFormData, { merge: true });
//       alert("Data berhasil disimpan.");
//     } catch (error) {
//       console.error("Error saving schedule data:", error);
//       alert("Error saving data.");
//     }
//   };
  
//   // Simulate sending WhatsApp info
//   const handleSendWhatsApp = (userId) => {
//     const userFormData = formValues[userId];
//     if (!userFormData) {
//       alert("No data available to send.");
//       return;
//     }

//     const message = `Jadwal Sidang:\nMode: ${selectedOption[userId]}\n${Object.entries(userFormData)
//       .map(([key, value]) => `${key}: ${value}`)
//       .join("\n")}`;

//     console.log(`Send WhatsApp to ${userFormData.noWhatsapp}: ${message}`);
//     alert("Info sent to WhatsApp (simulation).");
//   };

//   // Fetch data on mount
//   useEffect(() => {
//     fetchAllUsersSemproData();
//   }, []);

//   return (
//     <div>
//       <NavbarPenguji />
//       <h2 className={styles.subTitle}>Daftar Semua Data usersSempro</h2>
//       <ul className={styles.list}>
//         {usersSemproList.map((user) => (
//           <li key={user.id} className={styles.listItem}>
//             <p><strong>Nama:</strong> {user.nama}</p>
//             <p><strong>Jurusan:</strong> {user.jurusan}</p>
//             <p><strong>Angkatan:</strong> {user.angkatan}</p>
//             <p><strong>Cabang Kampus:</strong> {user.cabangKampus}</p>
//             <p><strong>Nomor WhatsApp:</strong> {user.noWhatsapp}</p>
//             <p><strong>Status:</strong> {user.status || "Belum diverifikasi"}</p>
//             {user.penguji && <p><strong>Dosen Penguji:</strong> {user.penguji}</p>}
//             {user.penguji2 && <p><strong>Dosen Penguji 2:</strong> {user.penguji2}</p>}
//             {(user.penguji || user.penguji2) && (
//               <p><strong>Tanggal Sidang:</strong> {user.tanggal || "-"} {user.bulan || "-"} {user.tahun || "-"}</p>
//             )}
//             <p>File Pengajuan: <a href={user.pengajuanSidangUrl} target="_blank" rel="noopener noreferrer">Download</a></p>
//             <p>File KRS: <a href={user.krsUrl} target="_blank" rel="noopener noreferrer">Download</a></p>
//             <p>File Daftar Nilai: <a href={user.daftarNilaiUrl} target="_blank" rel="noopener noreferrer">Download</a></p>
//             <p>File TA1: <a href={user.fileTA1Url} target="_blank" rel="noopener noreferrer">Download</a></p>

//             {user.status === "Data Dikirim Ke Penguji" && (
//               <div>
//                 <label>Mode Sidang:</label>
//                 <select
//                   value={selectedOption[user.id] || ""}
//                   onChange={(e) => handleOptionChange(user.id, e.target.value)}
//                 >
//                   <option value="">Pilih Mode</option>
//                   <option value="online">Online</option>
//                   <option value="offline">Offline</option>
//                 </select>

//                 {selectedOption[user.id] === "online" && (
//                   <div>
//                     <input
//                       type="text"
//                       placeholder="Masukkan Link GMeet"
//                       onChange={(e) => handleInputChange(user.id, "gmeetLink", e.target.value)}
//                     />
//                     <input
//                       type="text"
//                       placeholder="Masukkan Nomor WhatsApp"
//                       onChange={(e) => handleInputChange(user.id, "noWhatsapp", e.target.value)}
//                     />
//                   </div>
//                 )}

//                 {selectedOption[user.id] === "offline" && (
//                   <div>
//                     <input
//                       type="text"
//                       placeholder="Masukkan Jam"
//                       onChange={(e) => handleInputChange(user.id, "jam", e.target.value)}
//                     />
//                     <input
//                       type="text"
//                       placeholder="Masukkan Tanggal"
//                       onChange={(e) => handleInputChange(user.id, "tanggal", e.target.value)}
//                     />
//                     <input
//                       type="text"
//                       placeholder="Masukkan Bulan"
//                       onChange={(e) => handleInputChange(user.id, "bulan", e.target.value)}
//                     />
//                     <input
//                       type="text"
//                       placeholder="Masukkan Tahun"
//                       onChange={(e) => handleInputChange(user.id, "tahun", e.target.value)}
//                     />
//                     <input
//                       type="text"
//                       placeholder="Ruangan"
//                       onChange={(e) => handleInputChange(user.id, "ruangan", e.target.value)}
//                     />
//                     <input
//                       type="text"
//                       placeholder="Kampus"
//                       onChange={(e) => handleInputChange(user.id, "kampus", e.target.value)}
//                     />
//                     <input
//                       type="text"
//                       placeholder="Masukkan Nomor WhatsApp"
//                       onChange={(e) => handleInputChange(user.id, "noWhatsapp", e.target.value)}
//                     />
//                   </div>
//                 )}

//                 <button onClick={() => handleSubmit(user.id)}>Simpan Jadwal</button>
//                 <button onClick={() => handleSendWhatsApp(user.id)}>Kirim Info ke WhatsApp</button>
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }



//tgl 19 desember 2024
import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs, setDoc, doc as firestoreDoc, getDoc } from "firebase/firestore"; 
import styles from "./listpengujisempromahasiswaacc.module.css";
import NavbarPenguji from "../navbarpenguji/page";

export default function ListAllUsersSempro() {
  const [usersSemproList, setUsersSemproList] = useState([]);
  const [pengujiList, setPengujiList] = useState([]); // Daftar penguji
  const [selectedOption, setSelectedOption] = useState({}); // Mode Sidang
  const [formValues, setFormValues] = useState({}); // Data Input Form
  const [selectedPenguji, setSelectedPenguji] = useState({}); // Selected penguji
  const [selectedDate, setSelectedDate] = useState({}); // Selected date for each user

  // Fetch semua data dari usersSempro collection
  const fetchAllUsersSemproData = async () => {
    try {
      const usersSemproCollection = collection(db, "usersSempro");
      const usersSemproSnapshot = await getDocs(usersSemproCollection);
      const usersSemproData = await Promise.all(
        usersSemproSnapshot.docs.map(async (doc) => {
          const userData = { id: doc.id, ...doc.data() };

          const jadwalSemproDocRef = firestoreDoc(db, "jadwalSempro", doc.id);
          const jadwalSemproDocSnap = await getDoc(jadwalSemproDocRef);
          if (jadwalSemproDocSnap.exists()) {
            const jadwalSemproData = jadwalSemproDocSnap.data();
            userData.penguji = jadwalSemproData.penguji || null;
            userData.penguji2 = jadwalSemproData.penguji2 || null;
          }
          return userData;
        })
      );
      setUsersSemproList(usersSemproData);
    } catch (error) {
      console.error("Error fetching usersSempro data: ", error);
    }
  };

  // Fetch data penguji dari koleksi 'penguji'
  const fetchPengujiData = async () => {
    try {
      const pengujiCollection = collection(db, "penguji");
      const pengujiSnapshot = await getDocs(pengujiCollection);
      const pengujiData = pengujiSnapshot.docs
        .filter((doc) => doc.data().role === "penguji")
        .map((doc) => ({
          id: doc.id,
          nama: doc.data().nama,
          jurusan: doc.data().jurusan,
          cabangKampus: doc.data().cabangKampus,
        }));
      setPengujiList(pengujiData);
    } catch (error) {
      console.error("Error fetching penguji data: ", error);
    }
  };

  const handleOptionChange = (userId, value) => {
    setSelectedOption((prevState) => ({
      ...prevState,
      [userId]: value,
    }));
  };

  const handleInputChange = (userId, field, value) => {
    setFormValues((prevState) => ({
      ...prevState,
      [userId]: { ...(prevState[userId] || {}), [field]: value },
    }));
  };

  const handleDateChange = (userId, date) => {
    setSelectedDate((prevState) => ({
      ...prevState,
      [userId]: date,
    }));
  };

  const handleSubmit = async (userId) => {
    const userFormData = formValues[userId];
    if (!userFormData) {
      alert("Form data is incomplete.");
      return;
    }
    const user = usersSemproList.find((user) => user.id === userId);
    if (user && user.nama) userFormData.nama = user.nama;

    try {
      const jadwalSemproDocRef = firestoreDoc(db, "jadwalSempro", userId);
      await setDoc(jadwalSemproDocRef, userFormData, { merge: true });
      alert("Data berhasil disimpan.");
    } catch (error) {
      console.error("Error saving schedule data:", error);
      alert("Error saving data.");
    }
  };

  const handleSubmitPenguji = async (userId) => {
    const selectedPengujiName = selectedPenguji[userId];
    const selectedUserDate = selectedDate[userId];
    
    if (!selectedPengujiName || !selectedUserDate) {
      alert("Silakan pilih penguji dan tanggal terlebih dahulu.");
      return;
    }
  
    // Cari data pengguna berdasarkan userId
    const user = usersSemproList.find((user) => user.id === userId);
    
    // Tambahkan semua data user ke dalam dataToSave, lalu tambahkan penguji dan tanggal
    const dataToSave = {
      ...user, // Semua data pengguna (id, nama, jurusan, dll)
      penguji: selectedPengujiName, // Menambahkan/Override penguji
      tanggalSidang: selectedUserDate, // Menambahkan tanggal
    };
  
    try {
      const jadwalPengujiDocRef = firestoreDoc(db, "jadwalPenguji2", userId);
      await setDoc(jadwalPengujiDocRef, dataToSave, { merge: true });
      alert("Data berhasil dikirim ke jadwalPenguji2.");
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Terjadi kesalahan saat menyimpan data.");
    }
  };

  
  useEffect(() => {
    fetchAllUsersSemproData();
    fetchPengujiData();
  }, []);

  return (
    <div>
      <NavbarPenguji />
      <h2 className={styles.subTitle}>Daftar Semua Data usersSempro</h2>
      <ul className={styles.list}>
        {usersSemproList.map((user) => (
          <li key={user.id} className={styles.listItem}>
            <p><strong>Nama:</strong> {user.nama}</p>
            <p><strong>Jurusan:</strong> {user.jurusan}</p>
            <p><strong>Angkatan:</strong> {user.angkatan}</p>
            <p><strong>Cabang Kampus:</strong> {user.cabangKampus}</p>
            <p><strong>Nomor WhatsApp:</strong> {user.noWhatsapp}</p>
            <p><strong>Status:</strong> {user.status || "Belum diverifikasi"}</p>
            <p><strong>Penguji:</strong> {user.penguji || "Belum dipilih"}</p>

            <label>Pilih Penguji:</label>
            <select
              onChange={(e) => setSelectedPenguji({ ...selectedPenguji, [user.id]: e.target.value })}
              value={selectedPenguji[user.id] || ""}
            >
              <option value="">Pilih Penguji</option>
              {pengujiList.map((penguji) => (
                <option key={penguji.id} value={penguji.nama}>
                  {penguji.nama} - {penguji.jurusan} ({penguji.cabangKampus})
                </option>
              ))}
            </select>

            <label>Pilih Tanggal Sidang:</label>
            <input
              type="date"
              onChange={(e) => handleDateChange(user.id, e.target.value)}
              value={selectedDate[user.id] || ""}
            />
            <button onClick={() => handleSubmitPenguji(user.id)}>Kirim Jadwal</button>

            {/* <label>Mode Sidang:</label>
            <select
              value={selectedOption[user.id] || ""}
              onChange={(e) => handleOptionChange(user.id, e.target.value)}
            >
              <option value="">Pilih Mode</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
            <button onClick={() => handleSubmit(user.id)}>Simpan Jadwal</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
}




