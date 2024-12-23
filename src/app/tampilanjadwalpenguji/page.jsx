"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase"; // Import konfigurasi Firebase
import NavbarPenguji from "../navbarpenguji/page";
import Navbar from "../navbar/Navbar";

const DisplayJadwalPenguji = () => {
  const [jadwalPengujiData, setJadwalPengujiData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "jadwalPenguji2"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setJadwalPengujiData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Fungsi untuk mengecek apakah string adalah URL
  const isValidURL = (str) => {
    const urlPattern = /^(https?:\/\/[^\s]+$)/i; // Regex untuk URL
    return urlPattern.test(str);
  };

  // Fungsi untuk mengupdate status jadwal penguji
  const updateStatus = async (id, status) => {
    const confirmAcc = window.confirm(
      "Apakah anda yang acc ini penguji 1?"
    );
    if (confirmAcc) {
      try {
        const docRef = doc(db, "jadwalPenguji2", id);
        await updateDoc(docRef, {
          statusJadwalSidangSempro: status, // Update the status to "acc" or "decline"
        });
        alert(`Jadwal telah ${status === "acc" ? "disetujui" : "ditolak"}`);
        // Update the state to reflect the changes
        setJadwalPengujiData((prevData) =>
          prevData.map((item) =>
            item.id === id ? { ...item, statusJadwalSidangSempro: status } : item
          )
        );
      } catch (error) {
        console.error("Error updating status: ", error);
      }
    } else {
      alert("Anda bukan penguji 1 untuk jadwal ini.");
    }
  };

  if (loading) {
    return <p>Loading data...</p>;
  }

  return (
    <div>
      <Navbar />
      <h2>Data Jadwal Penguji</h2>
      {jadwalPengujiData.length === 0 ? (
        <p>Tidak ada data ditemukan.</p>
      ) : (
        <div>
          {jadwalPengujiData.map((item, index) => (
            <div
              key={index}
              style={{
                marginBottom: "20px",
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {Object.entries(item).map(([key, value]) => (
                <div key={key} style={{ marginBottom: "5px" }}>
                  <strong>{key}:</strong>{" "}
                  {isValidURL(value) ? (
                    // Jika value adalah URL, tampilkan sebagai link
                    <a
                      href={value}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "blue", textDecoration: "underline" }}
                    >
                      Lihat / Download File
                    </a>
                  ) : (
                    // Jika bukan URL, tampilkan nilai biasa
                    <span>{value}</span>
                  )}
                </div>
              ))}

              {/* Display status and action buttons */}
              <div style={{ marginTop: "10px" }}>
                <strong>Status:</strong>{" "}
                {item.statusJadwalSidangSempro
                  ? item.statusJadwalSidangSempro
                  : "Belum ada status"}
              </div>
              <div style={{ marginTop: "10px" }}>
                <button
                  onClick={() => updateStatus(item.id, "acc")}
                  style={{
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                >
                  Acc Jadwal
                </button>
                <button
                  onClick={() => updateStatus(item.id, "decline")}
                  style={{
                    backgroundColor: "#f44336",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    cursor: "pointer",
                  }}
                >
                  Decline Jadwal
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayJadwalPenguji;
