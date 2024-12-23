// "use client";
// import { useState, useEffect } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth, db } from "../../firebase";
// import { doc, getDoc, setDoc } from "firebase/firestore";
// import { useRouter } from "next/navigation";
// import styles from "./register.module.css"; // Import CSS untuk styling

// export default function Register() {
//   const [nim, setNim] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [nama, setNama] = useState("");
//   const [jurusan, setJurusan] = useState("");
//   const [angkatan, setAngkatan] = useState("");
//   const [cabangKampus, setCabangKampus] = useState("");
//   const [role, setRole] = useState("");
//   const [error, setError] = useState(null);
//   const router = useRouter();

//   // Fungsi untuk mengambil data berdasarkan NIM dari Firestore
//   const fetchUserDataByNim = async (nim) => {
//     if (nim) {
//       try {
//         const docRef = doc(db, "users", nim);
//         const docSnap = await getDoc(docRef);
//         if (docSnap.exists()) {
//           const userData = docSnap.data();
//           setNama(userData.nama || ""); // Isi nama
//           setJurusan(userData.jurusan || ""); // Isi jurusan
//           setAngkatan(userData.angkatan || ""); // Isi angkatan
//           setCabangKampus(userData.cabangKampus || ""); // Isi cabang kampus
//           setRole(userData.role || "");
//         } else {
//           // Reset jika NIM tidak ditemukan
//           setNama("");
//           setJurusan("");
//           setAngkatan("");
//           setCabangKampus("");
//           setRole("");
//         }
//       } catch (error) {
//         console.error("Error fetching NIM data: ", error);
//         setError("Error fetching NIM data");
//       }
//     }
//   };

//   // Panggil fetchUserDataByNim setiap kali nim berubah
//   useEffect(() => {
//     fetchUserDataByNim(nim);
//   }, [nim]);

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setError(null); // Reset error sebelum proses
//     try {
//       // Membuat akun pengguna baru di Firebase Authentication
//       await createUserWithEmailAndPassword(auth, email, password);
//       // Menyimpan data tambahan ke Firestore
//       await setDoc(doc(db, "users", nim), {
//         email,
//         nama,
//         jurusan,
//         angkatan,
//         cabangKampus,
//         role,
//       });
//       router.push("/login");
//     } catch (error) {
//       console.error("Registrasi gagal: ", error.message);
//       setError("Registrasi gagal: " + error.message);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Registrasi</h1>
//       <form onSubmit={handleRegister} className={styles.formContainer}>
//         <input
//           type="text"
//           className={styles.inputField}
//           value={nim}
//           onChange={(e) => setNim(e.target.value)}
//           placeholder="Masukkan NIM"
//         />
//         <input
//           type="text"
//           className={styles.inputField}
//           value={nama}
//           onChange={(e) => setNama(e.target.value)}
//           placeholder="Masukkan Nama"
//           readOnly // Set input menjadi hanya baca (auto-fill dari Firestore)
//         />
//         <input
//           type="text"
//           className={styles.inputField}
//           value={jurusan}
//           onChange={(e) => setJurusan(e.target.value)}
//           placeholder="Masukkan Jurusan"
//           readOnly // Set input menjadi hanya baca (auto-fill dari Firestore)
//         />
//         <input
//           type="text"
//           className={styles.inputField}
//           value={angkatan}
//           onChange={(e) => setAngkatan(e.target.value)}
//           placeholder="Masukkan Angkatan"
//           readOnly // Set input menjadi hanya baca (auto-fill dari Firestore)
//         />
//         <input
//           type="text"
//           className={styles.inputField}
//           value={cabangKampus}
//           onChange={(e) => setCabangKampus(e.target.value)}
//           placeholder="Masukkan Cabang Kampus"
//           readOnly // Set input menjadi hanya baca (auto-fill dari Firestore)
//         />
//         <input
//           type="text"
//           className={styles.inputField}
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//           placeholder="Masukkan Role"
//           readOnly // Set input menjadi hanya baca (auto-fill dari Firestore)
//         />
//         <input
//           type="email"
//           className={styles.inputField}
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Masukkan Email"
//         />
//         <input
//           type="password"
//           className={styles.inputField}
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Masukkan Password"
//         />
//         {error && <p className={styles.error}>{error}</p>}
//         <button type="submit" className={styles.button}>
//           Register
//         </button>
//       </form>
//     </div>
//   );
// }



//tgl 19 november 2024
// "use client";
// import { useState, useEffect } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth, db } from "../../firebase";
// import { doc, getDoc, setDoc } from "firebase/firestore";
// import { useRouter } from "next/navigation";
// import styles from "./register.module.css"; // Import CSS untuk styling

// export default function Register() {
//   const [nim, setNim] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [nama, setNama] = useState("");
//   const [jurusan, setJurusan] = useState("");
//   const [angkatan, setAngkatan] = useState("");
//   const [cabangKampus, setCabangKampus] = useState("");
//   const [role, setRole] = useState("");
//   const [error, setError] = useState(null);
//   const router = useRouter();

//   // Fungsi untuk mengambil data berdasarkan NIM dari Firestore
//   const fetchUserDataByNim = async (nim) => {
//     if (nim) {
//       try {
//         const docRef = doc(db, "users", nim);
//         const docSnap = await getDoc(docRef);
//         if (docSnap.exists()) {
//           const userData = docSnap.data();
//           setNama(userData.nama || ""); // Isi nama
//           setJurusan(userData.jurusan || ""); // Isi jurusan
//           setAngkatan(userData.angkatan || ""); // Isi angkatan
//           setCabangKampus(userData.cabangKampus || ""); // Isi cabang kampus
//           setRole(userData.role || "");
//         } else {
//           // Reset jika NIM tidak ditemukan
//           setNama("");
//           setJurusan("");
//           setAngkatan("");
//           setCabangKampus("");
//           setRole("");
//         }
//       } catch (error) {
//         console.error("Error fetching NIM data: ", error);
//         setError("Error fetching NIM data: " + error.message);
//       }
//     }
//   };

//   // Panggil fetchUserDataByNim setiap kali nim berubah
//   useEffect(() => {
//     fetchUserDataByNim(nim);
//   }, [nim]);

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setError(null); // Reset error sebelum proses
//     try {
//       // Check if all necessary fields are filled before registration
//       if (!email || !password || !role) {
//         throw new Error("Email, password, and role are required.");
//       }

//       // Membuat akun pengguna baru di Firebase Authentication
//       await createUserWithEmailAndPassword(auth, email, password);

