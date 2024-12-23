// "use client";
// import { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth, db } from "../../firebase";
// import { doc, getDoc } from "firebase/firestore";
// import { useRouter } from "next/navigation";
// import styles from "./login.module.css"; // Import CSS untuk styling

// export default function Login() {
//   const [nim, setNim] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const router = useRouter();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError(null); // Reset error sebelum proses login
//     try {
//       const docRef = doc(db, "users", nim);
//       const docSnap = await getDoc(docRef);

//       if (docSnap.exists()) {
//         const email = docSnap.data().email;
//         await signInWithEmailAndPassword(auth, email, password);
//         router.push("/dashboard");
//       } else {
//         setError("NIM tidak ditemukan");
//       }
//     } catch (error) {
//       setError("Login gagal: " + error.message);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Login</h1>
//       <form onSubmit={handleLogin} className={styles.form}>
//         <input
//           type="text"
//           value={nim}
//           onChange={(e) => setNim(e.target.value)}
//           placeholder="Masukkan NIM"
//           className={styles.inputField}
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Masukkan Password"
//           className={styles.inputField}
//         />
//         {error && <p className={styles.error}>{error}</p>}
//         <button type="submit" className={styles.button}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }



//tgl 18 oktober 2024
// "use client";
// import { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth, db } from "../../firebase";
// import { doc, getDoc } from "firebase/firestore";
// import { useRouter } from "next/navigation";
// import styles from "./login.module.css"; // Import CSS untuk styling

// export default function Login() {
//   const [nim, setNim] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const router = useRouter();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError(null); // Reset error sebelum proses login

//     try {
//       const docRef = doc(db, "users", nim);
//       const docSnap = await getDoc(docRef);

//       if (docSnap.exists()) {
//         const userData = docSnap.data();
//         const email = userData.email;

//         // Lakukan proses login dengan Firebase Authentication
//         await signInWithEmailAndPassword(auth, email, password);

//         // Cek role pengguna dan arahkan ke halaman yang sesuai
//         if (userData.role === "mahasiswa") {
//           router.push("/dashboard");
//         } else if (userData.role === "dosen") {
//           router.push("/dashboard-dosen");
//         } else {
//           setError("Role pengguna tidak dikenali.");
//         }
//       } else {
//         setError("NIM tidak ditemukan.");
//       }
//     } catch (error) {
//       setError("Login gagal: " + error.message);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Login</h1>
//       <form onSubmit={handleLogin} className={styles.form}>
//         <input
//           type="text"
//           value={nim}
//           onChange={(e) => setNim(e.target.value)}
//           placeholder="Masukkan NIM"
//           className={styles.inputField}
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Masukkan Password"
//           className={styles.inputField}
//         />
//         {error && <p className={styles.error}>{error}</p>}
//         <button type="submit" className={styles.button}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }


//tgl 19 november 2024
// "use client";
// import { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth, db } from "../../firebase";
// import { doc, getDoc } from "firebase/firestore";
// import { useRouter } from "next/navigation";
// import styles from "./login.module.css"; // Import CSS untuk styling

// export default function Login() {
//   const [nim, setNim] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const router = useRouter();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError(null); // Reset error sebelum proses login

//     try {
//       const docRef = doc(db, "users", nim);
//       const docSnap = await getDoc(docRef);

//       if (docSnap.exists()) {
//         const userData = docSnap.data();
//         const email = userData.email;

//         // Lakukan proses login dengan Firebase Authentication
//         await signInWithEmailAndPassword(auth, email, password);

//         // Cek role pengguna dan arahkan ke halaman yang sesuai
//         switch (userData.role) {
//           case "mahasiswa":
//             router.push("/dashboard");
//             break;
//           case "dosen":
//             router.push("/dashboard-dosen");
//             break;
//           case "kaprodi":
//             router.push("/dashboard-kaprodi");
//             break;
//           case "penguji":
//             router.push("/dashboard-penguji");
//             break;
//           default:
//             setError("Role pengguna tidak dikenali.");
//             break;
//         }
//       } else {
//         setError("NIM tidak ditemukan.");
//       }
//     } catch (error) {
//       setError("Login gagal: " + error.message);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Login</h1>
//       <form onSubmit={handleLogin} className={styles.form}>
//         <input
//           type="text"
//           value={nim}
//           onChange={(e) => setNim(e.target.value)}
//           placeholder="Masukkan NIM"
//           className={styles.inputField}
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Masukkan Password"
//           className={styles.inputField}
//         />
//         {error && <p className={styles.error}>{error}</p>}
//         <button type="submit" className={styles.button}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

