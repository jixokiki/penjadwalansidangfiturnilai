// "use client"
// import { useState } from "react";
// import { auth, db } from "../../firebase";
// import { doc, getDoc, collection, addDoc } from "firebase/firestore";
// import { useRouter } from "next/navigation";

// export default function Dashboard() {
//   const [jadwal, setJadwal] = useState("");
//   const [dosenNim, setDosenNim] = useState("");
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const user = auth.currentUser;
//       const docRef = doc(db, "users", user.uid);
//       const docSnap = await getDoc(docRef);

//       if (docSnap.exists()) {
//         const mahasiswa = docSnap.data();
//         await addDoc(collection(db, "penjadwalan"), {
//           mahasiswaNim: mahasiswa.nim,
//           dosenNim,
//           jadwal,
//         });
//         alert("Jadwal berhasil ditambahkan");
//       }
//     } catch (error) {
//       alert("Gagal mengajukan jadwal: " + error.message);
//     }
//   };

//   return (
//     <div>
//       <h1>Dashboard Mahasiswa</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={jadwal}
//           onChange={(e) => setJadwal(e.target.value)}
//           placeholder="Masukkan Jadwal Sidang"
//         />
//         <input
//           type="text"
//           value={dosenNim}
//           onChange={(e) => setDosenNim(e.target.value)}
//           placeholder="Masukkan NIM Dosen Pembimbing"
//         />
//         <button type="submit">Ajukan Jadwal</button>
//       </form>
//     </div>
//   );
// }


//tgl 13 oktober 2024
// "use client";
// import { useState } from "react";
// import { auth, db } from "../../firebase";
// import { doc, getDoc, collection, addDoc } from "firebase/firestore";
// import { useRouter } from "next/navigation";
// import styles from "./dashboard.module.css"; // Import CSS untuk styling

// export default function Dashboard() {
//   const [jadwal, setJadwal] = useState("");
//   const [dosenNim, setDosenNim] = useState("");
//   const [message, setMessage] = useState(null); // For success or error message
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage(null); // Reset message
//     try {
//       const user = auth.currentUser;
//       const docRef = doc(db, "users", user.uid);
//       const docSnap = await getDoc(docRef);

//       if (docSnap.exists()) {
//         const mahasiswa = docSnap.data();
//         await addDoc(collection(db, "penjadwalan"), {
//           mahasiswaNim: mahasiswa.nim,
//           dosenNim,
//           jadwal,
//         });
//         setMessage({ type: "success", text: "Jadwal berhasil ditambahkan" });
//       }
//     } catch (error) {
//       setMessage({ type: "error", text: "Gagal mengajukan jadwal: " + error.message });
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Dashboard Mahasiswa</h1>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <input
//           type="text"
//           value={jadwal}
//           onChange={(e) => setJadwal(e.target.value)}
//           placeholder="Masukkan Jadwal Sidang"
//           className={styles.inputField}
//         />
//         <input
//           type="text"
//           value={dosenNim}
//           onChange={(e) => setDosenNim(e.target.value)}
//           placeholder="Masukkan NIM Dosen Pembimbing"
//           className={styles.inputField}
//         />
//         <button type="submit" className={styles.button}>
//           Ajukan Jadwal
//         </button>
//       </form>

//       {/* Display success or error message */}
//       {message && (
//         <p className={message.type === "success" ? styles.success : styles.error}>
//           {message.text}
//         </p>
//       )}
//     </div>
//   );
// }


// "use client";
// import { useState, useEffect } from "react";
// import { auth, db } from "../../firebase"; // Assuming you have initialized Firebase
// import { onAuthStateChanged } from "firebase/auth"; // Import the method to check auth state

// // import styles from "./dashboard.module.css"; // Import CSS untuk styling
// import Navbar from "../navbar/Navbar";
// import Link from 'next/link';
// import styles from '../page.module.css';

// export default function Dashboard() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Check authentication state
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setIsLoggedIn(true); // User is signed in
//       } else {
//         setIsLoggedIn(false); // No user is signed in
//       }
//     });

//     return () => unsubscribe(); // Cleanup subscription on unmount
//   }, []);

//   return (
//     <>
//       <Navbar isLoggedIn={isLoggedIn} />
//       <div className={styles.container}>
//       <div className={styles.header}>
//         <h1>Selamat Datang di Penjadwalan Sidang Mahasiswa</h1>
//         <p>Atur jadwal sidang Anda dengan mudah, di mana saja.</p>
//       </div>

//       <div className={styles.buttons}>
//         <Link href="/dashboardsempro">
//           <button className={styles.btn}>Seminar Proposal</button>
//         </Link>
//         <Link href="/dashboardskripsi">
//           <button className={styles.btnAdmin}>Skripsi</button>
//         </Link>
//         {/* <Link href="/adminLogin">
//           <button className={styles.btnAdmin}>Admin Registrasi</button>
//         </Link> */}
//       </div>
//     </div>
//     </>
//   );
// }



"use client";
import { useState, useEffect } from "react";
import { auth } from "../../firebase"; // Assuming you have initialized Firebase
import { onAuthStateChanged, signOut } from "firebase/auth"; // Import Firebase signOut
import { useRouter } from "next/navigation"; // Import router for redirecting
import Navbar from "../navbar/Navbar";
import Link from 'next/link';
import styles from '../page.module.css';

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  // Check authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true); // User is signed in
      } else {
        setIsLoggedIn(false); // No user is signed in
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  // Function to handle logout and redirect
  const handleSkripsiButtonClick = async () => {
    try {
      await signOut(auth); // Sign out the user
      router.push("/dashboardskripsi"); // Redirect to dashboardskripsi
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Selamat Datang di Penjadwalan Sidang Mahasiswa</h1>
          <p>Atur jadwal sidang Anda dengan mudah, di mana saja.</p>
        </div>

        <div className={styles.buttons}>
          <Link href="/dashboardsempro">
            <button className={styles.btn}>Seminar Proposal</button>
          </Link>
          {/* When clicked, sign out and redirect to /dashboardskripsi */}
          <button onClick={handleSkripsiButtonClick} className={styles.btnAdmin}>
            Skripsi
          </button>
        </div>
      </div>
    </>
  );
}