//       // Menyimpan data tambahan ke Firestore
//       await setDoc(doc(db, "users", nim), {
//         email,
//         nama,
//         jurusan,
//         angkatan,
//         cabangKampus,
//         role,
//       });
//       alert("Registrasi berhasil!");
//       router.push("/login");
//     } catch (error) {
//       console.error("Registrasi gagal: ", error.message);
//       setError("Registrasi gagal: " + error.message);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Registrasi</h1>
//       <form onSubmit={handleRegister} className={styles.formContainer}>
//         <input
//           type="text"
//           className={styles.inputField}
//           value={nim}
//           onChange={(e) => setNim(e.target.value)}
//           placeholder="Masukkan NIM"
//         />
//         <input
//           type="text"
//           className={styles.inputField}
//           value={nama}
//           onChange={(e) => setNama(e.target.value)}
//           placeholder="Masukkan Nama"
//           readOnly // Set input menjadi hanya baca (auto-fill dari Firestore)
//         />
//         <input
//           type="text"
//           className={styles.inputField}
//           value={jurusan}
//           onChange={(e) => setJurusan(e.target.value)}
//           placeholder="Masukkan Jurusan"
//           readOnly // Set input menjadi hanya baca (auto-fill dari Firestore)
//         />
//         <input
//           type="text"
//           className={styles.inputField}
//           value={angkatan}
//           onChange={(e) => setAngkatan(e.target.value)}
//           placeholder="Masukkan Angkatan"
//           readOnly // Set input menjadi hanya baca (auto-fill dari Firestore)
//         />
//         <input
//           type="text"
//           className={styles.inputField}
//           value={cabangKampus}
//           onChange={(e) => setCabangKampus(e.target.value)}
//           placeholder="Masukkan Cabang Kampus"
//           readOnly // Set input menjadi hanya baca (auto-fill dari Firestore)
//         />
//         <input
//           type="text"
//           className={styles.inputField}
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//           placeholder="Masukkan Role"
//           readOnly // Set input menjadi hanya baca (auto-fill dari Firestore)
//         />
//         <input
//           type="email"
//           className={styles.inputField}
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Masukkan Email"
//           required // Make email required
//         />
//         <input
//           type="password"
//           className={styles.inputField}
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Masukkan Password"
//           required // Make password required
//         />
//         {error && <p className={styles.error}>{error}</p>}
//         <button type="submit" className={styles.button}>
//           Register
//         </button>
//       </form>
//     </div>
//   );
// }



// "use client";
// import { useState, useEffect } from "react";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updatePassword, fetchSignInMethodsForEmail } from "firebase/auth";
// import { auth, db } from "../../firebase";
// import { doc, getDoc, setDoc } from "firebase/firestore";
// import { useRouter } from "next/navigation";
// import styles from "./register.module.css"; // Import CSS untuk styling

// export default function Register() {
//   const [nim, setNim] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState(""); // For password confirmation
//   const [nama, setNama] = useState("");
//   const [jurusan, setJurusan] = useState("");
//   const [angkatan, setAngkatan] = useState("");
//   const [cabangKampus, setCabangKampus] = useState("");
//   const [role, setRole] = useState("");
//   const [error, setError] = useState(null);
//   const [message, setMessage] = useState(null); // For success messages
//   const [loading, setLoading] = useState(false); // For loading state
//   const [isReset, setIsReset] = useState(false); // To track if password reset is needed
//   const router = useRouter();

//   // Fungsi untuk mengambil data berdasarkan NIM dari Firestore
//   const fetchUserDataByNim = async (nim) => {
//     if (nim) {
//       try {
//         const docRef = doc(db, "users", nim);
//         const docSnap = await getDoc(docRef);
//         if (docSnap.exists()) {
//           const userData = docSnap.data();
//           setNama(userData.nama || ""); // Isi nama
//           setJurusan(userData.jurusan || ""); // Isi jurusan
//           setAngkatan(userData.angkatan || ""); // Isi angkatan
//           setCabangKampus(userData.cabangKampus || ""); // Isi cabang kampus
//           setRole(userData.role || "");
//         } else {
//           // Reset jika NIM tidak ditemukan
//           setNama("");
//           setJurusan("");
//           setAngkatan("");
//           setCabangKampus("");
//           setRole("");
//         }
//       } catch (error) {
//         console.error("Error fetching NIM data: ", error);
//         setError("Error fetching NIM data: " + error.message);
//       }
//     }
//   };

//   // Panggil fetchUserDataByNim setiap kali nim berubah
//   useEffect(() => {
//     fetchUserDataByNim(nim);
//   }, [nim]);

//   const handlePasswordReset = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setMessage(null);
//     setLoading(true);

//     // Validasi input password
//     if (password !== confirmPassword) {
//       setError("Password dan konfirmasi password tidak cocok.");
//       return;
//     }

//     try {
//       const email = `${nim}@university.edu`; // Email pengguna berdasarkan NIM
//       const user = await signInWithEmailAndPassword(auth, email, nim); // Login dulu untuk otentikasi
//       await updatePassword(user.user, password); // Update password di Firebase

//       setMessage({
//         type: "success",
//         text: "Password berhasil diubah. Silakan login kembali untuk mengisi data.",
//       });

//       // Reset all the input fields and states
//       setNim(""); 
//       setNama("");
//       setJurusan("");
//       setAngkatan("");
//       setCabangKampus("");
//       setRole("");
//       setIsReset(false); // Tutup form reset password
//     } catch (error) {
//       setError("Gagal mengubah password: " + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setError(null); // Reset error before the process
//     const newPassword = isReset ? password : nim; // Use the new password if reset, else use NIM as the password

//     try {
//       // If password was reset, do not check if email exists
//       if (!isReset) {
//         const signInMethods = await fetchSignInMethodsForEmail(auth, email);
//         if (signInMethods.length > 0) {
//           setError("Email is already in use. Please use a different email.");
//           setIsReset(true); // Set the reset password form visible
//           return;
//         }
//       }

//       // Membuat akun pengguna baru di Firebase Authentication
//       await createUserWithEmailAndPassword(auth, email, newPassword);