//tgl 19 november 2024
// "use client";
// import { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth, db } from "../../firebase";
// import { doc, getDoc } from "firebase/firestore";
// import { useRouter } from "next/navigation";
// import styles from "./login.module.css"; // Import CSS untuk styling

// export default function Login() {
//   const [nim, setNim] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const router = useRouter();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError(null); // Reset error sebelum proses login

//     try {
//       const docRef = doc(db, "users", nim);  // Referensi document dari Firestore
//       const docSnap = await getDoc(docRef);  // Ambil data user berdasarkan NIM

//       if (docSnap.exists()) {
//         const userData = docSnap.data();  // Ambil data user
//         const email = userData.email;     // Ambil email dari data user

//         // Lakukan proses login dengan Firebase Authentication
//         await signInWithEmailAndPassword(auth, email, password);

//         // Cek role pengguna dan arahkan ke halaman yang sesuai
//         switch (userData.role) {
//           case "mahasiswa":
//             router.push("/dashboard");
//             break;
//           case "dosen":
//             router.push("/dashboard-dosen");
//             break;
//           case "kaprodi":
//             router.push("/dashboard-kaprodi");
//             break;
//           case "penguji":
//             router.push("/dashboard-penguji");
//             break;
//           default:
//             setError("Role pengguna tidak dikenali.");
//             break;
//         }
//       } else {
//         setError("NIM tidak ditemukan.");
//       }
//     } catch (error) {
//       setError("Login gagal: " + error.message);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Login</h1>
//       <form onSubmit={handleLogin} className={styles.form}>
//         <input
//           type="text"
//           value={nim}
//           onChange={(e) => setNim(e.target.value)}
//           placeholder="Masukkan NIM"
//           className={styles.inputField}
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Masukkan Password"
//           className={styles.inputField}
//         />
//         {error && <p className={styles.error}>{error}</p>}
//         <button type="submit" className={styles.button}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }


//tgl 23 november 2024
// "use client";
// import { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth, db } from "../../firebase";
// import { doc, getDoc } from "firebase/firestore";
// import { useRouter } from "next/navigation";
// import styles from "./login.module.css"; // Import CSS untuk styling

// export default function Login() {
//   // State untuk form Dashboard 1
//   const [nimDashboard1, setNimDashboard1] = useState("");
//   const [passwordDashboard1, setPasswordDashboard1] = useState("");

//   // State untuk form Dashboard 2
//   const [nimDashboard2, setNimDashboard2] = useState("");
//   const [passwordDashboard2, setPasswordDashboard2] = useState("");

//   // State untuk menangani error
//   const [error, setError] = useState(null);
//   const router = useRouter();

//   const handleLogin = async (e, targetDashboard, nim, password) => {
//     e.preventDefault();
//     setError(null); // Reset error sebelum proses login

//     try {
//       const docRef = doc(db, "users", nim); // Referensi document dari Firestore
//       const docSnap = await getDoc(docRef); // Ambil data user berdasarkan NIM

//       if (docSnap.exists()) {
//         const userData = docSnap.data(); // Ambil data user
//         const email = userData.email; // Ambil email dari data user

//         // Lakukan proses login dengan Firebase Authentication
//         await signInWithEmailAndPassword(auth, email, password);

//         // Arahkan ke dashboard yang sesuai
//         router.push(targetDashboard);
//       } else {
//         setError("NIM tidak ditemukan.");
//       }
//     } catch (error) {
//       setError("Login gagal: " + error.message);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Login</h1>

//       {/* Form untuk Dashboard 1 */}
//       <form
//         onSubmit={(e) =>
//           handleLogin(e, "/dashboard", nimDashboard1, passwordDashboard1)
//         }
//         className={styles.form}
//       >
//         <h2 className={styles.subtitle}>Login untuk Dashboard 1</h2>
//         <input
//           type="text"
//           value={nimDashboard1}
//           onChange={(e) => setNimDashboard1(e.target.value)}
//           placeholder="Masukkan NIM"
//           className={styles.inputField}
//         />
//         <input
//           type="password"
//           value={passwordDashboard1}
//           onChange={(e) => setPasswordDashboard1(e.target.value)}
//           placeholder="Masukkan Password"
//           className={styles.inputField}
//         />
//         {error && <p className={styles.error}>{error}</p>}
//         <button type="submit" className={styles.button}>
//           Login ke Sempro
//         </button>
//       </form>

//       {/* Form untuk Dashboard 2 */}
//       <form
//         onSubmit={(e) =>
//           handleLogin(e, "/dashboardkedua", nimDashboard2, passwordDashboard2)
//         }
//         className={styles.form}
//       >
//         <h2 className={styles.subtitle}>Login untuk Dashboard 2</h2>
//         <input
//           type="text"
//           value={nimDashboard2}
//           onChange={(e) => setNimDashboard2(e.target.value)}
//           placeholder="Masukkan NIM"
//           className={styles.inputField}
//         />
//         <input
//           type="password"
//           value={passwordDashboard2}
//           onChange={(e) => setPasswordDashboard2(e.target.value)}
//           placeholder="Masukkan Password"
//           className={styles.inputField}
//         />
//         {error && <p className={styles.error}>{error}</p>}
//         <button type="submit" className={styles.button}>
//           Login ke Skripsi
//         </button>
//       </form>
//     </div>
//   );
// }

//tgl 28 november 2024
// "use client";
// import { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth, db } from "../../firebase";
// import { doc, getDoc } from "firebase/firestore";
// import { useRouter } from "next/navigation";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
// import styles from "./login.module.css"; // Import CSS untuk styling

// export default function Login() {
//   const [nimDashboard1, setNimDashboard1] = useState("");
//   const [passwordDashboard1, setPasswordDashboard1] = useState("");
//   const [nimDashboard2, setNimDashboard2] = useState("");
//   const [passwordDashboard2, setPasswordDashboard2] = useState("");
//   const [error, setError] = useState(null);
//   const [activeDashboard, setActiveDashboard] = useState("dashboard1");
//   const router = useRouter();

//   const handleLogin = async (e, targetDashboard, nim, password, collection) => {
//     e.preventDefault();
//     setError(null);

//     try {
//       const docRef = doc(db, collection, nim); // Referensi dokumen dari Firestore
//       const docSnap = await getDoc(docRef);

//       if (docSnap.exists()) {
//         const userData = docSnap.data();
//         const email = userData.email; // Ambil email dari data user

//         // Login ke Firebase Authentication
//         await signInWithEmailAndPassword(auth, email, password);

//         // Redirect ke dashboard yang sesuai
//         router.push(targetDashboard);
//       } else {
//         setError("NIM tidak ditemukan.");
//       }
//     } catch (error) {
//       setError("Login gagal: " + error.message);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Login</h1>

//       {activeDashboard === "dashboard1" && (
//         <form
//           onSubmit={(e) =>
//             handleLogin(e, "/dashboard", nimDashboard1, passwordDashboard1, "usersSempro")
//           }
//           className={styles.form}
//         >
//           <h2 className={styles.subtitle}>Login ke Dashboard Sempro</h2>
//           <input
//             type="text"
//             value={nimDashboard1}
//             onChange={(e) => setNimDashboard1(e.target.value)}
//             placeholder="Masukkan NIM"
//             className={styles.inputField}
//           />
//           <input
//             type="password"
//             value={passwordDashboard1}
//             onChange={(e) => setPasswordDashboard1(e.target.value)}
//             placeholder="Masukkan Password"
//             className={styles.inputField}
//           />
//           {error && <p className={styles.error}>{error}</p>}
//           <button type="submit" className={styles.button}>
//             Login ke Sempro
//           </button>
//         </form>
//       )}

//       {activeDashboard === "dashboard2" && (
//         <form
//           onSubmit={(e) =>
//             handleLogin(e, "/dashboardkedua", nimDashboard2, passwordDashboard2, "usersSkripsi")
//           }
//           className={styles.form}
//         >
//           <h2 className={styles.subtitle}>Login ke Dashboard Skripsi</h2>
//           <input
//             type="text"
//             value={nimDashboard2}
//             onChange={(e) => setNimDashboard2(e.target.value)}
//             placeholder="Masukkan NIM"
//             className={styles.inputField}
//           />
//           <input
//             type="password"
//             value={passwordDashboard2}
//             onChange={(e) => setPasswordDashboard2(e.target.value)}
//             placeholder="Masukkan Password"
//             className={styles.inputField}
//           />
//           {error && <p className={styles.error}>{error}</p>}
//           <button type="submit" className={styles.button}>
//             Login ke Skripsi
//           </button>
//         </form>
//       )}

//       <div className={styles.navigationButtons}>
//         {activeDashboard === "dashboard2" && (
//           <FaArrowLeft
//             className={styles.icon}
//             onClick={() => setActiveDashboard("dashboard1")}
//           />
//         )}
//         {activeDashboard === "dashboard1" && (
//           <FaArrowRight
//             className={styles.icon}
//             onClick={() => setActiveDashboard("dashboard2")}
//           />
//         )}
//       </div>
//     </div>
//   );
// }


// "use client";
// import { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth, db } from "../../firebase";
// import { doc, getDoc } from "firebase/firestore";
// import { useRouter } from "next/navigation";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
// import styles from "./login.module.css";

// export default function Login() {
//   const [nimDashboard1, setNimDashboard1] = useState("");
//   const [passwordDashboard1, setPasswordDashboard1] = useState("");
//   const [nimDashboard2, setNimDashboard2] = useState("");
//   const [passwordDashboard2, setPasswordDashboard2] = useState("");
//   const [error, setError] = useState(null);
//   const [activeDashboard, setActiveDashboard] = useState("dashboard1");
//   const router = useRouter();

//   const handleLogin = async (e, targetDashboard, nim, password, collection) => {
//     e.preventDefault();
//     setError(null);

//     try {
//       // Trimming dan validasi awal
//       if (!nim.trim() || !password) {
//         setError("NIM dan password tidak boleh kosong.");
//         return;
//       }

//       const docRef = doc(db, collection, nim.trim());
//       const docSnap = await getDoc(docRef);

//       if (docSnap.exists()) {
//         const userData = docSnap.data();
//         const email = userData.email;

//         if (!email) {
//           setError("Email tidak ditemukan untuk NIM ini.");
//           return;
//         }

//         // Proses login
//         await signInWithEmailAndPassword(auth, email, password);

//         // Redirect ke dashboard
//         router.push(targetDashboard);
//       } else {
//         setError("NIM tidak ditemukan. Pastikan Anda sudah mendaftar.");
//       }
//     } catch (error) {
//       setError("Login gagal: " + error.message);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Login</h1>

//       {activeDashboard === "dashboard1" && (
//         <form
//           onSubmit={(e) =>
//             handleLogin(e, "/dashboard", nimDashboard1, passwordDashboard1, "usersSempro")
//           }
//           className={styles.form}
//         >
//           <h2 className={styles.subtitle}>Login ke Dashboard Sempro</h2>
//           <input
//             type="text"
//             value={nimDashboard1}
//             onChange={(e) => setNimDashboard1(e.target.value)}
//             placeholder="Masukkan NIM"
//             className={styles.inputField}
//           />
//           <input
//             type="password"
//             value={passwordDashboard1}
//             onChange={(e) => setPasswordDashboard1(e.target.value)}
//             placeholder="Masukkan Password"
//             className={styles.inputField}
//           />
//           {error && <p className={styles.error}>{error}</p>}
//           <button type="submit" className={styles.button}>
//             Login ke Sempro
//           </button>
//         </form>
//       )}

//       {activeDashboard === "dashboard2" && (
//         <form
//           onSubmit={(e) =>
//             handleLogin(e, "/dashboardkedua", nimDashboard2, passwordDashboard2, "usersSkripsi")
//           }
//           className={styles.form}
//         >
//           <h2 className={styles.subtitle}>Login ke Dashboard Skripsi</h2>
//           <input
//             type="text"
//             value={nimDashboard2}
//             onChange={(e) => setNimDashboard2(e.target.value)}
//             placeholder="Masukkan NIM"
//             className={styles.inputField}
//           />
//           <input
//             type="password"
//             value={passwordDashboard2}
//             onChange={(e) => setPasswordDashboard2(e.target.value)}
//             placeholder="Masukkan Password"
//             className={styles.inputField}
//           />
//           {error && <p className={styles.error}>{error}</p>}
//           <button type="submit" className={styles.button}>
//             Login ke Skripsi
//           </button>
//         </form>
//       )}

