// // DosenList.js
// "use client";
// import { useEffect, useState } from "react";
// import { db } from "../../firebase"; // Adjust path as needed
// import { collection, getDocs } from "firebase/firestore";
// import styles from "../userlist/userList.module.css"; // Use the same CSS file
// import Navbar from "../navbar/Navbar";
// import NavbarKaprodi from "../navbarkaprodi/page";

// export default function DosenListKaprodi() {
//   const [dosen, setDosen] = useState([]);
//   const [error, setError] = useState(null);

//   // Function to fetch all dosen from Firestore
//   const fetchDosen = async () => {
//     try {
//       const usersCollection = collection(db, "users");
//       const usersSnapshot = await getDocs(usersCollection);
//       const dosenList = usersSnapshot.docs
//         .map((doc) => ({ id: doc.id, ...doc.data() }))
//         .filter((user) => user.role === "kaprodi"); // Filter for dosen role
//       setDosen(dosenList);
//     } catch (error) {
//       console.error("Error fetching dosen: ", error);
//       setError("Error fetching dosen");
//     }
//   };

//   useEffect(() => {
//     fetchDosen();
//   }, []);

//   return (
//     <>
//     <NavbarKaprodi/>
//     <div className={styles.container}>
//       <h1 className={styles.title}>List of Dosen</h1>
//       {error && <p className={styles.error}>{error}</p>}
//       <table className={styles.table}>
//         <thead>
//           <tr>
//             <th>NIM</th>
//             <th>Nama</th>
//             <th>Jurusan</th>
//             {/* <th>Angkatan</th> */}
//             <th>Cabang Kampus</th>
//             <th>Role</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {dosen.length > 0 ? (
//             dosen.map((user) => (
//               <tr key={user.id}>
//                 <td>{user.id}</td>
//                 <td>{user.nama}</td>
//                 <td>{user.jurusan}</td>
//                 {/* <td>{user.angkatan}</td> */}
//                 <td>{user.cabangKampus}</td>
//                 <td>{user.role}</td>
//                 <td>{user.email}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="7">No dosen found.</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//     </>
//   );
// }




// DosenList.js
"use client";
import { useEffect, useState } from "react";
import { db } from "../../firebase"; // Adjust path as needed
import { collection, getDocs } from "firebase/firestore";
import styles from "../userlist/userList.module.css"; // Use the same CSS file
import NavbarKaprodi from "../navbarkaprodi/page";
import NavbarPenguji from "../navbarpenguji/page";

// Default export for the first component
export default function DosenListKaprodi() {
  const [dosen, setDosen] = useState([]);
  const [error, setError] = useState(null);

  // Function to fetch all dosen from Firestore
  const fetchDosen = async () => {
    try {
      const usersCollection = collection(db, "users");
      const usersSnapshot = await getDocs(usersCollection);
      const dosenList = usersSnapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((user) => user.role === "kaprodi"); // Filter for dosen role
      setDosen(dosenList);
    } catch (error) {
      console.error("Error fetching dosen: ", error);
      setError("Error fetching dosen");
    }
  };

  useEffect(() => {
    fetchDosen();
  }, []);

  return (
    <>
      <NavbarKaprodi />
      <div className={styles.container}>
        <h1 className={styles.title}>List of Kaprodi</h1>
        {error && <p className={styles.error}>{error}</p>}
        <table className={styles.table}>
          <thead>
            <tr>
              <th>NIM</th>
              <th>Nama</th>
              <th>Jurusan</th>
              <th>Cabang Kampus</th>
              <th>Role</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {dosen.length > 0 ? (
              dosen.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.nama}</td>
                  <td>{user.jurusan}</td>
                  <td>{user.cabangKampus}</td>
                  <td>{user.role}</td>
                  <td>{user.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No dosen found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

// Named export for the second component
export function DosenListKaprodi2() {
  const [dosen, setDosen] = useState([]);
  const [error, setError] = useState(null);

  // Function to fetch all dosen from Firestore
  const fetchDosen = async () => {
    try {
      const usersCollection = collection(db, "users");
      const usersSnapshot = await getDocs(usersCollection);
      const dosenList = usersSnapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((user) => user.role === "kaprodi"); // Filter for dosen role
      setDosen(dosenList);
    } catch (error) {
      console.error("Error fetching dosen: ", error);
      setError("Error fetching dosen");
    }
  };

  useEffect(() => {
    fetchDosen();
  }, []);

  return (
    <>
      <NavbarPenguji />
      <div className={styles.container}>
        <h1 className={styles.title}>List of Kaprodi</h1>
        {error && <p className={styles.error}>{error}</p>}
        <table className={styles.table}>
          <thead>
            <tr>
              <th>NIM</th>
              <th>Nama</th>
              <th>Jurusan</th>
              <th>Cabang Kampus</th>
              <th>Role</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {dosen.length > 0 ? (
              dosen.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.nama}</td>
                  <td>{user.jurusan}</td>
                  <td>{user.cabangKampus}</td>
                  <td>{user.role}</td>
                  <td>{user.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No dosen found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