//       // Menyimpan data tambahan ke Firestore
//       await setDoc(doc(db, "users", nim), {
//         email,
//         nama,
//         jurusan,
//         angkatan,
//         cabangKampus,
//         role,
//       });
//       alert("Registrasi berhasil!");
//       router.push("/login");
//     } catch (error) {
//       console.error("Registrasi gagal: ", error.message);
//       setError("Registrasi gagal: " + error.message);
//       if (error.message.includes("email-already-in-use")) {
//         setIsReset(true); // Trigger reset password form if email is in use
//       }
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Registrasi</h1>
//       <form onSubmit={handleRegister} className={styles.formContainer}>
//         <input
//           type="text"
//           className={styles.inputField}
//           value={nim}
//           onChange={(e) => setNim(e.target.value)}
//           placeholder="Masukkan NIM"
//         />
//         <input
//           type="text"
//           className={styles.inputField}
//           value={nama}
//           onChange={(e) => setNama(e.target.value)}
//           placeholder="Masukkan Nama"
//           readOnly // Set input menjadi hanya baca (auto-fill dari Firestore)
//         />
//         <input
//           type="text"
//           className={styles.inputField}
//           value={jurusan}
//           onChange={(e) => setJurusan(e.target.value)}
//           placeholder="Masukkan Jurusan"
//           readOnly // Set input menjadi hanya baca (auto-fill dari Firestore)
//         />
//         <input
//           type="text"
//           className={styles.inputField}
//           value={angkatan}
//           onChange={(e) => setAngkatan(e.target.value)}
//           placeholder="Masukkan Angkatan"
//           readOnly // Set input menjadi hanya baca (auto-fill dari Firestore)
//         />
//         <input
//           type="text"
//           className={styles.inputField}
//           value={cabangKampus}
//           onChange={(e) => setCabangKampus(e.target.value)}
//           placeholder="Masukkan Cabang Kampus"
//           readOnly // Set input menjadi hanya baca (auto-fill dari Firestore)
//         />
//         <input
//           type="text"
//           className={styles.inputField}
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//           placeholder="Masukkan Role"
//           readOnly // Set input menjadi hanya baca (auto-fill dari Firestore)
//         />
//         <input
//           type="email"
//           className={styles.inputField}
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Masukkan Email"
//           required // Make email required
//         />
//         <input
//           type="password"
//           className={styles.inputField}
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Masukkan Password"
//           required // Make password required
//         />
//         <input
//           type="password"
//           className={styles.inputField}
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           placeholder="Konfirmasi Password"
//           required // Make confirm password required
//         />
//         {error && <p className={styles.error}>{error}</p>}
//         {message && <p className={styles.message}>{message.text}</p>}
//         <button type="submit" className={styles.button}>
//           Register
//         </button>
//       </form>

//       {/* Password reset form */}
//       {isReset && (
//         <form onSubmit={handlePasswordReset} className={styles.formContainer}>
//           <input
//             type="password"
//             className={styles.inputField}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Masukkan Password Baru"
//             required
//           />
//           <input
//             type="password"
//             className={styles.inputField}
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             placeholder="Konfirmasi Password Baru"
//             required
//           />
//           <button type="submit" className={styles.button}>
//             Reset Password
//           </button>
//         </form>
//       )}
//     </div>
//   );
// }


//tgl 23 november 2024
// "use client";
// import { useState, useEffect } from "react";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updatePassword, fetchSignInMethodsForEmail } from "firebase/auth";
// import { auth, db } from "../../firebase";
// import { doc, getDoc, setDoc } from "firebase/firestore";
// import { useRouter } from "next/navigation";
// import styles from "./register.module.css"; // Import CSS untuk styling

// export default function Register() {
//   const [nim, setNim] = useState("");
//   const [emailForm1, setEmailForm1] = useState(""); // State untuk email di Form 1
//   const [passwordForm1, setPasswordForm1] = useState(""); // State untuk password di Form 1
//   const [confirmPasswordForm1, setConfirmPasswordForm1] = useState(""); // State untuk confirm password di Form 1

//   const [emailForm2, setEmailForm2] = useState(""); // State untuk email di Form 2
//   const [passwordForm2, setPasswordForm2] = useState(""); // State untuk password di Form 2
//   const [confirmPasswordForm2, setConfirmPasswordForm2] = useState(""); // State untuk confirm password di Form 2

//   const [nama, setNama] = useState("");
//   const [jurusan, setJurusan] = useState("");
//   const [angkatan, setAngkatan] = useState("");
//   const [cabangKampus, setCabangKampus] = useState("");
//   const [role, setRole] = useState("");
//   const [error, setError] = useState(null);
//   const [message, setMessage] = useState(null); // For success messages
//   const [loading, setLoading] = useState(false); // For loading state
//   const [isReset, setIsReset] = useState(false); // To track if password reset is needed
//   const router = useRouter();

//   // Fungsi untuk mengambil data berdasarkan NIM dari Firestore
//   const fetchUserDataByNim = async (nim) => {
//     if (nim) {
//       try {
//         const docRef = doc(db, "users", nim);
//         const docSnap = await getDoc(docRef);
//         if (docSnap.exists()) {
//           const userData = docSnap.data();
//           setNama(userData.nama || ""); // Isi nama
//           setJurusan(userData.jurusan || ""); // Isi jurusan
//           setAngkatan(userData.angkatan || ""); // Isi angkatan
//           setCabangKampus(userData.cabangKampus || ""); // Isi cabang kampus
//           setRole(userData.role || "");
//         } else {
//           // Reset jika NIM tidak ditemukan
//           setNama("");
//           setJurusan("");
//           setAngkatan("");
//           setCabangKampus("");
//           setRole("");
//         }
//       } catch (error) {
//         console.error("Error fetching NIM data: ", error);
//         setError("Error fetching NIM data: " + error.message);
//       }
//     }
//   };

//   // Panggil fetchUserDataByNim setiap kali nim berubah
//   useEffect(() => {
//     fetchUserDataByNim(nim);
//   }, [nim]);

//   const handlePasswordReset = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setMessage(null);
//     setLoading(true);

//     // Validasi input password
//     if (passwordForm1 !== confirmPasswordForm1) {
//       setError("Password dan konfirmasi password tidak cocok.");
//       return;
//     }

//     try {
//       const email = `${nim}@university.edu`; // Email pengguna berdasarkan NIM
//       const user = await signInWithEmailAndPassword(auth, email, nim); // Login dulu untuk otentikasi
//       await updatePassword(user.user, passwordForm1); // Update password di Firebase

//       setMessage({
//         type: "success",
//         text: "Password berhasil diubah. Silakan login kembali untuk mengisi data.",
//       });

//       // Reset all the input fields and states
//       setNim(""); 
//       setNama("");
//       setJurusan("");
//       setAngkatan("");
//       setCabangKampus("");
//       setRole("");
//       setIsReset(false); // Tutup form reset password
//     } catch (error) {
//       setError("Gagal mengubah password: " + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setError(null); // Reset error before the process
//     const newPassword = isReset ? passwordForm1 : nim; // Use the new password if reset, else use NIM as the password

//     try {
//       // If password was reset, do not check if email exists
//       if (!isReset) {
//         const signInMethods = await fetchSignInMethodsForEmail(auth, emailForm1);
//         if (signInMethods.length > 0) {
//           setError("Email is already in use. Please use a different email.");
//           setIsReset(true); // Set the reset password form visible
//           return;
//         }
//       }

//       // Membuat akun pengguna baru di Firebase Authentication
//       await createUserWithEmailAndPassword(auth, emailForm1, newPassword);

//       // Menyimpan data tambahan ke Firestore
//       await setDoc(doc(db, "users", nim), {
//         email: emailForm1,
//         nama,
//         jurusan,
//         angkatan,
//         cabangKampus,
//         role,
//       });
//       alert("Registrasi berhasil!");
//       router.push("/login");
//     } catch (error) {
//       console.error("Registrasi gagal: ", error.message);
//       setError("Registrasi gagal: " + error.message);
//       if (error.message.includes("email-already-in-use")) {
//         setIsReset(true); // Trigger reset password form if email is in use
//       }
//     }
//   };

//   const handleRegister2 = async (e) => {
//     e.preventDefault();
//     setError(null); // Reset error before the process
//     const newPassword = isReset ? passwordForm1 : nim; // Use the new password if reset, else use NIM as the password

//     try {
//       // If password was reset, do not check if email exists
//       if (!isReset) {
//         const signInMethods = await fetchSignInMethodsForEmail(auth, emailForm1);
//         if (signInMethods.length > 0) {
//           setError("Email is already in use. Please use a different email.");
//           setIsReset(true); // Set the reset password form visible
//           return;
//         }
//       }

//       // Membuat akun pengguna baru di Firebase Authentication
//       await createUserWithEmailAndPassword(auth, emailForm1, newPassword);

//       // Menyimpan data tambahan ke Firestore
//       await setDoc(doc(db, "usersSkripsi", nim), {
//         email: emailForm1,
//         nama,
//         jurusan,
//         angkatan,
//         cabangKampus,
//         role,
//       });
//       alert("Registrasi berhasil!");
//       router.push("/login");
//     } catch (error) {
//       console.error("Registrasi gagal: ", error.message);
//       setError("Registrasi gagal: " + error.message);
//       if (error.message.includes("email-already-in-use")) {
//         setIsReset(true); // Trigger reset password form if email is in use
//       }
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Registrasi</h1>

//       {/* Form 1 - Registrasi */}
//       <form onSubmit={handleRegister} className={styles.formContainer}>
//         <h2>Form 1 - Registrasi</h2>
//         <input
//           type="text"
//           className={styles.inputField}
//           value={nim}
//           onChange={(e) => setNim(e.target.value)}
//           placeholder="Masukkan NIM"
//         />
//         <input
//           type="text"
//           className={styles.inputField}
//           value={nama}
//           onChange={(e) => setNama(e.target.value)}
//           placeholder="Masukkan Nama"
//           readOnly // Set input menjadi hanya baca (auto-fill dari Firestore)
//         />
//         <input
//           type="text"
//           className={styles.inputField}
//           value={jurusan}
//           onChange={(e) => setJurusan(e.target.value)}
//           placeholder="Masukkan Jurusan"
//           readOnly // Set input menjadi hanya baca (auto-fill dari Firestore)
//         />
//         <input
//           type="text"
//           className={styles.inputField}
//           value={angkatan}
//           onChange={(e) => setAngkatan(e.target.value)}
//           placeholder="Masukkan Angkatan"
//           readOnly // Set input menjadi hanya baca (auto-fill dari Firestore)
//         />
//         <input
//           type="text"
//           className={styles.inputField}
//           value={cabangKampus}
//           onChange={(e) => setCabangKampus(e.target.value)}
//           placeholder="Masukkan Cabang Kampus"
//           readOnly // Set input menjadi hanya baca (auto-fill dari Firestore)
//         />
//         <input
//           type="text"
//           className={styles.inputField}
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//           placeholder="Masukkan Role"
//           readOnly // Set input menjadi hanya baca (auto-fill dari Firestore)
//         />
//         <input
//           type="email"
//           className={styles.inputField}
//           value={emailForm1}
//           onChange={(e) => setEmailForm1(e.target.value)}
//           placeholder="Masukkan Email"
//           required // Make email required
//         />
//         <input
//           type="password"
//           className={styles.inputField}
//           value={passwordForm1}
//           onChange={(e) => setPasswordForm1(e.target.value)}
//           placeholder="Masukkan Password"
//           required // Make password required
//         />
//         <input
//           type="password"
//           className={styles.inputField}
//           value={confirmPasswordForm1}
//           onChange={(e) => setConfirmPasswordForm1(e.target.value)}
//           placeholder="Konfirmasi Password"
//           required // Make confirm password required
//         />
//         {error && <p className={styles.error}>{error}</p>}
//         {message && <p className={styles.message}>{message.text}</p>}
//         <button type="submit" className={styles.button}>
//           Register
//         </button>
//       </form>

//       {/* Form 2 - Simpan Data */}
//       <form onSubmit={handleRegister2} className={styles.formContainer}>
//         <h2>Form 2 - Simpan Data</h2>
//         <input
//           type="text"
//           className={styles.inputField}
//           value={nim}
//           onChange={(e) => setNim(e.target.value)}
//           placeholder="Masukkan NIM"
//         />
//         <input
//           type="text"
//           className={styles.inputField}
//           value={nama}
//           onChange={(e) => setNama(e.target.value)}
//           placeholder="Masukkan Nama"
//           readOnly // Set input menjadi hanya baca (auto-fill dari Firestore)
//         />
//         <input
//           type="text"
//           className={styles.inputField}
//           value={jurusan}
//           onChange={(e) => setJurusan(e.target.value)}
//           placeholder="Masukkan Jurusan"
//           readOnly // Set input menjadi hanya baca (auto-fill dari Firestore)
//         />
//         <input
//           type="text"
//           className={styles.inputField}
//           value={angkatan}
//           onChange={(e) => setAngkatan(e.target.value)}
//           placeholder="Masukkan Angkatan"
//           readOnly // Set input menjadi hanya baca (auto-fill dari Firestore)
//         />
//         <input
//           type="text"
//           className={styles.inputField}
//           value={cabangKampus}
//           onChange={(e) => setCabangKampus(e.target.value)}
//           placeholder="Masukkan Cabang Kampus"
//           readOnly // Set input menjadi hanya baca (auto-fill dari Firestore)
//         />
//         <input
//           type="text"
//           className={styles.inputField}
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//           placeholder="Masukkan Role"
//           readOnly // Set input menjadi hanya baca (auto-fill dari Firestore)
//         />
//         <input
//           type="email"
//           className={styles.inputField}
//           value={emailForm2}
//           onChange={(e) => setEmailForm2(e.target.value)}
//           placeholder="Masukkan Email"
//           required // Make email required
//         />
//         <input
//           type="password"
//           className={styles.inputField}
//           value={passwordForm2}
//           onChange={(e) => setPasswordForm2(e.target.value)}
//           placeholder="Masukkan Password"
//           required // Make password required
//         />
//         <input
//           type="password"
//           className={styles.inputField}
//           value={confirmPasswordForm2}
//           onChange={(e) => setConfirmPasswordForm2(e.target.value)}
//           placeholder="Konfirmasi Password"
//           required // Make confirm password required
//         />
//         {error && <p className={styles.error}>{error}</p>}
//         {message && <p className={styles.message}>{message.text}</p>}
//         <button type="submit" className={styles.button}>
//           Register
//         </button>
//       </form>

//       {/* Password reset form */}
//       {isReset && (
//         <form onSubmit={handlePasswordReset} className={styles.formContainer}>
//           <input
//             type="password"
//             className={styles.inputField}
//             value={passwordForm1}
//             onChange={(e) => setPasswordForm1(e.target.value)}
//             placeholder="Masukkan Password Baru"
//             required
//           />
//           <input
//             type="password"
//             className={styles.inputField}
//             value={confirmPasswordForm1}
//             onChange={(e) => setConfirmPasswordForm1(e.target.value)}
//             placeholder="Konfirmasi Password Baru"
//             required
//           />
//           <button type="submit" className={styles.button}>
//             Reset Password
//           </button>
//         </form>
//       )}
//     </div>
//   );
// }



// "use client";
// import { useState, useEffect } from "react";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updatePassword, fetchSignInMethodsForEmail } from "firebase/auth";
// import { auth, db } from "../../firebase";
// import { doc, getDoc, setDoc } from "firebase/firestore";
// import { useRouter } from "next/navigation";
// import styles from "./register.module.css";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// export default function Register() {
//   const [nim, setNim] = useState("");
//   const [emailForm1, setEmailForm1] = useState("");
//   const [passwordForm1, setPasswordForm1] = useState("");
//   const [confirmPasswordForm1, setConfirmPasswordForm1] = useState("");
//   const [emailForm2, setEmailForm2] = useState("");
//   const [passwordForm2, setPasswordForm2] = useState("");
//   const [confirmPasswordForm2, setConfirmPasswordForm2] = useState("");
//   const [nama, setNama] = useState("");
//   const [jurusan, setJurusan] = useState("");
//   const [angkatan, setAngkatan] = useState("");
//   const [cabangKampus, setCabangKampus] = useState("");
//   const [role, setRole] = useState("");
//   const [error, setError] = useState(null);
//   const [message, setMessage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [isReset, setIsReset] = useState(false);
//   const [activeForm, setActiveForm] = useState("usersSempro");
//   const router = useRouter();

//   const fetchUserDataByNim = async (nim) => {
//     if (nim) {
//       try {
//         const docRef = doc(db, "users", nim);
//         const docSnap = await getDoc(docRef);
//         if (docSnap.exists()) {
//           const userData = docSnap.data();
//           setNama(userData.nama || "");
//           setJurusan(userData.jurusan || "");
//           setAngkatan(userData.angkatan || "");
//           setCabangKampus(userData.cabangKampus || "");
//           setRole(userData.role || "");
//         } else {
//           setNama("");
//           setJurusan("");
//           setAngkatan("");
//           setCabangKampus("");
//           setRole("");
//         }
//       } catch (error) {
//         setError("Error fetching NIM data: " + error.message);
//       }
//     }
//   };

//   useEffect(() => {
//     fetchUserDataByNim(nim);
//   }, [nim]);

//   const handlePasswordReset = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setMessage(null);
//     setLoading(true);
//     if (passwordForm1 !== confirmPasswordForm1) {
//       setError("Password dan konfirmasi password tidak cocok.");
//       setLoading(false);
//       return;
//     }
//     try {
//       const email = `${nim}@university.edu`;
//       const user = await signInWithEmailAndPassword(auth, email, nim);
//       await updatePassword(user.user, passwordForm1);
//       setMessage({ type: "success", text: "Password berhasil diubah. Silakan login kembali untuk mengisi data." });
//       setNim("");
//       setNama("");
//       setJurusan("");
//       setAngkatan("");
//       setCabangKampus("");
//       setRole("");
//       setIsReset(false);
//     } catch (error) {
//       setError("Gagal mengubah password: " + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setError(null);
//     const newPassword = isReset ? passwordForm1 : nim;
//     try {
//       if (!isReset) {
//         const signInMethods = await fetchSignInMethodsForEmail(auth, emailForm1);
//         if (signInMethods.length > 0) {
//           setError("Email sudah digunakan.");
//           setIsReset(true);
//           return;
//         }
//       }
//       await createUserWithEmailAndPassword(auth, emailForm1, newPassword);
//       // await setDoc(doc(db, "usersSempro", nim), { email: emailForm1, nama, jurusan, angkatan, cabangKampus, role });
//       await setDoc(doc(db, collectionName, nim.trim()), {
//         email: emailForm1.trim(),
//         nama,
//         jurusan,
//         angkatan,
//         cabangKampus,
//         role,
//       });
      
//       alert("Registrasi berhasil!");
//       router.push("/login");
//     } catch (error) {
//       setError("Registrasi gagal: " + error.message);
//     }
//   };

//   const handleRegister2 = async (e) => {
//     e.preventDefault();
//     setError(null);
//     const newPassword = isReset ? passwordForm1 : nim;
//     try {
//       if (!isReset) {
//         const signInMethods = await fetchSignInMethodsForEmail(auth, emailForm2);
//         if (signInMethods.length > 0) {
//           setError("Email sudah digunakan.");
//           setIsReset(true);
//           return;
//         }
//       }
//       await createUserWithEmailAndPassword(auth, emailForm2, newPassword);
//       // await setDoc(doc(db, "usersSkripsi", nim), { email: emailForm2, nama, jurusan, angkatan, cabangKampus, role });
//       await setDoc(doc(db, collectionName, nim.trim()), {
//         email: emailForm2.trim(),
//         nama,
//         jurusan,
//         angkatan,
//         cabangKampus,
//         role,
//       });
      
//       alert("Registrasi berhasil!");
//       router.push("/login");
//     } catch (error) {
//       setError("Registrasi gagal: " + error.message);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Registrasi</h1>
//       {activeForm === "usersSempro" && (
//         <form onSubmit={handleRegister} className={styles.formContainer}>
//           <h2>Formulir Users Sempro</h2>
//           <input type="text" className={styles.inputField} value={nim} onChange={(e) => setNim(e.target.value)} placeholder="Masukkan NIM" />
//           <input type="text" className={styles.inputField} value={nama} placeholder="Masukkan Nama" readOnly />
//           <input type="text" className={styles.inputField} value={jurusan} placeholder="Masukkan Jurusan" readOnly />
//           <input type="text" className={styles.inputField} value={angkatan} placeholder="Masukkan Angkatan" readOnly />
//           <input type="text" className={styles.inputField} value={cabangKampus} placeholder="Masukkan Cabang Kampus" readOnly />
//           <input type="text" className={styles.inputField} value={role} placeholder="Masukkan Role" readOnly />
//           <input type="email" className={styles.inputField} value={emailForm1} onChange={(e) => setEmailForm1(e.target.value)} placeholder="Masukkan Email" required />
//           <input type="password" className={styles.inputField} value={passwordForm1} onChange={(e) => setPasswordForm1(e.target.value)} placeholder="Masukkan Password" required />
//           <input type="password" className={styles.inputField} value={confirmPasswordForm1} onChange={(e) => setConfirmPasswordForm1(e.target.value)} placeholder="Konfirmasi Password" required />
//           {error && <p className={styles.error}>{error}</p>}
//           {message && <p className={styles.message}>{message.text}</p>}
//           <button type="submit" className={styles.button}>Register</button>
//         </form>
//       )}
//       {activeForm === "usersSkripsi" && (
//         <form onSubmit={handleRegister2} className={styles.formContainer}>
//           <h2>Formulir Users Skripsi</h2>
//           <input type="text" className={styles.inputField} value={nim} onChange={(e) => setNim(e.target.value)} placeholder="Masukkan NIM" />
//           <input type="text" className={styles.inputField} value={nama} placeholder="Masukkan Nama" readOnly />
//           <input type="text" className={styles.inputField} value={jurusan} placeholder="Masukkan Jurusan" readOnly />
//           <input type="text" className={styles.inputField} value={angkatan} placeholder="Masukkan Angkatan" readOnly />
//           <input type="text" className={styles.inputField} value={cabangKampus} placeholder="Masukkan Cabang Kampus" readOnly />
//           <input type="text" className={styles.inputField} value={role} placeholder="Masukkan Role" readOnly />
//           <input type="email" className={styles.inputField} value={emailForm2} onChange={(e) => setEmailForm2(e.target.value)} placeholder="Masukkan Email" required />
//           <input type="password" className={styles.inputField} value={passwordForm2} onChange={(e) => setPasswordForm2(e.target.value)} placeholder="Masukkan Password" required />
//           <input type="password" className={styles.inputField} value={confirmPasswordForm2} onChange={(e) => setConfirmPasswordForm2(e.target.value)} placeholder="Konfirmasi Password" required />
//           {error && <p className={styles.error}>{error}</p>}
//           {message && <p className={styles.message}>{message.text}</p>}
//           <button type="submit" className={styles.button}>Register</button>
//         </form>
//       )}
//       <div className={styles.navigationButtons}>
//         {activeForm === "usersSkripsi" && (
//           <FaArrowLeft className={styles.icon} onClick={() => setActiveForm("usersSempro")} />
//         )}
//         {activeForm === "usersSempro" && (
//           <FaArrowRight className={styles.icon} onClick={() => setActiveForm("usersSkripsi")} />
//         )}
//       </div>
//     </div>
//   );
// }


//tgl 6 desember 2024
// "use client";
// import { useState, useEffect } from "react";
// import {
//   createUserWithEmailAndPassword,
//   fetchSignInMethodsForEmail,
// } from "firebase/auth";
// import { auth, db } from "../../firebase";
// import { doc, getDoc, setDoc } from "firebase/firestore";
// import { useRouter } from "next/navigation";
// import styles from "./register.module.css";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// // Komponen Formulir Mahasiswa
// const MahasiswaForm = ({
//   onSubmit,
//   nim,
//   email,
//   password,
//   confirmPassword,
//   setNim,
//   setEmail,
//   setPassword,
//   setConfirmPassword,
//   nama,
//   jurusan,
//   angkatan,
//   cabangKampus,
//   error,
// }) => (
//   <form onSubmit={onSubmit} className={styles.formContainer}>
//     <h2>Formulir Registrasi</h2>
//     <input
//       type="text"
//       className={styles.inputField}
//       value={nim}
//       onChange={(e) => setNim(e.target.value)}
//       placeholder="Masukkan NIM"
//       required
//     />
//     <input
//       type="text"
//       className={styles.inputField}
//       value={nama}
//       placeholder="Nama"
//       readOnly
//     />
//     <input
//       type="text"
//       className={styles.inputField}
//       value={jurusan}
//       placeholder="Jurusan"
//       readOnly
//     />
//     <input
//       type="text"
//       className={styles.inputField}
//       value={angkatan}
//       placeholder="Angkatan"
//       readOnly
//     />
//     <input
//       type="text"
//       className={styles.inputField}
//       value={cabangKampus}
//       placeholder="Cabang Kampus"
//       readOnly
//     />
//     <input
//       type="email"
//       className={styles.inputField}
//       value={email}
//       onChange={(e) => setEmail(e.target.value)}
//       placeholder="Masukkan Email"
//       required
//     />
//     <input
//       type="password"
//       className={styles.inputField}
//       value={password}
//       onChange={(e) => setPassword(e.target.value)}
//       placeholder="Masukkan Password"
//       required
//     />
//     <input
//       type="password"
//       className={styles.inputField}
//       value={confirmPassword}
//       onChange={(e) => setConfirmPassword(e.target.value)}
//       placeholder="Konfirmasi Password"
//       required
//     />
//     {error && <p className={styles.error}>{error}</p>}
//     <button type="submit" className={styles.button}>
//       Register
//     </button>
//   </form>
// );

// // Halaman Registrasi
// export default function Register() {
//   const [nim, setNim] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [nama, setNama] = useState("");
//   const [jurusan, setJurusan] = useState("");
//   const [angkatan, setAngkatan] = useState("");
//   const [cabangKampus, setCabangKampus] = useState("");
//   const [role, setRole] = useState("");
//   const [error, setError] = useState(null);
//   const [activeForm, setActiveForm] = useState("usersSempro"); // Form aktif: "usersSempro" atau "usersSkripsi"
//   const router = useRouter();

//   // Fetch data mahasiswa berdasarkan NIM
//   useEffect(() => {
//     const fetchUserDataByNim = async () => {
//       if (nim) {
//         try {
//           const docRef = doc(db, "users", nim.trim());
//           const docSnap = await getDoc(docRef);
//           if (docSnap.exists()) {
//             const userData = docSnap.data();
//             setNama(userData.nama || "");
//             setJurusan(userData.jurusan || "");
//             setAngkatan(userData.angkatan || "");
//             setCabangKampus(userData.cabangKampus || "");
//             setRole(userData.role || "");
//           } else {
//             setNama("");
//             setJurusan("");
//             setAngkatan("");
//             setCabangKampus("");
//             setRole("");
//           }
//         } catch (error) {
//           setError("Error fetching NIM data: " + error.message);
//         }
//       }
//     };
//     fetchUserDataByNim();
//   }, [nim]);

