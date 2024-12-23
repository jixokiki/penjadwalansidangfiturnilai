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
"use client";
import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, addDoc, doc, getDoc } from 'firebase/firestore';
import styles from './listpengujiskripsimahasiswaacc.module.css';
import NavbarPenguji from '../navbarpenguji/page';

export default function ListAllUsersSkripsi() {
  const [usersSemproList, setUsersSemproList] = useState([]);
  const [selectedOption, setSelectedOption] = useState({});
  const [formValues, setFormValues] = useState({});

  // Fetch all data from usersSempro collection
  const fetchAllUsersSemproData = async () => {
    try {
      const usersSemproCollection = collection(db, "usersSkripsi");
      const usersSemproSnapshot = await getDocs(usersSemproCollection);
      const usersSemproData = usersSemproSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsersSemproList(usersSemproData);
    } catch (error) {
      console.error("Error fetching usersSempro data: ", error);
    }
  };

  // Handle scheduling option change
  const handleOptionChange = (userId, option) => {
    setSelectedOption((prev) => ({ ...prev, [userId]: option }));
  };

  // Handle form value change
  const handleInputChange = (userId, field, value) => {
    setFormValues((prev) => ({
      ...prev,
      [userId]: { ...prev[userId], [field]: value },
    }));
  };

  // Submit schedule to Firebase with userSempro data included
  const handleSubmit = async (userId) => {
    try {
      const userDocRef = doc(db, "usersSkripsi", userId);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const userSemproData = userDocSnap.data();
        const scheduleData = {
          ...formValues[userId],
          userId,
          mode: selectedOption[userId],
          ...userSemproData // Include all data from userSempro in jadwalSempro
        };

        await addDoc(collection(db, "jadwalSkripsi"), scheduleData);
        alert("Jadwal sidang sempro berhasil disimpan dan data pengguna disalin ke jadwalSempro.");
      } else {
        console.error("User data not found in usersSempro.");
      }
    } catch (error) {
      console.error("Error adding schedule to Firebase:", error);
      alert("Terjadi kesalahan saat menyimpan jadwal");
    }
  };

  // Generate WhatsApp message link
  const handleSendWhatsApp = (userId) => {
    const userValues = formValues[userId];
    let message = `Halo, berikut adalah informasi untuk sidang skripsi Anda:\n\n`;

    if (selectedOption[userId] === "online") {
      message += `Mode: Online\nLink GMeet: ${userValues.gmeetLink}\nNomor WhatsApp: ${userValues.noWhatsapp}`;
    } else if (selectedOption[userId] === "offline") {
      message += `Mode: Offline\nJam: ${userValues.jam}\nTanggal: ${userValues.tanggal} ${userValues.bulan} ${userValues.tahun}\nRuangan: ${userValues.ruangan}\nKampus: ${userValues.kampus}\nNomor WhatsApp: ${userValues.noWhatsapp}`;
    }

    const whatsappUrl = `https://wa.me/${userValues.noWhatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchAllUsersSemproData();
  }, []);

  return (
    <div>
      <NavbarPenguji />
      <h2 className={styles.subTitle}>Daftar Semua Data usersSkripsi</h2>
      <ul className={styles.list}>
        {usersSemproList.map((user) => (
          <li key={user.id} className={styles.listItem}>
            <p><strong>Nama:</strong> {user.nama}</p>
            <p><strong>Jurusan:</strong> {user.jurusan}</p>
            <p><strong>Angkatan:</strong> {user.angkatan}</p>
            <p><strong>Cabang Kampus:</strong> {user.cabangKampus}</p>
            <p><strong>Nomor WhatsApp:</strong> {user.noWhatsapp}</p>
            <p><strong>Status:</strong> {user.status || "Belum diverifikasi"}</p>
            {user.penguji && <p><strong>Dosen Penguji:</strong> {user.penguji}</p>}
            <p>File Pengajuan: <a href={user.pengajuanSidangUrl} target="_blank" rel="noopener noreferrer">Download</a></p>
            <p>File KRS: <a href={user.krsUrl} target="_blank" rel="noopener noreferrer">Download</a></p>
            <p>File Daftar Nilai: <a href={user.daftarNilaiUrl} target="_blank" rel="noopener noreferrer">Download</a></p>
            <p>File TA1: <a href={user.fileTA1Url} target="_blank" rel="noopener noreferrer">Download</a></p>

            {user.status === "Data Dikirim Ke Penguji" && (
              <div>
                <label>Mode Sidang:</label>
                <select
                  value={selectedOption[user.id] || ""}
                  onChange={(e) => handleOptionChange(user.id, e.target.value)}
                >
                  <option value="">Pilih Mode</option>
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                </select>

                {selectedOption[user.id] === "online" && (
                  <div>
                    <input
                      type="text"
                      placeholder="Masukkan Link GMeet"
                      onChange={(e) => handleInputChange(user.id, "gmeetLink", e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Masukkan Nomor WhatsApp"
                      onChange={(e) => handleInputChange(user.id, "noWhatsapp", e.target.value)}
                    />
                  </div>
                )}

                {selectedOption[user.id] === "offline" && (
                  <div>
                    <input
                      type="text"
                      placeholder="Masukkan Jam"
                      onChange={(e) => handleInputChange(user.id, "jam", e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Masukkan Tanggal"
                      onChange={(e) => handleInputChange(user.id, "tanggal", e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Masukkan Bulan"
                      onChange={(e) => handleInputChange(user.id, "bulan", e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Masukkan Tahun"
                      onChange={(e) => handleInputChange(user.id, "tahun", e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Ruangan"
                      onChange={(e) => handleInputChange(user.id, "ruangan", e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Kampus"
                      onChange={(e) => handleInputChange(user.id, "kampus", e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Masukkan Nomor WhatsApp"
                      onChange={(e) => handleInputChange(user.id, "noWhatsapp", e.target.value)}
                    />
                  </div>
                )}

                <button onClick={() => handleSubmit(user.id)}>Simpan Jadwal</button>
                <button onClick={() => handleSendWhatsApp(user.id)}>Kirim Info ke WhatsApp</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

