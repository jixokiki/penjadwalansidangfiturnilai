// "use client";
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { getAuth } from "firebase/auth";
// import { db } from '../../firebase'; // Import Firestore database
// import { doc, updateDoc } from 'firebase/firestore'; // untuk memperbarui data di Firestore

// export default function AdminPin() {
//   const [pin, setPin] = useState('');
//   const auth = getAuth();
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const correctPin = '40312'; // PIN yang benar

//     if (pin === correctPin) {
//       const user = auth.currentUser;

//       if (user) {
//         try {
//           // Perbarui data pengguna di Firestore dengan role admin
//           const userRef = doc(db, "users", user.uid);
//           await updateDoc(userRef, {
//             role: 'admin'
//           });

//           // Setelah role ditambahkan, arahkan ke halaman admin registrasi
//           alert("Anda sekarang adalah admin!");
//           router.push('/adminRegis');
//         } catch (error) {
//           console.error("Error updating role:", error);
//           alert("Terjadi kesalahan saat menambahkan role admin.");
//         }
//       } else {
//         alert("Pengguna tidak ditemukan. Silakan login terlebih dahulu.");
//         router.push('/login');
//       }
//     } else {
//       alert('PIN salah, silakan coba lagi.');
//     }
//   };

//   return (
//     <div>
//       <h1>Masukkan PIN Admin</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="password"
//           placeholder="Masukkan PIN"
//           value={pin}
//           onChange={(e) => setPin(e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }



// src/app/adminPin/page.jsx
// src/app/adminPin/page.jsx
// "use client";
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { doc, getDoc, updateDoc } from 'firebase/firestore';
// import { db } from '../../firebase'; // Firestore

// export default function AdminPin() {
//   const [pin, setPin] = useState(["", "", "", "", ""]); // PIN state
//   const [user, setUser] = useState(null); // State untuk menyimpan info user
//   const router = useRouter();
//   const correctPin = ["4", "0", "3", "1", "2"]; // PIN yang benar

//   // Cek apakah pengguna sudah login (berdasarkan session login dari halaman sebelumnya)
//   useEffect(() => {
//     // Ambil user dari session storage, atau Anda bisa menggunakan mekanisme lain
//     const storedUser = JSON.parse(sessionStorage.getItem('adminUser')); 
//     if (storedUser) {
//       setUser(storedUser); // Set user dari session
//     } else {
//       alert("Pengguna tidak ditemukan. Silakan login terlebih dahulu.");
//       router.push('/adminLogin'); // Arahkan ke login jika tidak ada session
//     }
//   }, [router]);

//   const handlePinChange = (e, index) => {
//     const newPin = [...pin];
//     newPin[index] = e.target.value;
//     setPin(newPin);

//     // Fokus ke kotak berikutnya setelah input
//     if (e.target.value && index < 4) {
//       document.getElementById(`pin-${index + 1}`).focus();
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (JSON.stringify(pin) === JSON.stringify(correctPin)) {
//       try {
//         const userRef = doc(db, "users", user.uid); // Mendapatkan referensi dokumen pengguna
//         await updateDoc(userRef, {
//           role: 'admin' // Mengupdate role admin
//         });

//         alert("Anda sekarang adalah admin!");
//         router.push('/adminRegis');
//       } catch (error) {
//         console.error("Terjadi kesalahan:", error);
//         alert("Terjadi kesalahan saat menambahkan admin.");
//       }
//     } else {
//       alert("PIN salah, silakan coba lagi.");
//     }
//   };

//   return (
//     <div>
//       <h1>Masukkan PIN Admin</h1>
//       <form onSubmit={handleSubmit}>
//         {pin.map((digit, index) => (
//           <input
//             key={index}
//             id={`pin-${index}`}
//             type="text"
//             maxLength="1"
//             value={digit}
//             onChange={(e) => handlePinChange(e, index)}
//             style={{ width: '40px', height: '40px', textAlign: 'center', margin: '5px' }} // Styling sederhana untuk kotak PIN
//           />
//         ))}
//         <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white' }}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }



"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase'; // Firestore

export default function AdminPin() {
  const [pin, setPin] = useState(["", "", "", "", ""]);
  const [user, setUser] = useState(null);
  const router = useRouter();
  const correctPin = ["4", "0", "3", "1", "2"];

  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem('adminUser')); 
    if (storedUser) {
      setUser(storedUser);
    } else {
      alert("Pengguna tidak ditemukan. Silakan login terlebih dahulu.");
      router.push('/adminLogin');
    }
  }, [router]);

  const handlePinChange = (e, index) => {
    const newPin = [...pin];
    newPin[index] = e.target.value;
    setPin(newPin);

    if (e.target.value && index < 4) {
      document.getElementById(`pin-${index + 1}`).focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (JSON.stringify(pin) === JSON.stringify(correctPin)) {
      try {
        const userRef = doc(db, "users", "admin_user");
        await updateDoc(userRef, {
          role: 'admin'
        });

        alert("Anda sekarang adalah admin!");
        router.push('/admin');
      } catch (error) {
        alert("Terjadi kesalahan saat menambahkan admin.");
      }
    } else {
      alert("PIN salah, silakan coba lagi.");
    }
  };

  return (
    <div>
      <h1>Masukkan PIN Admin</h1>
      <form onSubmit={handleSubmit}>
        {pin.map((digit, index) => (
          <input
            key={index}
            id={`pin-${index}`}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handlePinChange(e, index)}
            style={{ width: '40px', height: '40px', textAlign: 'center', margin: '5px' }}
          />
        ))}
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white' }}>
          Submit
        </button>
      </form>
    </div>
  );
}









