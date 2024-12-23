"use client";
import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import styles from './listjadwalskripsi.module.css';
// import NavbarPenguji from '../navbarpenguji/page';
import Navbar from '../navbar/Navbar';

export default function ListJadwalSkripsiMahasiswa() {
  const [jadwalSemproList, setJadwalSemproList] = useState([]);

  // Fetch all data from jadwalSempro collection
  const fetchJadwalSemproData = async () => {
    try {
      const jadwalSemproCollection = collection(db, "jadwalSkripsi");
      const jadwalSemproSnapshot = await getDocs(jadwalSemproCollection);
      const jadwalSemproData = jadwalSemproSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setJadwalSemproList(jadwalSemproData);
    } catch (error) {
      console.error("Error fetching jadwalSempro data: ", error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchJadwalSemproData();
  }, []);

  return (
    <div>
      <Navbar />
      <h2 className={styles.subTitle}>Daftar Jadwal Sidang Skripsi</h2>
      <ul className={styles.list}>
        {jadwalSemproList.map((jadwal) => (
          <li key={jadwal.id} className={styles.listItem}>
            <p><strong>Nama:</strong> {jadwal.nama}</p>
            <p><strong>Jurusan:</strong> {jadwal.jurusan}</p>
            <p><strong>Angkatan:</strong> {jadwal.angkatan}</p>
            <p><strong>Cabang Kampus:</strong> {jadwal.cabangKampus}</p>
            <p><strong>Nomor WhatsApp:</strong> {jadwal.noWhatsapp}</p>
            <p><strong>Mode Sidang:</strong> {jadwal.mode}</p>

            {jadwal.mode === "online" && (
              <div>
                <p><strong>Link GMeet:</strong> <a href={jadwal.gmeetLink} target="_blank" rel="noopener noreferrer">{jadwal.gmeetLink}</a></p>
              </div>
            )}

            {jadwal.mode === "offline" && (
              <div>
                <p><strong>Jam:</strong> {jadwal.jam}</p>
                <p><strong>Tanggal:</strong> {jadwal.tanggal} {jadwal.bulan} {jadwal.tahun}</p>
                <p><strong>Ruangan:</strong> {jadwal.ruangan}</p>
                <p><strong>Kampus:</strong> {jadwal.kampus}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
