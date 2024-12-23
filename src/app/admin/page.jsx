// "use client"
// import { useState } from 'react';
// import { db } from '../../firebase'; // Import Firestore database
// import { doc, setDoc } from 'firebase/firestore';
// import { useRouter } from 'next/navigation';

// export default function AdminRegis() {
//   const [nama, setNama] = useState('');
//   const [jurusan, setJurusan] = useState('');
//   const [angkatan, setAngkatan] = useState('');
//   const [cabangKampus, setCabangKampus] = useState('');
//   const [noWhatsapp, setNoWhatsapp] = useState('');
//   const router = useRouter();

//   // Fungsi untuk membuat NIM berdasarkan input
//   const generateNim = () => {
//     const jurusanCode = jurusan === "TI" ? "10" : "11";
//     const cabangKampusCode = cabangKampus === "Harapan Indah" ? "02" : cabangKampus === "Kebon Jeruk" ? "01" : "03";
//     return `${angkatan}${jurusanCode}${cabangKampusCode}`;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const nim = generateNim(); // Buat NIM saat admin submit

//       // Buat dokumen baru di Firestore dengan data mahasiswa
//       await setDoc(doc(db, "users", nim), {
//         nama,
//         jurusan,
//         angkatan,
//         cabangKampus,
//         noWhatsapp,
//         nim // Simpan NIM yang telah dihasilkan
//       });

//       alert("Registrasi berhasil! NIM mahasiswa: " + nim);
      
//       // Redirect ke halaman login setelah registrasi berhasil
//       router.push("/login");
//     } catch (error) {
//       alert("Terjadi kesalahan saat registrasi: " + error.message);
//     }
//   };

//   return (
//     <div>
//       <h1>Registrasi Admin untuk Membuat NIM Mahasiswa</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Nama Mahasiswa"
//           value={nama}
//           onChange={(e) => setNama(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Jurusan (TI atau SI)"
//           value={jurusan}
//           onChange={(e) => setJurusan(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Angkatan"
//           value={angkatan}
//           onChange={(e) => setAngkatan(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Cabang Kampus (Harapan Indah, Kebon Jeruk, Citra Raya)"
//           value={cabangKampus}
//           onChange={(e) => setCabangKampus(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Nomor WhatsApp"
//           value={noWhatsapp}
//           onChange={(e) => setNoWhatsapp(e.target.value)}
//         />
//         <button type="submit">Registrasi Mahasiswa</button>
//       </form>
//     </div>
//   );
// }


//tgl 26 september 2024
// "use client";
// import { useState } from 'react';
// import { db } from '../../firebase'; // Import Firestore database
// import { doc, setDoc } from 'firebase/firestore';
// import { useRouter } from 'next/navigation';

// export default function AdminRegis() {
//   const [nama, setNama] = useState('');
//   const [jurusan, setJurusan] = useState('');
//   const [angkatan, setAngkatan] = useState('');
//   const [cabangKampus, setCabangKampus] = useState('');
//   const [noWhatsapp, setNoWhatsapp] = useState('');
//   const router = useRouter();

//   // Fungsi untuk membuat NIM berdasarkan input
//   const generateNim = () => {
//     const jurusanCode = jurusan === "TI" ? "10" : "11";
//     const cabangKampusCode = cabangKampus === "Harapan Indah" ? "02" : cabangKampus === "Kebon Jeruk" ? "01" : "03";
//     return `${angkatan}${jurusanCode}${cabangKampusCode}`;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const nim = generateNim(); // Buat NIM saat admin submit

//       // Buat dokumen baru di Firestore dengan data mahasiswa
//       await setDoc(doc(db, "users", nim), {
//         nama,
//         jurusan,
//         angkatan,
//         cabangKampus,
//         noWhatsapp,
//         nim // Simpan NIM yang telah dihasilkan
//       });

//       alert("Registrasi berhasil! NIM mahasiswa: " + nim);
      
//       // Redirect ke halaman login setelah registrasi berhasil
//       router.push("/login");
//     } catch (error) {
//       alert("Terjadi kesalahan saat registrasi: " + error.message);
//     }
//   };

//   return (
//     <div>
//       <h1>Registrasi Admin untuk Membuat NIM Mahasiswa</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Nama Mahasiswa"
//           value={nama}
//           onChange={(e) => setNama(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Jurusan (TI atau SI)"
//           value={jurusan}
//           onChange={(e) => setJurusan(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Angkatan"
//           value={angkatan}
//           onChange={(e) => setAngkatan(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Cabang Kampus (Harapan Indah, Kebon Jeruk, Citra Raya)"
//           value={cabangKampus}
//           onChange={(e) => setCabangKampus(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Nomor WhatsApp"
//           value={noWhatsapp}
//           onChange={(e) => setNoWhatsapp(e.target.value)}
//         />
//         <button type="submit">Registrasi Mahasiswa</button>
//       </form>
//     </div>
//   );
// }


//tgl 26 september 2024
// "use client";
// import { useState } from 'react';
// import { db } from '../../firebase'; // Firestore database
// import { doc, setDoc } from 'firebase/firestore';
// import { useRouter } from 'next/navigation';

// export default function AdminRegis() {
//   const [nama, setNama] = useState('');
//   const [jurusan, setJurusan] = useState('');
//   const [angkatan, setAngkatan] = useState('');
//   const [cabangKampus, setCabangKampus] = useState('');
//   const [noWhatsapp, setNoWhatsapp] = useState('');
//   const router = useRouter();

//   // Fungsi untuk membuat NIM berdasarkan input
//   const generateNim = () => {
//     const jurusanCode = jurusan === "TI" ? "10" : "11";
//     const cabangKampusCode = cabangKampus === "Harapan Indah" ? "02" : cabangKampus === "Kebon Jeruk" ? "01" : "03";
//     return `${angkatan}${jurusanCode}${cabangKampusCode}`;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const nim = generateNim(); // Buat NIM berdasarkan input

//       // Simpan data mahasiswa di Firestore
//       await setDoc(doc(db, "users", nim), {
//         nama,
//         jurusan,
//         angkatan,
//         cabangKampus,
//         noWhatsapp,
//         nim // Simpan NIM yang telah dihasilkan
//       });

//       alert("Registrasi berhasil! NIM mahasiswa: " + nim);
      
//       // Arahkan ke halaman login atau dashboard admin
//       router.push("/login"); 
//     } catch (error) {
//       alert("Terjadi kesalahan saat registrasi: " + error.message);
//     }
//   };

//   return (
//     <div>
//       <h1>Registrasi Admin untuk Membuat NIM Mahasiswa</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Nama Mahasiswa"
//           value={nama}
//           onChange={(e) => setNama(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Jurusan (TI atau SI)"
//           value={jurusan}
//           onChange={(e) => setJurusan(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Angkatan"
//           value={angkatan}
//           onChange={(e) => setAngkatan(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Cabang Kampus (Harapan Indah, Kebon Jeruk, Citra Raya)"
//           value={cabangKampus}
//           onChange={(e) => setCabangKampus(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Nomor WhatsApp"
//           value={noWhatsapp}
//           onChange={(e) => setNoWhatsapp(e.target.value)}
//         />
//         <button type="submit">Registrasi Mahasiswa</button>
//       </form>
//     </div>
//   );
// }


//tgl 27 september 2024
// "use client";
// import { useState } from 'react';
// import { db } from '../../firebase'; 
// import { doc, setDoc } from 'firebase/firestore';
// import { useRouter } from 'next/navigation';

// export default function AdminRegis() {
//   const [nama, setNama] = useState('');
//   const [jurusan, setJurusan] = useState('');
//   const [angkatan, setAngkatan] = useState('');
//   const [cabangKampus, setCabangKampus] = useState('');
//   const [noWhatsapp, setNoWhatsapp] = useState('');
//   const router = useRouter();

//   const generateNim = () => {
//     const jurusanCode = jurusan === "TI" ? "10" : "11";
//     // const cabangKampusCode = cabangKampus === "Harapan Indah" ? "02" : "01";
//     const cabangKampusCode = cabangKampus === "Harapan Indah" ? "02" : cabangKampus === "Kebon Jeruk" ? "01" : "03";
//     return `${angkatan}${jurusanCode}${cabangKampusCode}`;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const nim = generateNim();

//       await setDoc(doc(db, "users", nim), {
//         nama,
//         jurusan,
//         angkatan,
//         cabangKampus,
//         noWhatsapp,
//         nim
//       });

//       alert("Registrasi berhasil! NIM mahasiswa: " + nim);
//       router.push("/login"); 
//     } catch (error) {
//       alert("Terjadi kesalahan saat registrasi: " + error.message);
//     }
//   };

//   return (
//     <div>
//       <h1>Registrasi Admin untuk Membuat NIM Mahasiswa</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Nama Mahasiswa"
//           value={nama}
//           onChange={(e) => setNama(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Jurusan (TI atau SI)"
//           value={jurusan}
//           onChange={(e) => setJurusan(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Angkatan"
//           value={angkatan}
//           onChange={(e) => setAngkatan(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Cabang Kampus (Harapan Indah, Kebon Jeruk)"
//           value={cabangKampus}
//           onChange={(e) => setCabangKampus(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Nomor WhatsApp"
//           value={noWhatsapp}
//           onChange={(e) => setNoWhatsapp(e.target.value)}
//         />
//         <button type="submit">Registrasi Mahasiswa</button>
//       </form>
//     </div>
//   );
// }



//tgl 27 september 2024 03.30
// "use client";
// import { useState } from 'react';
// import { db } from '../../firebase'; 
// import { doc, setDoc } from 'firebase/firestore';
// import { useRouter } from 'next/navigation';

// export default function AdminRegis() {
//   const [nama, setNama] = useState('');
//   const [jurusan, setJurusan] = useState('');
//   const [angkatan, setAngkatan] = useState('');
//   const [cabangKampus, setCabangKampus] = useState('');
//   const [noWhatsapp, setNoWhatsapp] = useState('');
  
//   // State untuk pendaftaran dosen
//   const [namaDosen, setNamaDosen] = useState('');
//   const [jurusanDosen, setJurusanDosen] = useState('');
//   const [cabangKampusDosen, setCabangKampusDosen] = useState('');
//   const router = useRouter();

//   // Generate NIM Mahasiswa
//   const generateNim = () => {
//     const jurusanCode = jurusan === "TI" ? "10" : "11";
//     const cabangKampusCode = cabangKampus === "Harapan Indah" ? "02" : cabangKampus === "Kebon Jeruk" ? "01" : "03";
//     return `${angkatan}${jurusanCode}${cabangKampusCode}`;
//   };

//   // Generate NIM Dosen
//   const generateNimDosen = () => {
//     const dosenNamaLength = namaDosen.replace(/\s/g, '').length; // Hitung jumlah huruf tanpa spasi
//     const dosenJurusanCode = jurusanDosen === "TI" ? "10" : "11";
//     const dosenCabangKampusCode = cabangKampusDosen === "Harapan Indah" ? "02" : cabangKampusDosen === "Kebon Jeruk" ? "01" : "03";
//     return `${dosenNamaLength}${dosenCabangKampusCode}${dosenJurusanCode}`;
//   };

//   // Submit Mahasiswa
//   const handleSubmitMahasiswa = async (e) => {
//     e.preventDefault();
//     try {
//       const nim = generateNim();

//       await setDoc(doc(db, "users", nim), {
//         nama,
//         jurusan,
//         angkatan,
//         cabangKampus,
//         noWhatsapp,
//         nim,
//         role: "mahasiswa"
//       });

//       alert("Registrasi Mahasiswa berhasil! NIM mahasiswa: " + nim);
//       router.push("/login"); 
//     } catch (error) {
//       alert("Terjadi kesalahan saat registrasi mahasiswa: " + error.message);
//     }
//   };

//   // Submit Dosen
//   const handleSubmitDosen = async (e) => {
//     e.preventDefault();
//     try {
//       const nimDosen = generateNimDosen();

//       await setDoc(doc(db, "users", nimDosen), {
//         nama: namaDosen,
//         jurusan: jurusanDosen,
//         cabangKampus: cabangKampusDosen,
//         nim: nimDosen,
//         role: "dosen"
//       });

//       alert("Registrasi Dosen berhasil! NIM dosen: " + nimDosen);
//       router.push("/login"); 
//     } catch (error) {
//       alert("Terjadi kesalahan saat registrasi dosen: " + error.message);
//     }
//   };

//   return (
//     <div>
//       <h1>Registrasi Admin untuk Membuat NIM Mahasiswa</h1>
//       <form onSubmit={handleSubmitMahasiswa}>
//         <input
//           type="text"
//           placeholder="Nama Mahasiswa"
//           value={nama}
//           onChange={(e) => setNama(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Jurusan (TI atau SI)"
//           value={jurusan}
//           onChange={(e) => setJurusan(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Angkatan"
//           value={angkatan}
//           onChange={(e) => setAngkatan(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Cabang Kampus (Harapan Indah, Kebon Jeruk, Citra Raya)"
//           value={cabangKampus}
//           onChange={(e) => setCabangKampus(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Nomor WhatsApp"
//           value={noWhatsapp}
//           onChange={(e) => setNoWhatsapp(e.target.value)}
//         />
//         <button type="submit">Registrasi Mahasiswa</button>
//       </form>

//       <hr />

//       <h1>Registrasi Admin untuk Membuat NIM Dosen</h1>
//       <form onSubmit={handleSubmitDosen}>
//         <input
//           type="text"
//           placeholder="Nama Dosen"
//           value={namaDosen}
//           onChange={(e) => setNamaDosen(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Jurusan Dosen (TI atau SI)"
//           value={jurusanDosen}
//           onChange={(e) => setJurusanDosen(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Cabang Kampus Dosen (Harapan Indah, Kebon Jeruk, Citra Raya)"
//           value={cabangKampusDosen}
//           onChange={(e) => setCabangKampusDosen(e.target.value)}
//         />
//         <button type="submit">Registrasi Dosen</button>
//       </form>
//     </div>
//   );
// }


//tgl 18 oktober 2024
// "use client";
// import { useState } from 'react';
// import { db } from '../../firebase'; 
// import { doc, setDoc } from 'firebase/firestore';
// import { useRouter } from 'next/navigation';
// import styles from './AdminRegis.module.css'; // Import CSS Module

// export default function AdminRegis() {
//   const [nama, setNama] = useState('');
//   const [jurusan, setJurusan] = useState('');
//   const [angkatan, setAngkatan] = useState('');
//   const [cabangKampus, setCabangKampus] = useState('');
//   const [noWhatsapp, setNoWhatsapp] = useState('');
  
//   // State untuk pendaftaran dosen
//   const [namaDosen, setNamaDosen] = useState('');
//   const [jurusanDosen, setJurusanDosen] = useState('');
//   const [cabangKampusDosen, setCabangKampusDosen] = useState('');
//   const router = useRouter();

//   // Generate NIM Mahasiswa
//   const generateNim = () => {
//     const jurusanCode = jurusan === "TI" ? "10" : "11";
//     const cabangKampusCode = cabangKampus === "Harapan Indah" ? "02" : cabangKampus === "Kebon Jeruk" ? "01" : "03";
//     return `${angkatan}${jurusanCode}${cabangKampusCode}`;
//   };

//   // Generate NIM Dosen
//   const generateNimDosen = () => {
//     const dosenNamaLength = namaDosen.replace(/\s/g, '').length;
//     const dosenJurusanCode = jurusanDosen === "TI" ? "10" : "11";
//     const dosenCabangKampusCode = cabangKampusDosen === "Harapan Indah" ? "02" : cabangKampusDosen === "Kebon Jeruk" ? "01" : "03";
//     return `${dosenNamaLength}${dosenCabangKampusCode}${dosenJurusanCode}`;
//   };

//   // Submit Mahasiswa
//   const handleSubmitMahasiswa = async (e) => {
//     e.preventDefault();
//     try {
//       const nim = generateNim();
//       await setDoc(doc(db, "users", nim), {
//         nama,
//         jurusan,
//         angkatan,
//         cabangKampus,
//         noWhatsapp,
//         nim,
//         role: "mahasiswa"
//       });
//       alert("Registrasi Mahasiswa berhasil! NIM mahasiswa: " + nim);
//       router.push("/login"); 
//     } catch (error) {
//       alert("Terjadi kesalahan saat registrasi mahasiswa: " + error.message);
//     }
//   };

//   // Submit Dosen
//   const handleSubmitDosen = async (e) => {
//     e.preventDefault();
//     try {
//       const nimDosen = generateNimDosen();
//       await setDoc(doc(db, "users", nimDosen), {
//         nama: namaDosen,
//         jurusan: jurusanDosen,
//         cabangKampus: cabangKampusDosen,
//         nim: nimDosen,
//         role: "dosen"
//       });
//       alert("Registrasi Dosen berhasil! NIM dosen: " + nimDosen);
//       router.push("/login"); 
//     } catch (error) {
//       alert("Terjadi kesalahan saat registrasi dosen: " + error.message);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Registrasi Mahasiswa</h1>
//       <form onSubmit={handleSubmitMahasiswa} className={styles.form}>
//         <input
//           type="text"
//           placeholder="Nama Mahasiswa"
//           value={nama}
//           onChange={(e) => setNama(e.target.value)}
//           className={styles.input}
//         />
//         <input
//           type="text"
//           placeholder="Jurusan (TI atau SI)"
//           value={jurusan}
//           onChange={(e) => setJurusan(e.target.value)}
//           className={styles.input}
//         />
//         <input
//           type="text"
//           placeholder="Angkatan"
//           value={angkatan}
//           onChange={(e) => setAngkatan(e.target.value)}
//           className={styles.input}
//         />
//         <input
//           type="text"
//           placeholder="Cabang Kampus (Harapan Indah, Kebon Jeruk, Citra Raya)"
//           value={cabangKampus}
//           onChange={(e) => setCabangKampus(e.target.value)}
//           className={styles.input}
//         />
//         <input
//           type="text"
//           placeholder="Nomor WhatsApp"
//           value={noWhatsapp}
//           onChange={(e) => setNoWhatsapp(e.target.value)}
//           className={styles.input}
//         />
//         <button type="submit" className={styles.button}>Registrasi Mahasiswa</button>
//       </form>

//       <hr className={styles.separator} />

//       <h1 className={styles.title}>Registrasi Dosen</h1>
//       <form onSubmit={handleSubmitDosen} className={styles.form}>
//         <input
//           type="text"
//           placeholder="Nama Dosen"
//           value={namaDosen}
//           onChange={(e) => setNamaDosen(e.target.value)}
//           className={styles.input}
//         />
//         <input
//           type="text"
//           placeholder="Jurusan Dosen (TI atau SI)"
//           value={jurusanDosen}
//           onChange={(e) => setJurusanDosen(e.target.value)}
//           className={styles.input}
//         />
//         <input
//           type="text"
//           placeholder="Cabang Kampus Dosen (Harapan Indah, Kebon Jeruk, Citra Raya)"
//           value={cabangKampusDosen}
//           onChange={(e) => setCabangKampusDosen(e.target.value)}
//           className={styles.input}
//         />
//         <button type="submit" className={styles.button}>Registrasi Dosen</button>
//       </form>
//     </div>
//   );
// }



//tgl 20 oktober 2024
// "use client";
// import { useState, useEffect } from 'react';
// import { db } from '../../firebase'; 
// import { doc, setDoc, collection, getDocs } from 'firebase/firestore';
// import { useRouter } from 'next/navigation';
// import styles from './AdminRegis.module.css'; // Import CSS Module
// import NavbarAdmin from '../navbaradmin/page';

// export default function AdminRegis() {
//   const [nama, setNama] = useState('');
//   const [jurusan, setJurusan] = useState('');
//   const [angkatan, setAngkatan] = useState('');
//   const [cabangKampus, setCabangKampus] = useState('');
//   const [noWhatsapp, setNoWhatsapp] = useState('');
  
//   const [namaDosen, setNamaDosen] = useState('');
//   const [jurusanDosen, setJurusanDosen] = useState('');
//   const [cabangKampusDosen, setCabangKampusDosen] = useState('');

//   const [namaKaprodi, setNamaKaprodi] = useState('');
//   const [jurusanKaprodi, setJurusanKaprodi] = useState('');
//   const [cabangKampusKaprodi, setCabangKampusKaprodi] = useState('');

//   const [namaPenguji, setNamaPenguji] = useState('');
//   const [jurusanPenguji, setJurusanPenguji] = useState('');
//   const [cabangKampusPenguji, setCabangKampusPenguji] = useState('');

//   const [formIndex, setFormIndex] = useState(0); // 0 for Mahasiswa, 1 for Dosen, 2 for Kaprodi, 3 for Penguji
//   const [mahasiswaList, setMahasiswaList] = useState([]); // State for Mahasiswa list
//   const router = useRouter();

//   let swipeStart = 0; // Store the swipe start position

//   // Function to generate NIM for Kaprodi
//   const generateNimKaprodi = () => {
//     const timestamp = Date.now().toString();
//     return `KAPRODI-${timestamp}`; // Example format
//   };

//   // Function to generate NIM for Penguji
//   const generateNimPenguji = () => {
//     const timestamp = Date.now().toString();
//     return `PENGUJI-${timestamp}`; // Example format
//   };

//   // Handle touch start and mouse down
//   const handleStart = (e) => {
//     swipeStart = e.touches ? e.touches[0].clientX : e.clientX; // For touch or mouse
//   };

//   // Handle touch end and mouse up
//   const handleEnd = (e) => {
//     const swipeEnd = e.changedTouches ? e.changedTouches[0].clientX : e.clientX; // For touch or mouse
//     if (swipeStart - swipeEnd > 50) {
//       setFormIndex((prev) => Math.min(prev + 1, 3)); // Swipe left: move to next form
//     } else if (swipeEnd - swipeStart > 50) {
//       setFormIndex((prev) => Math.max(prev - 1, 0)); // Swipe right: move to previous form
//     }
//   };

//   // Fetch Mahasiswa data from Firestore
//   const fetchMahasiswaData = async () => {
//     try {
//       const mahasiswaCollection = collection(db, "usersSempro");
//       const mahasiswaSnapshot = await getDocs(mahasiswaCollection);
//       const mahasiswaData = mahasiswaSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setMahasiswaList(mahasiswaData);
//     } catch (error) {
//       console.error("Error fetching mahasiswa data: ", error);
//     }
//   };

//   // Fetch Mahasiswa data on component mount
//   useEffect(() => {
//     fetchMahasiswaData();
//   }, []);

//   // Submit Mahasiswa
//   const handleSubmitMahasiswa = async (e) => {
//     e.preventDefault();
//     try {
//       const nim = generateNim(); // Ensure you have this function
//       await setDoc(doc(db, "users", nim), {
//         nama,
//         jurusan,
//         angkatan,
//         cabangKampus,
//         noWhatsapp,
//         nim,
//         role: "mahasiswa"
//       });
//       alert("Registrasi Mahasiswa berhasil! NIM mahasiswa: " + nim);
//       router.push("/login"); 
//     } catch (error) {
//       alert("Terjadi kesalahan saat registrasi mahasiswa: " + error.message);
//     }
//   };

//   // Submit Dosen
//   const handleSubmitDosen = async (e) => {
//     e.preventDefault();
//     try {
//       const nimDosen = generateNimDosen(); // Ensure you have this function
//       await setDoc(doc(db, "users", nimDosen), {
//         nama: namaDosen,
//         jurusan: jurusanDosen,
//         cabangKampus: cabangKampusDosen,
//         nim: nimDosen,
//         role: "dosen"
//       });
//       alert("Registrasi Dosen berhasil! NIM dosen: " + nimDosen);
//       router.push("/login"); 
//     } catch (error) {
//       alert("Terjadi kesalahan saat registrasi dosen: " + error.message);
//     }
//   };

//   // Submit Kaprodi
//   const handleSubmitKaprodi = async (e) => {
//     e.preventDefault();
//     try {
//       const nimKaprodi = generateNimKaprodi(); // Use the newly defined function
//       await setDoc(doc(db, "users", nimKaprodi), {
//         nama: namaKaprodi,
//         jurusan: jurusanKaprodi,
//         cabangKampus: cabangKampusKaprodi,
//         nim: nimKaprodi,
//         role: "kaprodi"
//       });
//       alert("Registrasi Kaprodi berhasil! NIM kaprodi: " + nimKaprodi);
//       router.push("/login"); 
//     } catch (error) {
//       alert("Terjadi kesalahan saat registrasi kaprodi: " + error.message);
//     }
//   };

//   // Submit Penguji
//   const handleSubmitPenguji = async (e) => {
//     e.preventDefault();
//     try {
//       const nimPenguji = generateNimPenguji(); // Use the newly defined function
//       await setDoc(doc(db, "users", nimPenguji), {
//         nama: namaPenguji,
//         jurusan: jurusanPenguji,
//         cabangKampus: cabangKampusPenguji,
//         nim: nimPenguji,
//         role: "penguji"
//       });
//       alert("Registrasi Penguji berhasil! NIM penguji: " + nimPenguji);
//       router.push("/login"); 
//     } catch (error) {
//       alert("Terjadi kesalahan saat registrasi penguji: " + error.message);
//     }
//   };

