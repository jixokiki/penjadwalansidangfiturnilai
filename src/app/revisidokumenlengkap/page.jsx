"use client";
import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import styles from "./listrevisidokumen.module.css";
import Navbar from "../navbar/Navbar";
import NavbarAdmin from "../navbaradmin/page";

export default function ListRevisiDokumen() {
  const [revisiDokumenLengkap, setRevisiDokumenLengkap] = useState([]);

  // Fetch data from revisiDokumenLengkap collection
  const fetchRevisiDokumenLengkap = async () => {
    try {
      const revisiDokumenCollection = collection(db, "revisiDokumenLengkap");
      const revisiDokumenSnapshot = await getDocs(revisiDokumenCollection);
      const revisiDokumenData = revisiDokumenSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRevisiDokumenLengkap(revisiDokumenData);
    } catch (error) {
      console.error("Error fetching revisiDokumenLengkap data: ", error);
    }
  };

  useEffect(() => {
    fetchRevisiDokumenLengkap();
  }, []);

  return (
    <div>
      <NavbarAdmin />
      <h2 className={styles.subTitle}>Daftar Revisi Dokumen Lengkap</h2>
      <ul className={styles.list}>
        {revisiDokumenLengkap.map((revisi) => (
          <li key={revisi.id} className={styles.listItem}>
            <p><strong>ID:</strong> {revisi.id}</p>
            <p><strong>Timestamp:</strong> {new Date(revisi.timestamp?.seconds * 1000).toLocaleString()}</p>

            <h4>Revisi Files:</h4>
            <ul>
              {revisi.revisiFiles?.map((url, index) => (
                <li key={index}>
                  <a href={url} target="_blank" rel="noopener noreferrer">Revisi File {index + 1}</a>
                </li>
              ))}
            </ul>

            <h4>Dokumen Pendukung:</h4>
            <ul>
              {Object.entries(revisi)
                .filter(([key]) => ["pengajuan", "krs", "nilai", "ta1"].includes(key))
                .map(([key, url]) => (
                  <li key={key}>
                    <strong>{key.toUpperCase()}:</strong> <a href={url} target="_blank" rel="noopener noreferrer">{key}</a>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