//   // Fungsi untuk registrasi pengguna
//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setError(null);
//     if (password !== confirmPassword) {
//       setError("Password dan konfirmasi password tidak cocok.");
//       return;
//     }
//     const collectionName = activeForm === "usersSempro" ? "usersSempro" : "usersSkripsi";
//     try {
//       const signInMethods = await fetchSignInMethodsForEmail(auth, email);
//       if (signInMethods.length > 0) {
//         setError("Email sudah digunakan.");
//         return;
//       }
//       await createUserWithEmailAndPassword(auth, email.trim(), password);
//       await setDoc(doc(db, collectionName, nim.trim()), {
//         email: email.trim(),
//         nama,
//         jurusan,
//         angkatan,
//         cabangKampus,
//         role: activeForm === "usersSempro" ? "mahasiswa_sempro" : "mahasiswa_skripsi",
//       });
//       alert("Registrasi berhasil!");
//       router.push("/login");
//     } catch (error) {
//       setError("Registrasi gagal: " + error.message);
//     }
//   };


//   // Fungsi untuk registrasi pengguna
//   const handleRegisterKaryawan = async (e) => {
//     e.preventDefault();
//     setError(null);
//     if (password !== confirmPassword) {
//       setError("Password dan konfirmasi password tidak cocok.");
//       return;
//     }
//     const collectionName = activeForm === "dosen" ? "dosen" : "penguji";
//     try {
//       const signInMethods = await fetchSignInMethodsForEmail(auth, email);
//       if (signInMethods.length > 0) {
//         setError("Email sudah digunakan.");
//         return;
//       }
//       await createUserWithEmailAndPassword(auth, email.trim(), password);
//       await setDoc(doc(db, collectionName, nim.trim()), {
//         email: email.trim(),
//         nama,
//         jurusan,
//         angkatan,
//         cabangKampus,
//         role: activeForm === "dosen" ? "dosen" : "penguji",
//       });
//       alert("Registrasi berhasil!");
//       router.push("/login");
//     } catch (error) {
//       setError("Registrasi gagal: " + error.message);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Registrasi Mahasiswa</h1>
//       {activeForm === "usersSempro" && (
//         <MahasiswaForm
//           onSubmit={handleRegister}
//           nim={nim}
//           email={email}
//           password={password}
//           confirmPassword={confirmPassword}
//           setNim={setNim}
//           setEmail={setEmail}
//           setPassword={setPassword}
//           setConfirmPassword={setConfirmPassword}
//           nama={nama}
//           jurusan={jurusan}
//           angkatan={angkatan}
//           cabangKampus={cabangKampus}
//           error={error}
//         />
//       )}
//       {activeForm === "usersSkripsi" && (
//         <MahasiswaForm
//           onSubmit={handleRegister}
//           nim={nim}
//           email={email}
//           password={password}
//           confirmPassword={confirmPassword}
//           setNim={setNim}
//           setEmail={setEmail}
//           setPassword={setPassword}
//           setConfirmPassword={setConfirmPassword}
//           nama={nama}
//           jurusan={jurusan}
//           angkatan={angkatan}
//           cabangKampus={cabangKampus}
//           error={error}
//         />
//       )}
//       {activeForm === "dosen" && (
//         <MahasiswaForm
//           onSubmit={handleRegisterKaryawan}
//           nim={nim}
//           email={email}
//           password={password}
//           confirmPassword={confirmPassword}
//           setNim={setNim}
//           setEmail={setEmail}
//           setPassword={setPassword}
//           setConfirmPassword={setConfirmPassword}
//           nama={nama}
//           jurusan={jurusan}
//           angkatan={angkatan}
//           cabangKampus={cabangKampus}
//           error={error}
//         />
//       )}
//       {activeForm === "penguji" && (
//         <MahasiswaForm
//           onSubmit={handleRegisterKaryawan}
//           nim={nim}
//           email={email}
//           password={password}
//           confirmPassword={confirmPassword}
//           setNim={setNim}
//           setEmail={setEmail}
//           setPassword={setPassword}
//           setConfirmPassword={setConfirmPassword}
//           nama={nama}
//           jurusan={jurusan}
//           angkatan={angkatan}
//           cabangKampus={cabangKampus}
//           error={error}
//         />
//       )}
//       <div className={styles.navigationButtons}>
//         {activeForm === "usersSkripsi" && (
//           <FaArrowLeft
//             className={styles.icon}
//             onClick={() => setActiveForm("usersSempro")}
//           />
//         )}
//         {activeForm === "usersSempro" && (
//           <FaArrowRight
//             className={styles.icon}
//             onClick={() => setActiveForm("usersSkripsi")}
//           />
//         )}
//         {activeForm === "dosen" && (
//           <FaArrowRight
//             className={styles.icon}
//             onClick={() => setActiveForm("penguji")}
//           />
//         )}
//         {activeForm === "penguji" && (
//           <FaArrowLeft
//             className={styles.icon}
//             onClick={() => setActiveForm("dosen")}
//           />
//         )}
//       </div>
//     </div>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import styles from "./register.module.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Komponen Formulir Mahasiswa
const MahasiswaForm = ({
  onSubmit,
  nim,
  email,
  password,
  confirmPassword,
  setNim,
  setEmail,
  setPassword,
  setConfirmPassword,
  nama,
  jurusan,
  angkatan,
  cabangKampus,
  error,
}) => (
  <form onSubmit={onSubmit} className={styles.formContainer}>
    <h2>Formulir Registrasi</h2>
    <input
      type="text"
      className={styles.inputField}
      value={nim}
      onChange={(e) => setNim(e.target.value)}
      placeholder="Masukkan NIM"
      required
    />
    <input
      type="text"
      className={styles.inputField}
      value={nama}
      placeholder="Nama"
      readOnly
    />
    <input
      type="text"
      className={styles.inputField}
      value={jurusan}
      placeholder="Jurusan"
      readOnly
    />
    <input
      type="text"
      className={styles.inputField}
      value={angkatan}
      placeholder="Angkatan"
      readOnly
    />
    <input
      type="text"
      className={styles.inputField}
      value={cabangKampus}
      placeholder="Cabang Kampus"
      readOnly
    />
    <input
      type="email"
      className={styles.inputField}
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Masukkan Email"
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
    <input
      type="password"
      className={styles.inputField}
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      placeholder="Konfirmasi Password"
      required
    />
    {error && <p className={styles.error}>{error}</p>}
    <button type="submit" className={styles.button}>
      Register
    </button>
  </form>
);