//   return (
//     <>
//       <NavbarAdmin />
//       <div 
//         className={styles.container} 
//         onTouchStart={handleStart} 
//         onTouchEnd={handleEnd}
//         onMouseDown={handleStart} // For mouse event
//         onMouseUp={handleEnd}     // For mouse event
//       >
//         {formIndex === 0 ? (
//           <>
//             <h1 className={styles.title}>Registrasi Mahasiswa</h1>
//             <form onSubmit={handleSubmitMahasiswa} className={styles.form}>
//               <input
//                 type="text"
//                 placeholder="Nama Mahasiswa"
//                 value={nama}
//                 onChange={(e) => setNama(e.target.value)}
//                 className={styles.input}
//               />
//               <input
//                 type="text"
//                 placeholder="Jurusan (TI atau SI)"
//                 value={jurusan}
//                 onChange={(e) => setJurusan(e.target.value)}
//                 className={styles.input}
//               />
//               <input
//                 type="text"
//                 placeholder="Angkatan"
//                 value={angkatan}
//                 onChange={(e) => setAngkatan(e.target.value)}
//                 className={styles.input}
//               />
//               <input
//                 type="text"
//                 placeholder="Cabang Kampus (Harapan Indah, Kebon Jeruk, Citra Raya)"
//                 value={cabangKampus}
//                 onChange={(e) => setCabangKampus(e.target.value)}
//                 className={styles.input}
//               />
//               <input
//                 type="text"
//                 placeholder="Nomor WhatsApp"
//                 value={noWhatsapp}
//                 onChange={(e) => setNoWhatsapp(e.target.value)}
//                 className={styles.input}
//               />
//               <button type="submit" className={styles.button}>Registrasi Mahasiswa</button>
//             </form>
//           </>
//         ) : formIndex === 1 ? (
//           <>
//             <h1 className={styles.title}>Registrasi Dosen</h1>
//             <form onSubmit={handleSubmitDosen} className={styles.form}>
//               <input
//                 type="text"
//                 placeholder="Nama Dosen"
//                 value={namaDosen}
//                 onChange={(e) => setNamaDosen(e.target.value)}
//                 className={styles.input}
//               />
//               <input
//                 type="text"
//                 placeholder="Jurusan Dosen (TI atau SI)"
//                 value={jurusanDosen}
//                 onChange={(e) => setJurusanDosen(e.target.value)}
//                 className={styles.input}
//               />
//               <input
//                 type="text"
//                 placeholder="Cabang Kampus Dosen (Harapan Indah, Kebon Jeruk, Citra Raya)"
//                 value={cabangKampusDosen}
//                 onChange={(e) => setCabangKampusDosen(e.target.value)}
//                 className={styles.input}
//               />
//               <button type="submit" className={styles.button}>Registrasi Dosen</button>
//             </form>
//           </>
//         ) : formIndex === 2 ? (
//           <>
//             <h1 className={styles.title}>Registrasi Kaprodi</h1>
//             <form onSubmit={handleSubmitKaprodi} className={styles.form}>
//               <input
//                 type="text"
//                 placeholder="Nama Kaprodi"
//                 value={namaKaprodi}
//                 onChange={(e) => setNamaKaprodi(e.target.value)}
//                 className={styles.input}
//               />
//               <input
//                 type="text"
//                 placeholder="Jurusan Kaprodi (TI atau SI)"
//                 value={jurusanKaprodi}
//                 onChange={(e) => setJurusanKaprodi(e.target.value)}
//                 className={styles.input}
//               />
//               <input
//                 type="text"
//                 placeholder="Cabang Kampus Kaprodi (Harapan Indah, Kebon Jeruk, Citra Raya)"
//                 value={cabangKampusKaprodi}
//                 onChange={(e) => setCabangKampusKaprodi(e.target.value)}
//                 className={styles.input}
//               />
//               <button type="submit" className={styles.button}>Registrasi Kaprodi</button>
//             </form>
//           </>
//         ) : (
//           <>
//             <h1 className={styles.title}>Registrasi Penguji</h1>
//             <form onSubmit={handleSubmitPenguji} className={styles.form}>
//               <input
//                 type="text"
//                 placeholder="Nama Penguji"
//                 value={namaPenguji}
//                 onChange={(e) => setNamaPenguji(e.target.value)}
//                 className={styles.input}
//               />
//               <input
//                 type="text"
//                 placeholder="Jurusan Penguji (TI atau SI)"
//                 value={jurusanPenguji}
//                 onChange={(e) => setJurusanPenguji(e.target.value)}
//                 className={styles.input}
//               />
//               <input
//                 type="text"
//                 placeholder="Cabang Kampus Penguji (Harapan Indah, Kebon Jeruk, Citra Raya)"
//                 value={cabangKampusPenguji}
//                 onChange={(e) => setCabangKampusPenguji(e.target.value)}
//                 className={styles.input}
//               />
//               <button type="submit" className={styles.button}>Registrasi Penguji</button>
//             </form>
//           </>
//         )}
//       </div>
//     </>
//   );
// }



"use client";
import { useState, useEffect } from 'react';
import { db } from '../../firebase'; 
import { doc, setDoc, collection, getDocs } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import styles from './AdminRegis.module.css'; // Import CSS Module
import NavbarAdmin from '../navbaradmin/page';

const UserForm = ({ title, onSubmit, fields }) => (
  <>
    <h1 className={styles.title}>{title}</h1>
    <form onSubmit={onSubmit} className={styles.form}>
      {fields.map(({ placeholder, value, onChange }) => (
        <input
          key={placeholder}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={styles.input}
        />
      ))}
      <button type="submit" className={styles.button}>{`Registrasi ${title}`}</button>
    </form>
    <hr className={styles.separator} />
  </>
);

export default function AdminRegis() {
  const [nama, setNama] = useState('');
  const [jurusan, setJurusan] = useState('');
  const [angkatan, setAngkatan] = useState('');
  const [cabangKampus, setCabangKampus] = useState('');
  const [noWhatsapp, setNoWhatsapp] = useState('');
  
  const [namaDosen, setNamaDosen] = useState('');
  const [jurusanDosen, setJurusanDosen] = useState('');
  const [cabangKampusDosen, setCabangKampusDosen] = useState('');
  const [noWhatsappDosen, setNoWhatsappDosen] = useState('');

  const [namaKaprodi, setNamaKaprodi] = useState('');
  const [jurusanKaprodi, setJurusanKaprodi] = useState('');
  const [cabangKampusKaprodi, setCabangKampusKaprodi] = useState('');
  const [noWhatsappKaprodi, setNoWhatsappKaprodi] = useState('');

  const [namaPenguji, setNamaPenguji] = useState('');
  const [jurusanPenguji, setJurusanPenguji] = useState('');
  const [cabangKampusPenguji, setCabangKampusPenguji] = useState('');
  const [noWhatsappPenguji, setNoWhatsappPenguji] = useState('');

  const [formIndex, setFormIndex] = useState(0); // 0 for Mahasiswa, 1 for Dosen, 2 for Kaprodi, 3 for Penguji
  const router = useRouter();

  let swipeStart = 0; // Store the swipe start position

  // Function to generate NIM for Mahasiswa
  const generateNim = () => {
    const jurusanCode = jurusan === "TI" ? "10" : "11";
    const cabangKampusCode = cabangKampus === "Harapan Indah" ? "02" : cabangKampus === "Kebon Jeruk" ? "01" : "03";
    return `${angkatan}${jurusanCode}${cabangKampusCode}`;
  };

  // Function to generate NIM for Dosen
  const generateNimDosen = () => {
    const dosenNamaLength = namaDosen.replace(/\s/g, '').length;
    const dosenJurusanCode = jurusanDosen === "TI" ? "10" : "11";
    const dosenCabangKampusCode = cabangKampusDosen === "Harapan Indah" ? "02" : cabangKampusDosen === "Kebon Jeruk" ? "01" : "03";
    return `${dosenNamaLength}${dosenCabangKampusCode}${dosenJurusanCode}`;
  };

  // Function to generate NIM for Kaprodi
  const generateNimKaprodi = () => {
    const timestamp = Date.now().toString();
    return `KAPRODI-${timestamp}`; // Example format
  };

  // Function to generate NIM for Penguji
  const generateNimPenguji = () => {
    const timestamp = Date.now().toString();
    return `PENGUJI-${timestamp}`; // Example format
  };

  // Handle touch start and mouse down
  const handleStart = (e) => {
    swipeStart = e.touches ? e.touches[0].clientX : e.clientX; // For touch or mouse
  };

  // Handle touch end and mouse up
  const handleEnd = (e) => {
    const swipeEnd = e.changedTouches ? e.changedTouches[0].clientX : e.clientX; // For touch or mouse
    if (swipeStart - swipeEnd > 50) {
      setFormIndex((prev) => Math.min(prev + 1, 3)); // Swipe left: move to next form
    } else if (swipeEnd - swipeStart > 50) {
      setFormIndex((prev) => Math.max(prev - 1, 0)); // Swipe right: move to previous form
    }
  };

  // Submit Mahasiswa
  const handleSubmitMahasiswa = async (e) => {
    e.preventDefault();
    try {
      const nim = generateNim();
      await setDoc(doc(db, "users", nim), {
        nama,
        jurusan,
        angkatan,
        cabangKampus,
        noWhatsapp,
        nim,
        role: "mahasiswa"
      });
      alert("Registrasi Mahasiswa berhasil! NIM mahasiswa: " + nim);
      router.push("/login"); 
    } catch (error) {
      alert("Terjadi kesalahan saat registrasi mahasiswa: " + error.message);
    }
  };

  // Submit Dosen
  const handleSubmitDosen = async (e) => {
    e.preventDefault();
    try {
      const nimDosen = generateNimDosen();
      await setDoc(doc(db, "users", nimDosen), {
        nama: namaDosen,
        jurusan: jurusanDosen,
        cabangKampus: cabangKampusDosen,
        nim: nimDosen,
        role: "dosen"
      });
      alert("Registrasi Dosen berhasil! NIM dosen: " + nimDosen);
      router.push("/login"); 
    } catch (error) {
      alert("Terjadi kesalahan saat registrasi dosen: " + error.message);
    }
  };

  // Submit Kaprodi
  const handleSubmitKaprodi = async (e) => {
    e.preventDefault();
    try {
      const nimKaprodi = generateNimKaprodi();
      await setDoc(doc(db, "users", nimKaprodi), {
        nama: namaKaprodi,
        jurusan: jurusanKaprodi,
        cabangKampus: cabangKampusKaprodi,
        nim: nimKaprodi,
        role: "kaprodi"
      });
      alert("Registrasi Kaprodi berhasil! NIM kaprodi: " + nimKaprodi);
      router.push("/login"); 
    } catch (error) {
      alert("Terjadi kesalahan saat registrasi kaprodi: " + error.message);
    }
  };

  // Submit Penguji
  const handleSubmitPenguji = async (e) => {
    e.preventDefault();
    try {
      const nimPenguji = generateNimPenguji();
      await setDoc(doc(db, "users", nimPenguji), {
        nama: namaPenguji,
        jurusan: jurusanPenguji,
        cabangKampus: cabangKampusPenguji,
        nim: nimPenguji,
        role: "penguji"
      });
      alert("Registrasi Penguji berhasil! NIM penguji: " + nimPenguji);
      router.push("/login"); 
    } catch (error) {
      alert("Terjadi kesalahan saat registrasi penguji: " + error.message);
    }
  };

  return (
    <>
      <NavbarAdmin />
      <div 
        className={styles.container} 
        onTouchStart={handleStart} 
        onTouchEnd={handleEnd}
        onMouseDown={handleStart} // For mouse event
        onMouseUp={handleEnd}     // For mouse event
      >
        {formIndex === 0 && (
          <UserForm
            title="Mahasiswa"
            onSubmit={handleSubmitMahasiswa}
            fields={[
              { placeholder: "Nama Mahasiswa", value: nama, onChange: (e) => setNama(e.target.value) },
              { placeholder: "Jurusan (TI atau SI)", value: jurusan, onChange: (e) => setJurusan(e.target.value) },
              { placeholder: "Angkatan", value: angkatan, onChange: (e) => setAngkatan(e.target.value) },
              { placeholder: "Cabang Kampus (Harapan Indah, Kebon Jeruk, Citra Raya)", value: cabangKampus, onChange: (e) => setCabangKampus(e.target.value) },
              { placeholder: "Nomor WhatsApp", value: noWhatsapp, onChange: (e) => setNoWhatsapp(e.target.value) },
            ]}
          />
        )}
        
        {formIndex === 1 && (
          <UserForm
            title="Dosen"
            onSubmit={handleSubmitDosen}
            fields={[
              { placeholder: "Nama Dosen", value: namaDosen, onChange: (e) => setNamaDosen(e.target.value) },
              { placeholder: "Jurusan (TI atau SI)", value: jurusanDosen, onChange: (e) => setJurusanDosen(e.target.value) },
              { placeholder: "Cabang Kampus (Harapan Indah, Kebon Jeruk, Citra Raya)", value: cabangKampusDosen, onChange: (e) => setCabangKampusDosen(e.target.value) },
              { placeholder: "Nomor WhatsApp", value: noWhatsappDosen, onChange: (e) => setNoWhatsappDosen(e.target.value) },
            ]}
          />
        )}
        
        {formIndex === 2 && (
          <UserForm
            title="Kaprodi"
            onSubmit={handleSubmitKaprodi}
            fields={[
              { placeholder: "Nama Kaprodi", value: namaKaprodi, onChange: (e) => setNamaKaprodi(e.target.value) },
              { placeholder: "Jurusan (TI atau SI)", value: jurusanKaprodi, onChange: (e) => setJurusanKaprodi(e.target.value) },
              { placeholder: "Cabang Kampus (Harapan Indah, Kebon Jeruk, Citra Raya)", value: cabangKampusKaprodi, onChange: (e) => setCabangKampusKaprodi(e.target.value) },
              { placeholder: "Nomor WhatsApp", value: noWhatsappKaprodi, onChange: (e) => setNoWhatsappKaprodi(e.target.value) },
            ]}
          />
        )}
        
        {formIndex === 3 && (
          <UserForm
            title="Penguji"
            onSubmit={handleSubmitPenguji}
            fields={[
              { placeholder: "Nama Penguji", value: namaPenguji, onChange: (e) => setNamaPenguji(e.target.value) },
              { placeholder: "Jurusan (TI atau SI)", value: jurusanPenguji, onChange: (e) => setJurusanPenguji(e.target.value) },
              { placeholder: "Cabang Kampus (Harapan Indah, Kebon Jeruk, Citra Raya)", value: cabangKampusPenguji, onChange: (e) => setCabangKampusPenguji(e.target.value) },
              { placeholder: "Nomor WhatsApp", value: noWhatsappPenguji, onChange: (e) => setNoWhatsappPenguji(e.target.value) },
            ]}
          />
        )}
      </div>
    </>
  );
}
