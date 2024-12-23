"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase"; // Import Firebase configuration
import NavbarPenguji from "../navbarpenguji/page";

const DisplayRevisiMahasiswaSempro = () => {
  const [revisiData, setRevisiData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRevisiData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "revisiMahasiswaSempro"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRevisiData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching revisi data: ", error);
        setLoading(false);
      }
    };

    fetchRevisiData();
  }, []);

  if (loading) {
    return <p>Loading data...</p>;
  }

  return (
    <div>
      <NavbarPenguji />
      <h2>Data Revisi Mahasiswa Sempro</h2>
      {revisiData.length === 0 ? (
        <p>Tidak ada data revisi ditemukan.</p>
      ) : (
        <div>
          {revisiData.map((item, index) => (
            <div
              key={index}
              style={{
                marginBottom: "20px",
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              <h3>Jadwal Penguji ID: {item.id}</h3>
              <div>
                {Object.entries(item).map(([key, value]) => {
                  if (key !== "id") { // Avoid showing the document ID
                    return (
                      <div key={key} style={{ marginBottom: "5px" }}>
                        <strong>{key}:</strong>{" "}
                        {key === "revisi" ? (
                          // Show the revisions section if it's the "revisi" field
                          <div>
                            <strong>PEBIMBING:</strong>
                            <p>{value?.PEBIMBING}</p>
                            <strong>KETUA PENGUJI:</strong>
                            <p>{value?.KETUA_PENGUJI}</p>
                            <strong>ANGGOTA PENGUJI:</strong>
                            <p>{value?.ANGGOTA_PENGUJI}</p>
                          </div>
                        ) : (
                          <span>{value}</span>
                        )}
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayRevisiMahasiswaSempro;
