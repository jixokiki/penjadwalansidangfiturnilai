"use client"
import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs, getDoc, doc as firestoreDoc } from "firebase/firestore"; 
import styles from "./filenilai.module.css";
import Navbar from "../navbar/Navbar";
import NavbarAdmin from "../navbaradmin/page";

export default function ListAllUsersSempro() {
  const [usersSemproList, setUsersSemproList] = useState([]);

  const fetchAllUsersSemproData = async () => {
    try {
      const usersSemproCollection = collection(db, "usersSempro");
      const usersSemproSnapshot = await getDocs(usersSemproCollection);
      const usersSemproData = await Promise.all(
        usersSemproSnapshot.docs.map(async (doc) => {
          const userData = { id: doc.id, ...doc.data() };

          const jadwalSemproDocRef = firestoreDoc(db, "nilaiMahasiswaSempro", doc.id);
          const jadwalSemproDocSnap = await getDoc(jadwalSemproDocRef);
          if (jadwalSemproDocSnap.exists()) {
            const jadwalSemproData = jadwalSemproDocSnap.data();
            userData.penguji = jadwalSemproData.penguji || null;
            userData.penguji2 = jadwalSemproData.penguji2 || null;
            userData.revisi = jadwalSemproData.revisi || {};
            userData.tanggalSidang = jadwalSemproData.tanggalSidang || null;
            userData.letterGrade = jadwalSemproData.letterGrade || null;
            userData.totalNilai = jadwalSemproData.totalNilai || null;
            userData.rataRata = jadwalSemproData.rataRata || null;
            userData.statusJadwalSidangSempro = jadwalSemproData.statusJadwalSidangSempro || null;
          }
          return userData;
        })
      );
      setUsersSemproList(usersSemproData);
    } catch (error) {
      console.error("Error fetching usersSempro data: ", error);
    }
  };

  useEffect(() => {
    fetchAllUsersSemproData();
  }, []);

  return (
    <div>
      <NavbarAdmin />
      <h2 className={styles.subTitle}>Lembar Nilai</h2>
      <ul className={styles.list}>
        {usersSemproList.map((user) => (
          <li key={user.id} className={styles.listItem}>
            <table className={styles.table}>
              <tbody>
                <tr>
                  <td><strong>Nama</strong></td>
                  <td>{user.nama}</td>
                </tr>
                <tr>
                  <td><strong>NIM</strong></td>
                  <td>{user.id || "N/A"}</td>
                </tr>
                <tr>
                  <td><strong>Judul</strong></td>
                  <td>{user.judul || "N/A"}</td>
                </tr>
                <tr>
                  <td><strong>Pembimbing</strong></td>
                  <td>{user.pembimbing || "Belum dipilih"}</td>
                </tr>
                <tr>
                  <td><strong>Hari/Tanggal</strong></td>
                  <td>{user.tanggalSidang || "Belum tersedia"}</td>
                </tr>
                <tr>
                  <td><strong>Angkatan</strong></td>
                  <td>{user.angkatan || "N/A"}</td>
                </tr>
                <tr>
                  <td><strong>Cabang Kampus</strong></td>
                  <td>{user.cabangKampus || "N/A"}</td>
                </tr>
                <tr>
                  <td><strong>Jurusan</strong></td>
                  <td>{user.jurusan || "N/A"}</td>
                </tr>
                <tr>
                  <td><strong>Daftar Nilai</strong></td>
                  <td><a href={user.daftarNilaiUrl || "#"} target="_blank">Link</a></td>
                </tr>
                <tr>
                  <td><strong>Nilai Huruf</strong></td>
                  <td>{user.letterGrade || "N/A"}</td>
                </tr>
                <tr>
                  <td><strong>No. Whatsapp</strong></td>
                  <td>{user.noWhatsapp || "N/A"}</td>
                </tr>
                <tr>
                  <td><strong>KRS</strong></td>
                  <td><a href={user.krsUrl || "#"} target="_blank">Link</a></td>
                </tr>
                <tr>
                  <td><strong>Pengajuan Sidang</strong></td>
                  <td><a href={user.pengajuanSidangUrl || "#"} target="_blank">Link</a></td>
                </tr>
                <tr>
                  <td><strong>Rata-rata Nilai</strong></td>
                  <td>{user.rataRata || "N/A"}</td>
                </tr>
                <tr>
                  <td><strong>Status</strong></td>
                  <td>{user.status || "N/A"}</td>
                </tr>
                <tr>
                  <td><strong>Status Jadwal Sidang Sempro</strong></td>
                  <td>{user.statusJadwalSidangSempro || "N/A"}</td>
                </tr>
                <tr>
                  <td><strong>Total Nilai</strong></td>
                  <td>{user.totalNilai || "N/A"}</td>
                </tr>
                <tr>
                  <td><strong>SKS Ditempuh</strong></td>
                  <td>{user.sksditempuh || "N/A"}</td>
                </tr>
                <tr>
                  <td><strong>SKS Berjalan</strong></td>
                  <td>{user.sksberjalan || "N/A"}</td>
                </tr>
              </tbody>
            </table>

            <h4>Revisi dan Masukan</h4>
            <table className={styles.table}>
              <tbody>
                <tr>
                  <td><strong>Pembimbing</strong></td>
                  <td>
                    {user.revisi?.PEMBIMBING?.text || "Tidak ada revisi"}
                    {user.revisi?.PEMBIMBING?.imageUrl && (
                      <img
                        src={user.revisi.PEMBIMBING.imageUrl}
                        alt="Revisi Pembimbing"
                        style={{ width: "100px" }}
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td><strong>Ketua Penguji</strong></td>
                  <td>
                    {user.revisi?.KETUA_PENGUJI?.text || "Tidak ada revisi"}
                    {user.revisi?.KETUA_PENGUJI?.imageUrl && (
                      <img
                        src={user.revisi.KETUA_PENGUJI.imageUrl}
                        alt="Revisi Ketua Penguji"
                        style={{ width: "100px" }}
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td><strong>Anggota Penguji</strong></td>
                  <td>
                    {user.revisi?.ANGGOTA_PENGUJI?.text || "Tidak ada revisi"}
                    {user.revisi?.ANGGOTA_PENGUJI?.imageUrl && (
                      <img
                        src={user.revisi.ANGGOTA_PENGUJI.imageUrl}
                        alt="Revisi Anggota Penguji"
                        style={{ width: "100px" }}
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td><strong>Nilai</strong></td>
                  <td>{user.revisi?.KETUA_PENGUJI?.text || "Belum dipilih"}</td>
                </tr>
              </tbody>
            </table>
          </li>
        ))}
      </ul>
    </div>
  );
}

