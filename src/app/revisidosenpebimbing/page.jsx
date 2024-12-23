"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs, updateDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase"; // Import Firebase configuration
import NavbarPenguji from "../navbarpenguji/page";
import RevisiForm from "./RevisiForm"; // Import the RevisiForm component
import NilaiForm from "./NilaiForm";
import NavbarDosen from "../navbardosen/page";

const DisplayJadwalPenguji = () => {
  const [jadwalPengujiData, setJadwalPengujiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showRevisi, setShowRevisi] = useState(null); // State to control the display of the revised content
  const [revisiData, setRevisiData] = useState({}); // State to store the revisions
  const [nilaiData, setNilaiData] = useState({}); // State to store the revisions
  const [showNilai, setShowNilai] = useState(null); // State to control the display of the revised content

  const [imageFiles, setImageFiles] = useState({
    PEBIMBING: null,
    KETUA_PENGUJI: null,
    ANGGOTA_PENGUJI: null,
  });
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

  // Function to check if a string is a URL
  const isValidURL = (str) => {
    const urlPattern = /^(https?:\/\/[^\s]+$)/i; // Regex for URL
    return urlPattern.test(str);
  };

  // Function to update the status of jadwal penguji
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

  // Handle Revisi button click
  const handleRevisiClick = (id) => {
    setShowRevisi((prev) => (prev === id ? null : id)); // Toggle showRevisi based on the id
  };

  const uploadImage = (role) => {
    const file = imageFiles[role];
    if (!file) return null;

    const storageRef = ref(storage, `revisiImages/${item.id}_${role}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        null,
        (error) => reject(error),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log(`URL for ${role}:`, url); // Log URL here to verify
            setImageUrls((prev) => ({ ...prev, [role]: url }));
            resolve(url);
          });
        }
      );
    });
  };

  const handleNilaiClick = (id) => {
    setShowNilai((prev) => (prev === id ? null : id)); // Toggle showRevisi based on the id
  };

  const uploadImageNilai = (role) => {
    const file = imageFiles[role];
    if (!file) return null;

    const storageRef = ref(storage, `nilaiImages/${item.id}_${role}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        null,
        (error) => reject(error),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log(`URL for ${role}:`, url); // Log URL here to verify
            setImageUrls((prev) => ({ ...prev, [role]: url }));
            resolve(url);
          });
        }
      );
    });
  };

  const handleSaveNilai = async (id) => {
    const nilai = nilaiData[id];
    const originalData = jadwalPengujiData.find((item) => item.id === id);

    if (nilai && originalData) {
      try {
        // Upload each image and retrieve its URL
        const PEBIMBING_URL = nilai.PEBIMBING.imageUrl || await uploadImageNilai("PEBIMBING");
        const KETUA_PENGUJI_URL = nilai.KETUA_PENGUJI.imageUrl || await uploadImageNilai("KETUA_PENGUJI");
        const ANGGOTA_PENGUJI_URL = nilai.ANGGOTA_PENGUJI.imageUrl || await uploadImageNilai("ANGGOTA_PENGUJI");

        // Combine both original data from jadwalPenguji2 and revision data with image URLs
        const combinedData = {
          ...originalData,
          nilai: {
            PEBIMBING: {
              text: nilai.PEBIMBING.text || "",
              imageUrl: PEBIMBING_URL,
            },
            KETUA_PENGUJI: {
              text: nilai.KETUA_PENGUJI.text || "",
              imageUrl: KETUA_PENGUJI_URL,
            },
            ANGGOTA_PENGUJI: {
              text: nilai.ANGGOTA_PENGUJI.text || "",
              imageUrl: ANGGOTA_PENGUJI_URL,
            },
          }
        };

        // Save the combined data to revisiMahasiswaSempro collection
        await setDoc(doc(db, "nilaiMahasiswaSempro", id), combinedData);
        alert("Nilai dan ttd telah disimpan.");
        setShowNilai(null); // Hide the revisi section after saving
      } catch (error) {
        console.error("Error saving revisi: ", error);
        alert("Terjadi kesalahan saat menyimpan revisi.");
      }
    } else {
      alert("Tidak ada revisi untuk disimpan.");
    }
  };

  const handleSaveRevisi = async (id) => {
    const revisi = revisiData[id];
    const originalData = jadwalPengujiData.find((item) => item.id === id);

    if (revisi && originalData) {
      try {
        // Upload each image and retrieve its URL
        const PEBIMBING_URL = revisi.PEBIMBING.imageUrl || await uploadImage("PEBIMBING");
        const KETUA_PENGUJI_URL = revisi.KETUA_PENGUJI.imageUrl || await uploadImage("KETUA_PENGUJI");
        const ANGGOTA_PENGUJI_URL = revisi.ANGGOTA_PENGUJI.imageUrl || await uploadImage("ANGGOTA_PENGUJI");

        // Combine both original data from jadwalPenguji2 and revision data with image URLs
        const combinedData = {
          ...originalData,
          revisi: {
            PEBIMBING: {
              text: revisi.PEBIMBING.text || "",
              imageUrl: PEBIMBING_URL,
            },
            KETUA_PENGUJI: {
              text: revisi.KETUA_PENGUJI.text || "",
              imageUrl: KETUA_PENGUJI_URL,
            },
            ANGGOTA_PENGUJI: {
              text: revisi.ANGGOTA_PENGUJI.text || "",
              imageUrl: ANGGOTA_PENGUJI_URL,
            },
          }
        };

        // Save the combined data to revisiMahasiswaSempro collection
        await setDoc(doc(db, "nilaiMahasiswaSempro", id), combinedData);
        alert("Nilai dan ttd telah disimpan.");
        setShowRevisi(null); // Hide the revisi section after saving
      } catch (error) {
        console.error("Error saving revisi: ", error);
        alert("Terjadi kesalahan saat menyimpan revisi.");
      }
    } else {
      alert("Tidak ada revisi untuk disimpan.");
    }
};


  // Handle input changes in the revision form
  const handleRevisiChange = (id, role, value) => {
    setRevisiData((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [role]: value, // Save the revision for each role (PEBIMBING, KETUA PENGUJI, etc.)
      },
    }));
  };

  const handleNilaiChange = (id, role, value) => {
    setNilaiData((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [role]: value, // Save the revision for each role (PEBIMBING, KETUA PENGUJI, etc.)
      },
    }));
  };

  if (loading) {
    return <p>Loading data...</p>;
  }

  return (
    <div>
      <NavbarDosen />
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
                    // If value is a URL, display it as a link
                    <a
                      href={value}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "blue", textDecoration: "underline" }}
                    >
                      Lihat / Download File
                    </a>
                  ) : (
                    // If not a URL, display the value
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

                {/* Add Revisi button */}
                <button
                  onClick={() => handleRevisiClick(item.id)}
                  style={{
                    backgroundColor: "#FFA500",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    cursor: "pointer",
                    marginLeft: "10px",
                  }}
                >
                  Berikan Revisi
                </button>
                {/* Add Nilai button */}
                <button
                  onClick={() => handleNilaiClick(item.id)}
                  style={{
                    backgroundColor: "#00D5FF",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    cursor: "pointer",
                    marginLeft: "20px",
                  }}
                >
                  Berikan Nilai
                </button>
              </div>

              {/* Show revised content when Revisi button is clicked */}
              {showRevisi === item.id && (
                <RevisiForm
                  item={item}
                  revisiData={revisiData}
                  handleRevisiChange={handleRevisiChange}
                  handleSaveRevisi={handleSaveRevisi}
                />
              )}

              {/* Show revised content when Revisi button is clicked */}
              {showNilai === item.id && (
                <NilaiForm
                  item={item}
                  nilaiData={nilaiData}
                  handleNilaiChange={handleNilaiChange}
                  handleSaveNilai={handleSaveNilai}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayJadwalPenguji;