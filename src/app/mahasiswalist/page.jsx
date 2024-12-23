// MahasiswaList.js
"use client";
import { useEffect, useState } from "react";
import { db } from "../../firebase"; // Adjust path as needed
import { collection, getDocs } from "firebase/firestore";
import styles from "../userlist/userList.module.css"; // Use the same CSS file
import Navbar from "../navbar/Navbar";

export default function MahasiswaList() {
  const [mahasiswa, setMahasiswa] = useState([]);
  const [error, setError] = useState(null);

  // Function to fetch all mahasiswa from Firestore
  const fetchMahasiswa = async () => {
    try {
      const usersCollection = collection(db, "users");
      const usersSnapshot = await getDocs(usersCollection);
      const mahasiswaList = usersSnapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((user) => user.role === "mahasiswa"); // Filter for mahasiswa role
      setMahasiswa(mahasiswaList);
    } catch (error) {
      console.error("Error fetching mahasiswa: ", error);
      setError("Error fetching mahasiswa");
    }
  };

  useEffect(() => {
    fetchMahasiswa();
  }, []);

  return (
    <>
    <Navbar/>
    <div className={styles.container}>
      <h1 className={styles.title}>List of Mahasiswa</h1>
      {error && <p className={styles.error}>{error}</p>}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>NIM</th>
            <th>Nama</th>
            <th>Jurusan</th>
            <th>Angkatan</th>
            <th>Cabang Kampus</th>
            <th>Role</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {mahasiswa.length > 0 ? (
            mahasiswa.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.nama}</td>
                <td>{user.jurusan}</td>
                <td>{user.angkatan}</td>
                <td>{user.cabangKampus}</td>
                <td>{user.role}</td>
                <td>{user.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No mahasiswa found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </>
  );
}
