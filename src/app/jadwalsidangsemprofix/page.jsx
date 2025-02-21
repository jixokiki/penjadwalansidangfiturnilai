// "use client";
// import { useState, useEffect } from 'react';
// import { db } from '../../firebase';
// import { collection, getDocs, addDoc, doc, getDoc } from 'firebase/firestore';
// import styles from './jadwalsidangsemprofix.module.css';
// import NavbarPenguji from '../navbarpenguji/page';

// export default function JadwalSidangSemproFix() {
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



"use client";
import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, addDoc, doc, getDoc } from 'firebase/firestore';
import styles from './jadwalsidangsemprofix.module.css';
import NavbarPenguji from '../navbarpenguji/page';

export default function JadwalSidangSemproFix() {
  const [usersSemproList, setUsersSemproList] = useState([]);
  const [selectedOption, setSelectedOption] = useState({});
  const [formValues, setFormValues] = useState({});

  // Fetch all data from usersSempro collection
  const fetchAllUsersSemproData = async () => {
    try {
      const usersSemproCollection = collection(db, "usersSempro");
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
      const userDocRef = doc(db, "usersSempro", userId);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const userSemproData = userDocSnap.data();
        const scheduleData = {
          ...formValues[userId],
          userId,
          mode: selectedOption[userId],
          jadwalFixSempro: formValues[userId]?.jadwalFixSempro, // Store the combined date in jadwalFixSempro
          ...userSemproData // Include all data from userSempro in jadwalSempro
        };

        await addDoc(collection(db, "jadwalSempro"), scheduleData);
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
    let message = `Halo, berikut adalah informasi untuk sidang sempro Anda:\n\n`;

    if (selectedOption[userId] === "online") {
      message += `Mode: Online\nLink GMeet: ${userValues.gmeetLink}\nNomor WhatsApp: ${userValues.noWhatsapp}`;
    } else if (selectedOption[userId] === "offline") {
      message += `Mode: Offline\nJam: ${userValues.jam}\nTanggal: ${userValues.jadwalFixSempro}\nRuangan: ${userValues.ruangan}\nKampus: ${userValues.kampus}\nNomor WhatsApp: ${userValues.noWhatsapp}`;
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
                    <label>Masukkan Tanggal Sidang:</label>
                    <input
                      type="date"
                      onChange={(e) => handleInputChange(user.id, "jadwalFixSempro", e.target.value)}
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