//       <div className={styles.navigationButtons}>
//         {activeDashboard === "dashboard2" && (
//           <FaArrowLeft
//             className={styles.icon}
//             onClick={() => setActiveDashboard("dashboard1")}
//           />
//         )}
//         {activeDashboard === "dashboard1" && (
//           <FaArrowRight
//             className={styles.icon}
//             onClick={() => setActiveDashboard("dashboard2")}
//           />
//         )}
//       </div>
//     </div>
//   );
// }



"use client";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";

export default function Login() {
  const [nim, setNim] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      // Periksa di koleksi `usersSempro`
      const semproRef = doc(db, "usersSempro", nim.trim());
      const semproSnap = await getDoc(semproRef);

      // Jika ditemukan di `usersSempro`
      if (semproSnap.exists()) {
        const userSemproData = semproSnap.data();

        // Proses login di Firebase Authentication
        await signInWithEmailAndPassword(auth, userSemproData.email, password);
        alert("Login berhasil sebagai Mahasiswa Sempro!");
        router.push("/dashboard");
        return;
      }

      // Periksa di koleksi `usersSkripsi`
      const skripsiRef = doc(db, "usersSkripsi", nim.trim());
      const skripsiSnap = await getDoc(skripsiRef);

      // Jika ditemukan di `usersSkripsi`
      if (skripsiSnap.exists()) {
        const userSkripsiData = skripsiSnap.data();

        // Proses login di Firebase Authentication
        await signInWithEmailAndPassword(auth, userSkripsiData.email, password);
        alert("Login berhasil sebagai Mahasiswa Skripsi!");
        router.push("/dashboardkedua");
        return;
      }

      // Periksa di koleksi `dosen`
      const dosenRef = doc(db, "dosen", nim.trim());
      const dosenSnap = await getDoc(dosenRef);
      
      // Jika ditemukan di `dosen`
      if (dosenSnap.exists()) {
        const dosenData = dosenSnap.data();
      
        // Proses login di Firebase Authentication
        await signInWithEmailAndPassword(auth, dosenData.email, password);
        alert("Login berhasil sebagai Dosen!");
        router.push("/dashboard-dosen");
        return;
      }

      // Periksa di koleksi `kaprodi`
      const kaprodiRef = doc(db, "kaprodi", nim.trim());
      const kaprodiSnap = await getDoc(kaprodiRef);
      
      // Jika ditemukan di `kaprodi`
      if (kaprodiSnap.exists()) {
        const kaprodiData = kaprodiSnap.data();
      
        // Proses login di Firebase Authentication
        await signInWithEmailAndPassword(auth, kaprodiData.email, password);
        alert("Login berhasil sebagai Kaprodi!");
        router.push("/dashboard-kaprodi");
        return;
      }

      // Periksa di koleksi `penguji`
      const pengujiRef = doc(db, "penguji", nim.trim());
      const pengujiSnap = await getDoc(pengujiRef);
      
      // Jika ditemukan di `penguji`
      if (pengujiSnap.exists()) {
        const pengujiData = pengujiSnap.data();
      
        // Proses login di Firebase Authentication
        await signInWithEmailAndPassword(auth, pengujiData.email, password);
        alert("Login berhasil sebagai Penguji!");
        router.push("/dashboard-penguji");
        return;
      }
      // Jika tidak ditemukan di kedua koleksi
      setError("NIM tidak ditemukan di database.");
    } catch (err) {
      setError("Login gagal: " + err.message);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login Mahasiswa</h1>
      <form onSubmit={handleLogin} className={styles.formContainer}>
        <input
          type="text"
          className={styles.inputField}
          value={nim}
          onChange={(e) => setNim(e.target.value)}
          placeholder="Masukkan NIM"
          required
        />
        <input
          type="password"
          className={styles.inputField}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Masukkan Password"
          required
        />
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}
