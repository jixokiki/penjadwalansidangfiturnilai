// "use client";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { doc, getDoc, setDoc } from "firebase/firestore";
// import { db } from "../../firebase"; // Firestore Database
// import styles from "./adminLogin.module.css"; // Import CSS untuk styling

// export default function AdminLogin() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   useEffect(() => {
//     // Fungsi untuk mengecek dan membuat admin user jika tidak ada
//     const checkAndCreateAdmin = async () => {
//       const adminRef = doc(db, "users", "admin_user");
//       const adminSnap = await getDoc(adminRef);

//       if (!adminSnap.exists()) {
//         // Jika dokumen admin tidak ditemukan, buat dokumen baru
//         await setDoc(adminRef, {
//           username: "admin",
//           password: "adminnimda",
//           role: "admin",
//         });
//         console.log("Akun admin otomatis dibuat di Firestore.");
//       } else {
//         console.log("Akun admin sudah ada.");
//       }
//     };

//     checkAndCreateAdmin(); // Jalankan fungsi saat komponen dimount
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const adminRef = doc(db, "users", "admin_user");
//       const adminSnap = await getDoc(adminRef);

//       if (adminSnap.exists()) {
//         const adminData = adminSnap.data();

//         // Validasi username dan password
//         if (username === adminData.username && password === adminData.password) {
//           alert("Login berhasil!");
//           router.push("/adminPin"); // Arahkan ke halaman PIN setelah login
//         } else {
//           alert("Username atau password salah");
//         }
//       } else {
//         alert("Akun admin tidak ditemukan.");
//       }
//     } catch (error) {
//       alert("Terjadi kesalahan, coba lagi.");
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1>Login Admin</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className={styles.inputField} // Tambahkan kelas
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className={styles.inputField} // Tambahkan kelas
//         />
//         <button type="submit" className={styles.submitButton}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }




"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase"; // Firestore Database
import styles from "./adminLogin.module.css"; // Import CSS untuk styling

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    const checkAndCreateAdmin = async () => {
      if (typeof window !== "undefined") {
        try {
          const adminRef = doc(db, "users", "admin_user");
          const adminSnap = await getDoc(adminRef);

          if (!adminSnap.exists()) {
            await setDoc(adminRef, {
              username: "admin",
              password: "adminnimda",
              role: "admin",
            });
            console.log("Akun admin otomatis dibuat di Firestore.");
          } else {
            console.log("Akun admin sudah ada:", adminSnap.data());
          }
        } catch (error) {
          console.error("Error during admin account creation:", error);
        }
      }
    };

    checkAndCreateAdmin();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const adminRef = doc(db, "users", "admin_user");
      const adminSnap = await getDoc(adminRef);

      if (adminSnap.exists()) {
        const adminData = adminSnap.data();

        if (username === adminData.username && password === adminData.password) {
          sessionStorage.setItem('adminUser', JSON.stringify(adminData));
          router.push("/adminPin");
        } else {
          alert("Username atau password salah");
        }
      } else {
        alert("Akun admin tidak ditemukan.");
      }
    } catch (error) {
      alert("Terjadi kesalahan, coba lagi.");
    }
  };

  return (
    <div className={styles.container}>
      <h1>Login Admin</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.inputField}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.inputField}
        />
        <button type="submit" className={styles.submitButton}>
          Login
        </button>
      </form>
    </div>
  );
}



