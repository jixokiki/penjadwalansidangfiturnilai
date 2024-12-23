"use client";
import { useState, useEffect } from 'react';
import { db } from '../../firebase'; 
import { doc, setDoc, collection, getDocs } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import styles from './listmahasiswaskripsi.module.css'; // Import CSS Module
import NavbarAdmin from '../navbaradmin/page';

export default function ListMahasiswaSkripsi() {
  const [mahasiswaList, setMahasiswaList] = useState([]); // State for Mahasiswa list
  const router = useRouter();

  // Fetch Mahasiswa data from Firestore
  const fetchMahasiswaData = async () => {
    try {
      const mahasiswaCollection = collection(db, "usersSkripsi");
      const mahasiswaSnapshot = await getDocs(mahasiswaCollection);
      const mahasiswaData = mahasiswaSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMahasiswaList(mahasiswaData);
    } catch (error) {
      console.error("Error fetching mahasiswa data: ", error);
    }
  };

  // Fetch Mahasiswa data on component mount
  useEffect(() => {
    fetchMahasiswaData();
  }, []);

  // Function to update status
  const updateStatus = async (id) => {
    try {
      await setDoc(doc(db, "usersSkripsi", id), { status: "Semua dokumen sesuai dan lengkap" }, { merge: true });
      alert("Status updated successfully!");
      fetchMahasiswaData(); // Refresh data after update
    } catch (error) {
      console.error("Error updating status: ", error);
      alert("Failed to update status.");
    }
  };

  return (
    <div>
      <NavbarAdmin />
      <h2 className={styles.subTitle}>Daftar Mahasiswa Terdaftar</h2>
      <ul className={styles.list}>
        {mahasiswaList.map((mahasiswa) => (
          <li key={mahasiswa.id} className={styles.listItem}>
            <p><strong>Nama:</strong> {mahasiswa.nama}</p>
            <p><strong>Jurusan:</strong> {mahasiswa.jurusan}</p>
            <p><strong>Angkatan:</strong> {mahasiswa.angkatan}</p>
            <p><strong>Cabang Kampus:</strong> {mahasiswa.cabangKampus}</p>
            <p><strong>Nomor WhatsApp:</strong> {mahasiswa.noWhatsapp}</p>
            <p><strong>Status:</strong> {mahasiswa.status || "Belum diverifikasi"}</p>
            <div className={styles.buttonContainer}>
              <button 
                className={styles.button} 
                onClick={() => updateStatus(mahasiswa.id)}
                disabled={mahasiswa.status === "Semua dokumen sesuai dan lengkap"} // Disable if already accepted
              >
                Acc
              </button>
              <p>File Pengajuan: <a href={mahasiswa.pengajuanSidangUrl} target="_blank" rel="noopener noreferrer">Download</a></p>
              <p>File KRS: <a href={mahasiswa.krsUrl} target="_blank" rel="noopener noreferrer">Download</a></p>
              <p>File Daftar Nilai: <a href={mahasiswa.daftarNilaiUrl} target="_blank" rel="noopener noreferrer">Download</a></p>
              <p>File TA1: <a href={mahasiswa.fileTA1Url} target="_blank" rel="noopener noreferrer">Download</a></p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