// Halaman Registrasi
export default function Register() {
  const [nim, setNim] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nama, setNama] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [angkatan, setAngkatan] = useState("");
  const [cabangKampus, setCabangKampus] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState(null);
  const [activeForm, setActiveForm] = useState("usersSempro"); // Form aktif: "usersSempro" atau "usersSkripsi"
  const [formChangeMessage, setFormChangeMessage] = useState(""); // State for feedback message
  const router = useRouter();

  // Fetch data mahasiswa berdasarkan NIM
  useEffect(() => {
    const fetchUserDataByNim = async () => {
      if (nim) {
        try {
          const docRef = doc(db, "users", nim.trim());
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const userData = docSnap.data();
            setNama(userData.nama || "");
            setJurusan(userData.jurusan || "");
            setAngkatan(userData.angkatan || "");
            setCabangKampus(userData.cabangKampus || "");
            setRole(userData.role || "");
          } else {
            setNama("");
            setJurusan("");
            setAngkatan("");
            setCabangKampus("");
            setRole("");
          }
        } catch (error) {
          setError("Error fetching NIM data: " + error.message);
        }
      }
    };
    fetchUserDataByNim();
  }, [nim]);

  // Fungsi untuk registrasi pengguna
  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    if (password !== confirmPassword) {
      setError("Password dan konfirmasi password tidak cocok.");
      return;
    }
    const collectionName = activeForm === "usersSempro" ? "usersSempro" : "usersSkripsi";
    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      if (signInMethods.length > 0) {
        setError("Email sudah digunakan.");
        return;
      }
      await createUserWithEmailAndPassword(auth, email.trim(), password);
      await setDoc(doc(db, collectionName, nim.trim()), {
        email: email.trim(),
        nama,
        jurusan,
        angkatan,
        cabangKampus,
        role: activeForm === "usersSempro" ? "mahasiswa_sempro" : "mahasiswa_skripsi",
      });
      alert("Registrasi berhasil!");
      router.push("/login");
    } catch (error) {
      setError("Registrasi gagal: " + error.message);
    }
  };

  const handleRegisterKaryawan = async (e) => {
    e.preventDefault();
    setError(null);
    if (password !== confirmPassword) {
      setError("Password dan konfirmasi password tidak cocok.");
      return;
    }
    const collectionName = activeForm === "dosen" ? "dosen" : "penguji";
    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      if (signInMethods.length > 0) {
        setError("Email sudah digunakan.");
        return;
      }
      await createUserWithEmailAndPassword(auth, email.trim(), password);
      await setDoc(doc(db, collectionName, nim.trim()), {
        email: email.trim(),
        nama,
        jurusan,
        angkatan,
        cabangKampus,
        role: activeForm === "dosen" ? "dosen" : "penguji",
      });
      alert("Registrasi berhasil!");
      router.push("/login");
    } catch (error) {
      setError("Registrasi gagal: " + error.message);
    }
  };

  const handleRegisterKaprodi = async (e) => {
    e.preventDefault();
    setError(null);
  
    // Validasi kecocokan password
    if (password !== confirmPassword) {
      setError("Password dan konfirmasi password tidak cocok.");
      return;
    }
  
    try {
      // Mengecek apakah email sudah terdaftar
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      if (signInMethods.length > 0) {
        setError("Email sudah digunakan.");
        return;
      }
  
      // Membuat akun baru
      await createUserWithEmailAndPassword(auth, email.trim(), password);
  
      // Menyimpan data kaprodi ke Firestore
      await setDoc(doc(db, "kaprodi", nim.trim()), {
        email: email.trim(),
        nama,
        jurusan,
        angkatan,
        cabangKampus,
        role: "kaprodi",
      });
  
      // Menampilkan notifikasi sukses
      alert("Registrasi kaprodi berhasil!");
      router.push("/login");
    } catch (error) {
      // Menampilkan error jika registrasi gagal
      setError("Registrasi gagal: " + error.message);
    }
  };
  

  const navigateForm = (direction) => {
    let newForm = activeForm;
    if (direction === "right") {
      if (activeForm === "usersSempro") newForm = "usersSkripsi";
      if (activeForm === "usersSkripsi") newForm = "dosen";
      if (activeForm === "dosen") newForm = "penguji";
      if (activeForm === "penguji") newForm = "kaprodi";
    } else if (direction === "left") {
      if (activeForm === "kaprodi") newForm = "penguji";
      if (activeForm === "penguji") newForm = "dosen";
      if (activeForm === "dosen") newForm = "usersSkripsi";
      if (activeForm === "usersSkripsi") newForm = "usersSempro";
    }
    setActiveForm(newForm);
  };

  // Effect when form changes
  useEffect(() => {
    setFormChangeMessage(`You have switched to the ${activeForm} form!`);
    const timer = setTimeout(() => {
      setFormChangeMessage(""); // Clear the message after 2 seconds
    }, 2000);
    return () => clearTimeout(timer); // Cleanup timeout on form change
  }, [activeForm]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Registrasi Mahasiswa</h1>
      {activeForm === "usersSempro" && (
        <MahasiswaForm
          onSubmit={handleRegister}
          nim={nim}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          setNim={setNim}
          setEmail={setEmail}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
          nama={nama}
          jurusan={jurusan}
          angkatan={angkatan}
          cabangKampus={cabangKampus}
          error={error}
        />
      )}
      {activeForm === "usersSkripsi" && (
        <MahasiswaForm
          onSubmit={handleRegister}
          nim={nim}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          setNim={setNim}
          setEmail={setEmail}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
          nama={nama}
          jurusan={jurusan}
          angkatan={angkatan}
          cabangKampus={cabangKampus}
          error={error}
        />
      )}
      {activeForm === "dosen" && (
        <MahasiswaForm
          onSubmit={handleRegisterKaryawan}
          nim={nim}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          setNim={setNim}
          setEmail={setEmail}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
          nama={nama}
          jurusan={jurusan}
          angkatan={angkatan}
          cabangKampus={cabangKampus}
          error={error}
        />
      )}
      {activeForm === "penguji" && (
        <MahasiswaForm
          onSubmit={handleRegisterKaryawan}
          nim={nim}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          setNim={setNim}
          setEmail={setEmail}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
          nama={nama}
          jurusan={jurusan}
          angkatan={angkatan}
          cabangKampus={cabangKampus}
          error={error}
        />
      )}
      {activeForm === "kaprodi" && (
        <MahasiswaForm
          onSubmit={handleRegisterKaprodi}
          nim={nim}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          setNim={setNim}
          setEmail={setEmail}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
          nama={nama}
          jurusan={jurusan}
          angkatan={angkatan}
          cabangKampus={cabangKampus}
          error={error}
        />
      )}
      <div className={styles.navigationButtons}>
        <FaArrowLeft
          className={styles.icon}
          onClick={() => navigateForm("left")}
        />
        <FaArrowRight
          className={styles.icon}
          onClick={() => navigateForm("right")}
        />
      </div>
      {formChangeMessage && <p className={styles.formChangeMessage}>{formChangeMessage}</p>}
    </div>
  );
}
