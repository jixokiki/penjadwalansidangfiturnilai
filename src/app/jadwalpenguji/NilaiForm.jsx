// "use client";
// import React, { useState, useEffect } from "react";
// import { storage, db } from "../../firebase"; // Import Firebase Storage dan Firestore
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { doc, getDoc, setDoc } from "firebase/firestore";

// const NilaiForm = ({ item, nilaiData, handleNilaiChange, handleSaveNilai }) => {
//   const [imageFiles, setImageFiles] = useState({
//     PEBIMBING: null,
//     KETUA_PENGUJI: null,
//     ANGGOTA_PENGUJI: null,
//   });
//   const [imageUrls, setImageUrls] = useState({
//     PEBIMBING: "",
//     KETUA_PENGUJI: "",
//     ANGGOTA_PENGUJI: "",
//   });
//   const [localNilaiData, setLocalNilaiData] = useState({
//     PEBIMBING: { text: "", imageUrl: "" },
//     KETUA_PENGUJI: { text: "", imageUrl: "" },
//     ANGGOTA_PENGUJI: { text: "", imageUrl: "" },
//   });

//   // Load existing revisi data from Firestore
//   useEffect(() => {
//     const loadNilaiData = async () => {
//       try {
//         const docRef = doc(db, "nilaiSempro", item.id);
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//           const data = docSnap.data();
//           setLocalNilaiData({
//             PEBIMBING: data.PEBIMBING || { text: "", imageUrl: "" },
//             KETUA_PENGUJI: data.KETUA_PENGUJI || { text: "", imageUrl: "" },
//             ANGGOTA_PENGUJI: data.ANGGOTA_PENGUJI || { text: "", imageUrl: "" },
//           });
//           setImageUrls({
//             PEBIMBING: data.PEBIMBING?.imageUrl || "",
//             KETUA_PENGUJI: data.KETUA_PENGUJI?.imageUrl || "",
//             ANGGOTA_PENGUJI: data.ANGGOTA_PENGUJI?.imageUrl || "",
//           });
//         }
//       } catch (error) {
//         console.error("Error loading revisi data: ", error);
//       }
//     };

//     loadNilaiData();
//   }, [item.id]);

//   // Handle image file change
//   const handleImageChange = (role, event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setImageFiles((prev) => ({ ...prev, [role]: file }));
//     }
//   };

//   // Upload image to Firebase Storage and get the URL
//   const uploadImage = (role) => {
//     const file = imageFiles[role];
//     if (!file) return null;

//     const storageRef = ref(storage, `nilaiImages/${item.id}_${role}`);
//     const uploadTask = uploadBytesResumable(storageRef, file);

//     return new Promise((resolve, reject) => {
//       uploadTask.on(
//         "state_changed",
//         null,
//         (error) => reject(error),
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then((url) => {
//             setImageUrls((prev) => ({ ...prev, [role]: url }));
//             resolve(url);
//           });
//         }
//       );
//     });
//   };

//   // Save revisions including images
//   const handleSaveNilaiWithImage = async () => {
//     try {
//       // Upload each image and retrieve its URL
//       const PEBIMBING_URL = await uploadImage("PEBIMBING");
//       const KETUA_PENGUJI_URL = await uploadImage("KETUA_PENGUJI");
//       const ANGGOTA_PENGUJI_URL = await uploadImage("ANGGOTA_PENGUJI");

//       // Prepare data to save to Firestore
//       const updatedNilaiData = {
//         PEBIMBING: {
//           text: localNilaiData.PEBIMBING.text,
//           imageUrl: PEBIMBING_URL || localNilaiData.PEBIMBING.imageUrl,
//         },
//         KETUA_PENGUJI: {
//           text: localNilaiData.KETUA_PENGUJI.text,
//           imageUrl: KETUA_PENGUJI_URL || localNilaiData.KETUA_PENGUJI.imageUrl,
//         },
//         ANGGOTA_PENGUJI: {
//           text: localNilaiData.ANGGOTA_PENGUJI.text,
//           imageUrl: ANGGOTA_PENGUJI_URL || localNilaiData.ANGGOTA_PENGUJI.imageUrl,
//         },
//       };

//       // Save to Firestore
//       await setDoc(doc(db, "nilaiSempro", item.id), updatedNilaiData);
//       alert("Nilai dan ttd telah disimpan.");
//       handleSaveNilai(item.id);
//     } catch (error) {
//       console.error("Error saving revisi with image: ", error);
//       alert("Terjadi kesalahan saat menyimpan revisi.");
//     }
//   };

//     // Save revisions including images
//     // const handleSaveRevisiWithImage2 = async () => {
//     //   try {
//     //     // Upload each image and retrieve its URL
//     //     const PEBIMBING_URL = await uploadImage("PEBIMBING");
//     //     const KETUA_PENGUJI_URL = await uploadImage("KETUA_PENGUJI");
//     //     const ANGGOTA_PENGUJI_URL = await uploadImage("ANGGOTA_PENGUJI");
  
//     //     // Log URLs to ensure they are valid
//     //     console.log("PEBIMBING_URL:", PEBIMBING_URL);
//     //     console.log("KETUA_PENGUJI_URL:", KETUA_PENGUJI_URL);
//     //     console.log("ANGGOTA_PENGUJI_URL:", ANGGOTA_PENGUJI_URL);
  
//     //     // Prepare data to save to Firestore
//     //     const updatedRevisiData = {
//     //       ...revisiData,
//     //       PEBIMBING: {
//     //         text: revisiData[item.id]?.PEBIMBING || "",
//     //         imageUrl: PEBIMBING_URL || "",
//     //       },
//     //       KETUA_PENGUJI: {
//     //         text: revisiData[item.id]?.KETUA_PENGUJI || "",
//     //         imageUrl: KETUA_PENGUJI_URL || "",
//     //       },
//     //       ANGGOTA_PENGUJI: {
//     //         text: revisiData[item.id]?.ANGGOTA_PENGUJI || "",
//     //         imageUrl: ANGGOTA_PENGUJI_URL || "",
//     //       },
//     //     };
  
//     //     // Log updatedRevisiData to verify structure before saving
//     //     console.log('Updated revisi data:', updatedRevisiData);
  
//     //     // Save to Firestore
//     //     await setDoc(doc(db, "revisiMahasiswaSempro", item.id), updatedRevisiData);
//     //     alert("Revisi dan gambar telah disimpan.");
//     //     handleSaveRevisi(item.id);
//     //   } catch (error) {
//     //     console.error("Error saving revisi with image: ", error);
//     //     alert("Terjadi kesalahan saat menyimpan revisi.");
//     //   }
//     // };


//     const handleSaveNilaiWithImageAndMerge = async () => {
//       try {
//         // Upload each image and retrieve its URL
//         const PEBIMBING_URL = await uploadImage("PEBIMBING");
//         const KETUA_PENGUJI_URL = await uploadImage("KETUA_PENGUJI");
//         const ANGGOTA_PENGUJI_URL = await uploadImage("ANGGOTA_PENGUJI");
      
//         // Log URLs to ensure they are valid
//         console.log("PEBIMBING_URL:", PEBIMBING_URL);
//         console.log("KETUA_PENGUJI_URL:", KETUA_PENGUJI_URL);
//         console.log("ANGGOTA_PENGUJI_URL:", ANGGOTA_PENGUJI_URL);
      
//         // Prepare the updated revisi data with images
//         const updatedNilaiData = {
//           nilai: {
//             PEBIMBING: {
//               text: nilaiData[item.id]?.PEBIMBING || localNilaiData.PEBIMBING.text,
//               imageUrl: PEBIMBING_URL || localNilaiData.PEBIMBING.imageUrl,
//             },
//             KETUA_PENGUJI: {
//               text: nilaiData[item.id]?.KETUA_PENGUJI || localNilaiData.KETUA_PENGUJI.text,
//               imageUrl: KETUA_PENGUJI_URL || localNilaiData.KETUA_PENGUJI.imageUrl,
//             },
//             ANGGOTA_PENGUJI: {
//               text: nilaiData[item.id]?.ANGGOTA_PENGUJI || localNilaiData.ANGGOTA_PENGUJI.text,
//               imageUrl: ANGGOTA_PENGUJI_URL || localNilaiData.ANGGOTA_PENGUJI.imageUrl,
//             },
//           },
//         };
    
//         // Fetch existing data from both collections (revisiMahasiswaSempro and jadwalPenguji2)
//         const revisiDocRef = doc(db, "nilaiMahasiswaSempro", item.id);
//         const jadwalDocRef = doc(db, "jadwalPenguji2", item.id);
        
//         const revisiDoc = await getDoc(revisiDocRef);
//         const jadwalDoc = await getDoc(jadwalDocRef);
      
//         let finalData = updatedNilaiData; // Start with updatedRevisiData as the base
      
//         // If both documents exist, merge them
//         if (revisiDoc.exists() && jadwalDoc.exists()) {
//           const revisiData = revisiDoc.data();
//           const jadwalData = jadwalDoc.data();
      
//           // Merge both data, keeping the latest data for overlapping fields
//           finalData = {
//             ...jadwalData, // Merge jadwal data
//             ...revisiData, // Override with revisi data if it exists
//             revisi: {
//               ...jadwalData.revisi, // If revisi exists in jadwal, keep it
//               ...finalData.revisi,  // Override with the updatedRevisiData
//             },
//           };
//         } else if (jadwalDoc.exists()) {
//           // If only the jadwalPenguji2 document exists, use it as the base
//           finalData = {
//             ...finalData,
//             ...jadwalDoc.data(),
//           };
//         } else if (revisiDoc.exists()) {
//           // If only the revisiMahasiswaSempro document exists, use it as the base
//           finalData = {
//             ...finalData,
//             ...revisiDoc.data(),
//           };
//         }
    
//         // Log the final merged data before saving
//         console.log('Final merged data:', finalData);
      
//         // Save to Firestore
//         await setDoc(doc(db, "nilaiMahasiswaSempro", item.id), finalData);
      
//         alert("Nilai dan ttd telah disimpan.");
//         handleSaveNilai(item.id);
//       } catch (error) {
//         console.error("Error saving revisi with image: ", error);
//         alert("Terjadi kesalahan saat menyimpan revisi.");
//       }
//     };
    
    
//   return (
//     <div style={{ marginTop: "10px", padding: "50px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
//       <h3>Nilai Jadwal Penguji</h3>
//       <p>Berikan nilai pada jadwal penguji ini jika diperlukan.</p>
//       <div>
//         <h3>PEBIMBING</h3>
//         <textarea
//           rows="4"
//           style={{ width: "100%", padding: "10px", borderRadius: "4px" }}
//           placeholder="Masukkan nilai..."
//           value={localNilaiData.PEBIMBING.text}
//           onChange={(e) =>
//             setLocalNilaiData((prev) => ({
//               ...prev,
//               PEBIMBING: { ...prev.PEBIMBING, text: e.target.value },
//             }))
//           }
//         />
//         <br />
//         <input
//           type="file"
//           onChange={(e) => handleImageChange("PEBIMBING", e)}
//           style={{ marginTop: "10px" }}
//         />
//         {imageUrls.PEBIMBING && (
//           <div>
//             <img
//               src={imageUrls.PEBIMBING}
//               alt="PEBIMBING"
//               style={{ width: "100px", marginTop: "10px" }}
//             />
//           </div>
//         )}
//         <br />

//         <h3>KETUA PENGUJI</h3>
//         <textarea
//           rows="4"
//           style={{ width: "100%", padding: "10px", borderRadius: "4px" }}
//           placeholder="Masukkan nilai..."
//           value={localNilaiData.KETUA_PENGUJI.text}
//           onChange={(e) =>
//             setLocalNilaiData((prev) => ({
//               ...prev,
//               KETUA_PENGUJI: { ...prev.KETUA_PENGUJI, text: e.target.value },
//             }))
//           }
//         />
//         <br />
//         <input
//           type="file"
//           onChange={(e) => handleImageChange("KETUA_PENGUJI", e)}
//           style={{ marginTop: "10px" }}
//         />
//         {imageUrls.KETUA_PENGUJI && (
//           <div>
//             <img
//               src={imageUrls.KETUA_PENGUJI}
//               alt="KETUA PENGUJI"
//               style={{ width: "100px", marginTop: "10px" }}
//             />
//           </div>
//         )}
//         <br />

//         <h3>ANGGOTA PENGUJI</h3>
//         <textarea
//           rows="4"
//           style={{ width: "100%", padding: "10px", borderRadius: "4px" }}
//           placeholder="Masukkan nilai..."
//           value={localNilaiData.ANGGOTA_PENGUJI.text}
//           onChange={(e) =>
//             setLocalNilaiData((prev) => ({
//               ...prev,
//               ANGGOTA_PENGUJI: { ...prev.ANGGOTA_PENGUJI, text: e.target.value },
//             }))
//           }
//         />
//         <br />
//         <input
//           type="file"
//           onChange={(e) => handleImageChange("ANGGOTA_PENGUJI", e)}
//           style={{ marginTop: "10px" }}
//         />
//         {imageUrls.ANGGOTA_PENGUJI && (
//           <div>
//             <img
//               src={imageUrls.ANGGOTA_PENGUJI}
//               alt="ANGGOTA PENGUJI"
//               style={{ width: "100px", marginTop: "10px" }}
//             />
//           </div>
//         )}
//         <br />

//         <button
//           onClick={handleSaveNilaiWithImage}
//           style={{
//             backgroundColor: "#4CAF50",
//             color: "white",
//             border: "none",
//             padding: "10px 20px",
//             cursor: "pointer",
//             marginTop: "10px",
//           }}
//         >
//           Simpan Nilai
//         </button>

//         {/* Button to Save Revisi Mahasiswa */}
//         <button
//           onClick={handleSaveNilaiWithImageAndMerge}
//           style={{
//             backgroundColor: "#008CBA",
//             color: "white",
//             border: "none",
//             padding: "10px 20px",
//             cursor: "pointer",
//             marginTop: "10px",
//             marginRight: "10px",
//           }}
//         >
//           Simpan Nilai Mahasiswa
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NilaiForm;

//update tgl 23 desember 10.00 2024
// "use client";
// import React, { useState, useEffect } from "react";
// import { storage, db } from "../../firebase"; // Import Firebase Storage dan Firestore
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { doc, getDoc, setDoc } from "firebase/firestore";

// const NilaiForm = ({ item, nilaiData, handleNilaiChange, handleSaveNilai }) => {
//   const [imageFiles, setImageFiles] = useState({
//     PEBIMBING: null,
//     KETUA_PENGUJI: null,
//     ANGGOTA_PENGUJI: null,
//   });
//   const [imageUrls, setImageUrls] = useState({
//     PEBIMBING: "",
//     KETUA_PENGUJI: "",
//     ANGGOTA_PENGUJI: "",
//   });
//   const [localNilaiData, setLocalNilaiData] = useState({
//     PEBIMBING: { text: "", imageUrl: "" },
//     KETUA_PENGUJI: { text: "", imageUrl: "" },
//     ANGGOTA_PENGUJI: { text: "", imageUrl: "" },
//   });

//   // Load existing revisi data from Firestore
//   useEffect(() => {
//     const loadNilaiData = async () => {
//       try {
//         const docRef = doc(db, "nilaiSempro", item.id);
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//           const data = docSnap.data();
//           setLocalNilaiData({
//             PEBIMBING: data.PEBIMBING || { text: "", imageUrl: "" },
//             KETUA_PENGUJI: data.KETUA_PENGUJI || { text: "", imageUrl: "" },
//             ANGGOTA_PENGUJI: data.ANGGOTA_PENGUJI || { text: "", imageUrl: "" },
//           });
//           setImageUrls({
//             PEBIMBING: data.PEBIMBING?.imageUrl || "",
//             KETUA_PENGUJI: data.KETUA_PENGUJI?.imageUrl || "",
//             ANGGOTA_PENGUJI: data.ANGGOTA_PENGUJI?.imageUrl || "",
//           });
//         }
//       } catch (error) {
//         console.error("Error loading revisi data: ", error);
//       }
//     };

//     loadNilaiData();
//   }, [item.id]);

//   // Handle image file change
//   const handleImageChange = (role, event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setImageFiles((prev) => ({ ...prev, [role]: file }));
//     }
//   };

//   // Upload image to Firebase Storage and get the URL
//   const uploadImage = (role) => {
//     const file = imageFiles[role];
//     if (!file) return null;

//     const storageRef = ref(storage, `nilaiImages/${item.id}_${role}`);
//     const uploadTask = uploadBytesResumable(storageRef, file);

//     return new Promise((resolve, reject) => {
//       uploadTask.on(
//         "state_changed",
//         null,
//         (error) => reject(error),
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then((url) => {
//             setImageUrls((prev) => ({ ...prev, [role]: url }));
//             resolve(url);
//           });
//         }
//       );
//     });
//   };

//   // Save revisions including images
//   const handleSaveNilaiWithImage = async () => {
//     try {
//       // Upload each image and retrieve its URL
//       const PEBIMBING_URL = await uploadImage("PEBIMBING");
//       const KETUA_PENGUJI_URL = await uploadImage("KETUA_PENGUJI");
//       const ANGGOTA_PENGUJI_URL = await uploadImage("ANGGOTA_PENGUJI");

//       // Prepare data to save to Firestore
//       const updatedNilaiData = {
//         PEBIMBING: {
//           text: localNilaiData.PEBIMBING.text,
//           imageUrl: PEBIMBING_URL || localNilaiData.PEBIMBING.imageUrl,
//         },
//         KETUA_PENGUJI: {
//           text: localNilaiData.KETUA_PENGUJI.text,
//           imageUrl: KETUA_PENGUJI_URL || localNilaiData.KETUA_PENGUJI.imageUrl,
//         },
//         ANGGOTA_PENGUJI: {
//           text: localNilaiData.ANGGOTA_PENGUJI.text,
//           imageUrl: ANGGOTA_PENGUJI_URL || localNilaiData.ANGGOTA_PENGUJI.imageUrl,
//         },
//       };

//       // Save to Firestore
//       await setDoc(doc(db, "nilaiSempro", item.id), updatedNilaiData);
//       alert("Nilai dan ttd telah disimpan.");
//       handleSaveNilai(item.id);
//     } catch (error) {
//       console.error("Error saving revisi with image: ", error);
//       alert("Terjadi kesalahan saat menyimpan revisi.");
//     }
//   };

//   const handleSaveNilaiWithImageAndMerge = async () => {
//     try {
//       // Upload each image and retrieve its URL
//       const PEBIMBING_URL = await uploadImage("PEBIMBING");
//       const KETUA_PENGUJI_URL = await uploadImage("KETUA_PENGUJI");
//       const ANGGOTA_PENGUJI_URL = await uploadImage("ANGGOTA_PENGUJI");
      
//       // Log URLs to ensure they are valid
//       console.log("PEBIMBING_URL:", PEBIMBING_URL);
//       console.log("KETUA_PENGUJI_URL:", KETUA_PENGUJI_URL);
//       console.log("ANGGOTA_PENGUJI_URL:", ANGGOTA_PENGUJI_URL);
      
//       // Prepare the updated revisi data with images
//       const updatedNilaiData = {
//         nilai: {
//           PEBIMBING: {
//             text: nilaiData[item.id]?.PEBIMBING || localNilaiData.PEBIMBING.text,
//             imageUrl: PEBIMBING_URL || localNilaiData.PEBIMBING.imageUrl,
//           },
//           KETUA_PENGUJI: {
//             text: nilaiData[item.id]?.KETUA_PENGUJI || localNilaiData.KETUA_PENGUJI.text,
//             imageUrl: KETUA_PENGUJI_URL || localNilaiData.KETUA_PENGUJI.imageUrl,
//           },
//           ANGGOTA_PENGUJI: {
//             text: nilaiData[item.id]?.ANGGOTA_PENGUJI || localNilaiData.ANGGOTA_PENGUJI.text,
//             imageUrl: ANGGOTA_PENGUJI_URL || localNilaiData.ANGGOTA_PENGUJI.imageUrl,
//           },
//         },
//       };
  
//       // Fetch existing data from both collections (revisiMahasiswaSempro and jadwalPenguji2)
//       const revisiDocRef = doc(db, "nilaiMahasiswaSempro", item.id);
//       const jadwalDocRef = doc(db, "jadwalPenguji2", item.id);
      
//       const revisiDoc = await getDoc(revisiDocRef);
//       const jadwalDoc = await getDoc(jadwalDocRef);
    
//       let finalData = updatedNilaiData; // Start with updatedNilaiData as the base
    
//       // If both documents exist, merge them
//       if (revisiDoc.exists() && jadwalDoc.exists()) {
//         const revisiData = revisiDoc.data();
//         const jadwalData = jadwalDoc.data();
    
//         // Merge both data, keeping the latest data for overlapping fields
//         finalData = {
//           ...jadwalData, // Merge jadwal data
//           ...revisiData, // Override with revisi data if it exists
//           revisi: {
//             ...jadwalData.revisi, // If revisi exists in jadwal, keep it
//             ...finalData.revisi,  // Override with the updatedRevisiData
//           },
//         };
//       } else if (jadwalDoc.exists()) {
//         // If only the jadwalPenguji2 document exists, use it as the base
//         finalData = {
//           ...finalData,
//           ...jadwalDoc.data(),
//         };
//       } else if (revisiDoc.exists()) {
//         // If only the revisiMahasiswaSempro document exists, use it as the base
//         finalData = {
//           ...finalData,
//           ...revisiDoc.data(),
//         };
//       }
  
//       // Log the final merged data before saving
//       console.log('Final merged data:', finalData);
    
//       // Save to Firestore
//       await setDoc(doc(db, "nilaiMahasiswaSempro", item.id), finalData);
    
//       alert("Nilai dan ttd telah disimpan.");
//       handleSaveNilai(item.id);
//     } catch (error) {
//       console.error("Error saving revisi with image: ", error);
//       alert("Terjadi kesalahan saat menyimpan revisi.");
//     }
//   };

//   return (
//     <div style={{ marginTop: "10px", padding: "50px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
//       <h3>Nilai Jadwal Penguji</h3>
//       <p>Berikan nilai pada jadwal penguji ini jika diperlukan.</p>
//       <div>
//         <h3>PEBIMBING</h3>
//         <textarea
//           rows="4"
//           style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
//           value={localNilaiData.PEBIMBING.text}
//           onChange={(e) => setLocalNilaiData((prev) => ({ ...prev, PEBIMBING: { ...prev.PEBIMBING, text: e.target.value } }))}
//         />
//         <input type="file" onChange={(e) => handleImageChange("PEBIMBING", e)} />
//         {imageUrls.PEBIMBING && <img src={imageUrls.PEBIMBING} alt="PEBIMBING" style={{ width: "100px", height: "100px" }} />}
//       </div>

//       <div>
//         <h3>KETUA PENGUJI</h3>
//         <textarea
//           rows="4"
//           style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
//           value={localNilaiData.KETUA_PENGUJI.text}
//           onChange={(e) => setLocalNilaiData((prev) => ({ ...prev, KETUA_PENGUJI: { ...prev.KETUA_PENGUJI, text: e.target.value } }))}
//         />
//         <input type="file" onChange={(e) => handleImageChange("KETUA_PENGUJI", e)} />
//         {imageUrls.KETUA_PENGUJI && <img src={imageUrls.KETUA_PENGUJI} alt="KETUA_PENGUJI" style={{ width: "100px", height: "100px" }} />}
//       </div>

//       <div>
//         <h3>ANGGOTA PENGUJI</h3>
//         <textarea
//           rows="4"
//           style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
//           value={localNilaiData.ANGGOTA_PENGUJI.text}
//           onChange={(e) => setLocalNilaiData((prev) => ({ ...prev, ANGGOTA_PENGUJI: { ...prev.ANGGOTA_PENGUJI, text: e.target.value } }))}
//         />
//         <input type="file" onChange={(e) => handleImageChange("ANGGOTA_PENGUJI", e)} />
//         {imageUrls.ANGGOTA_PENGUJI && <img src={imageUrls.ANGGOTA_PENGUJI} alt="ANGGOTA_PENGUJI" style={{ width: "100px", height: "100px" }} />}
//       </div>

//       <button
//         onClick={handleSaveNilaiWithImageAndMerge}
//         style={{ padding: "10px 20px", marginTop: "10px", backgroundColor: "#007BFF", color: "white", border: "none", borderRadius: "5px" }}
//       >
//         Save Nilai & TTD
//       </button>
//     </div>
//   );
// };

// export default NilaiForm;



// "use client";
// import React, { useState, useEffect } from "react";
// import { storage, db } from "../../firebase"; // Import Firebase Storage dan Firestore
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { doc, getDoc, setDoc } from "firebase/firestore";

// const NilaiForm = ({ item, nilaiData, handleNilaiChange, handleSaveNilai }) => {
//   const [imageFiles, setImageFiles] = useState({
//     PEBIMBING: null,
//     KETUA_PENGUJI: null,
//     ANGGOTA_PENGUJI: null,
//   });
//   const [imageUrls, setImageUrls] = useState({
//     PEBIMBING: "",
//     KETUA_PENGUJI: "",
//     ANGGOTA_PENGUJI: "",
//   });
//   const [localNilaiData, setLocalNilaiData] = useState({
//     PEBIMBING: { text: "", imageUrl: "" },
//     KETUA_PENGUJI: { text: "", imageUrl: "" },
//     ANGGOTA_PENGUJI: { text: "", imageUrl: "" },
//   });

//   // Load existing revisi data from Firestore
//   useEffect(() => {
//     const loadNilaiData = async () => {
//       try {
//         const docRef = doc(db, "nilaiSempro", item.id);
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//           const data = docSnap.data();
//           setLocalNilaiData({
//             PEBIMBING: data.PEBIMBING || { text: "", imageUrl: "" },
//             KETUA_PENGUJI: data.KETUA_PENGUJI || { text: "", imageUrl: "" },
//             ANGGOTA_PENGUJI: data.ANGGOTA_PENGUJI || { text: "", imageUrl: "" },
//           });
//           setImageUrls({
//             PEBIMBING: data.PEBIMBING?.imageUrl || "",
//             KETUA_PENGUJI: data.KETUA_PENGUJI?.imageUrl || "",
//             ANGGOTA_PENGUJI: data.ANGGOTA_PENGUJI?.imageUrl || "",
//           });
//         }
//       } catch (error) {
//         console.error("Error loading revisi data: ", error);
//       }
//     };

//     loadNilaiData();
//   }, [item.id]);

//   // Handle image file change
//   const handleImageChange = (role, event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setImageFiles((prev) => ({ ...prev, [role]: file }));
//     }
//   };

//   // Upload image to Firebase Storage and get the URL
//   const uploadImage = (role) => {
//     const file = imageFiles[role];
//     if (!file) return null;

//     const storageRef = ref(storage, `nilaiImages/${item.id}_${role}`);
//     const uploadTask = uploadBytesResumable(storageRef, file);

//     return new Promise((resolve, reject) => {
//       uploadTask.on(
//         "state_changed",
//         null,
//         (error) => reject(error),
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then((url) => {
//             setImageUrls((prev) => ({ ...prev, [role]: url }));
//             resolve(url);
//           });
//         }
//       );
//     });
//   };

//   // Save revisions including images
//   const handleSaveNilaiWithImageAndMerge = async () => {
//     try {
//       // Upload each image and retrieve its URL
//       const PEBIMBING_URL = await uploadImage("PEBIMBING");
//       const KETUA_PENGUJI_URL = await uploadImage("KETUA_PENGUJI");
//       const ANGGOTA_PENGUJI_URL = await uploadImage("ANGGOTA_PENGUJI");
      
//       // Prepare the updated revisi data with images
//       const updatedNilaiData = {
//         revisi: {
//           PEBIMBING: {
//             text: localNilaiData.PEBIMBING.text,
//             imageUrl: PEBIMBING_URL || localNilaiData.PEBIMBING.imageUrl,
//           },
//           KETUA_PENGUJI: {
//             text: localNilaiData.KETUA_PENGUJI.text,
//             imageUrl: KETUA_PENGUJI_URL || localNilaiData.KETUA_PENGUJI.imageUrl,
//           },
//           ANGGOTA_PENGUJI: {
//             text: localNilaiData.ANGGOTA_PENGUJI.text,
//             imageUrl: ANGGOTA_PENGUJI_URL || localNilaiData.ANGGOTA_PENGUJI.imageUrl,
//           },
//         },
//       };

//       // Fetch existing data from both collections (revisiMahasiswaSempro and jadwalPenguji2)
//       const revisiDocRef = doc(db, "nilaiMahasiswaSempro", item.id);
//       const jadwalDocRef = doc(db, "jadwalPenguji2", item.id);
      
//       const revisiDoc = await getDoc(revisiDocRef);
//       const jadwalDoc = await getDoc(jadwalDocRef);
    
//       let finalData = updatedNilaiData; // Start with updatedNilaiData as the base
    
//       // If both documents exist, merge them
//       if (revisiDoc.exists() && jadwalDoc.exists()) {
//         const revisiData = revisiDoc.data();
//         const jadwalData = jadwalDoc.data();
    
//         // Merge both data, keeping the latest data for overlapping fields
//         finalData = {
//           ...jadwalData, // Merge jadwal data
//           ...revisiData, // Override with revisi data if it exists
//           revisi: {
//             ...jadwalData.revisi, // If revisi exists in jadwal, keep it
//             ...finalData.revisi,  // Override with the updatedRevisiData
//           },
//         };
//       } else if (jadwalDoc.exists()) {
//         // If only the jadwalPenguji2 document exists, use it as the base
//         finalData = {
//           ...finalData,
//           ...jadwalDoc.data(),
//         };
//       } else if (revisiDoc.exists()) {
//         // If only the revisiMahasiswaSempro document exists, use it as the base
//         finalData = {
//           ...finalData,
//           ...revisiDoc.data(),
//         };
//       }
  
//       // Log the final merged data before saving
//       console.log('Final merged data:', finalData);
    
//       // Save to Firestore
//       await setDoc(doc(db, "nilaiMahasiswaSempro", item.id), finalData);
    
//       alert("Nilai dan ttd telah disimpan.");
//       handleSaveNilai(item.id);
//     } catch (error) {
//       console.error("Error saving revisi with image: ", error);
//       alert("Terjadi kesalahan saat menyimpan revisi.");
//     }
//   };

//   return (
//     <div style={{ marginTop: "10px", padding: "50px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
//       <h3>Nilai Jadwal Penguji</h3>
//       <p>Berikan nilai pada jadwal penguji ini jika diperlukan.</p>
//       <div>
//         <h3>PEBIMBING</h3>
//         <textarea
//           rows="4"
//           style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
//           value={localNilaiData.PEBIMBING.text}
//           onChange={(e) => setLocalNilaiData((prev) => ({ ...prev, PEBIMBING: { ...prev.PEBIMBING, text: e.target.value } }))}
//         />
//         <input type="file" onChange={(e) => handleImageChange("PEBIMBING", e)} />
//         {imageUrls.PEBIMBING && <img src={imageUrls.PEBIMBING} alt="PEBIMBING" style={{ width: "100px", height: "100px" }} />}
//       </div>

//       <div>
//         <h3>KETUA PENGUJI</h3>
//         <textarea
//           rows="4"
//           style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
//           value={localNilaiData.KETUA_PENGUJI.text}
//           onChange={(e) => setLocalNilaiData((prev) => ({ ...prev, KETUA_PENGUJI: { ...prev.KETUA_PENGUJI, text: e.target.value } }))}
//         />
//         <input type="file" onChange={(e) => handleImageChange("KETUA_PENGUJI", e)} />
//         {imageUrls.KETUA_PENGUJI && <img src={imageUrls.KETUA_PENGUJI} alt="KETUA_PENGUJI" style={{ width: "100px", height: "100px" }} />}
//       </div>

//       <div>
//         <h3>ANGGOTA PENGUJI</h3>
//         <textarea
//           rows="4"
//           style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
//           value={localNilaiData.ANGGOTA_PENGUJI.text}
//           onChange={(e) => setLocalNilaiData((prev) => ({ ...prev, ANGGOTA_PENGUJI: { ...prev.ANGGOTA_PENGUJI, text: e.target.value } }))}
//         />
//         <input type="file" onChange={(e) => handleImageChange("ANGGOTA_PENGUJI", e)} />
//         {imageUrls.ANGGOTA_PENGUJI && <img src={imageUrls.ANGGOTA_PENGUJI} alt="ANGGOTA_PENGUJI" style={{ width: "100px", height: "100px" }} />}
//       </div>

//       <button
//         onClick={handleSaveNilaiWithImageAndMerge}
//         style={{ padding: "10px 20px", marginTop: "10px", backgroundColor: "#007BFF", color: "white", border: "none", borderRadius: "5px" }}
//       >
//         Save Nilai & TTD
//       </button>
//     </div>
//   );
// };

// export default NilaiForm;


// "use client";
// import React, { useState, useEffect } from "react";
// import { storage, db } from "../../firebase"; // Import Firebase Storage and Firestore
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { doc, getDoc, setDoc } from "firebase/firestore";

// const NilaiForm = ({ item, nilaiData, handleNilaiChange, handleSaveNilai }) => {
//   const [imageFiles, setImageFiles] = useState({
//     PEBIMBING: null,
//     KETUA_PENGUJI: null,
//     ANGGOTA_PENGUJI: null,
//   });
//   const [imageUrls, setImageUrls] = useState({
//     PEBIMBING: "",
//     KETUA_PENGUJI: "",
//     ANGGOTA_PENGUJI: "",
//   });
//   const [localNilaiData, setLocalNilaiData] = useState({
//     PEBIMBING: { text: "", imageUrl: "" },
//     KETUA_PENGUJI: { text: "", imageUrl: "" },
//     ANGGOTA_PENGUJI: { text: "", imageUrl: "" },
//   });

//   // Load existing revisi data from Firestore and persist the state even after refresh
//   useEffect(() => {
//     const loadNilaiData = async () => {
//       try {
//         const docRef = doc(db, "nilaiSempro", item.id);
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//           const data = docSnap.data();
//           setLocalNilaiData({
//             PEBIMBING: data.PEBIMBING || { text: "", imageUrl: "" },
//             KETUA_PENGUJI: data.KETUA_PENGUJI || { text: "", imageUrl: "" },
//             ANGGOTA_PENGUJI: data.ANGGOTA_PENGUJI || { text: "", imageUrl: "" },
//           });
//           setImageUrls({
//             PEBIMBING: data.PEBIMBING?.imageUrl || "",
//             KETUA_PENGUJI: data.KETUA_PENGUJI?.imageUrl || "",
//             ANGGOTA_PENGUJI: data.ANGGOTA_PENGUJI?.imageUrl || "",
//           });
//         }
//       } catch (error) {
//         console.error("Error loading revisi data: ", error);
//       }
//     };

//     loadNilaiData();
//   }, [item.id]);

//   // Handle image file change
//   const handleImageChange = (role, event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setImageFiles((prev) => ({ ...prev, [role]: file }));
//     }
//   };

//   // Upload image to Firebase Storage and get the URL
//   const uploadImage = (role) => {
//     const file = imageFiles[role];
//     if (!file) return null;

//     const storageRef = ref(storage, `nilaiImages/${item.id}_${role}`);
//     const uploadTask = uploadBytesResumable(storageRef, file);

//     return new Promise((resolve, reject) => {
//       uploadTask.on(
//         "state_changed",
//         null,
//         (error) => reject(error),
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then((url) => {
//             setImageUrls((prev) => ({ ...prev, [role]: url }));
//             resolve(url);
//           });
//         }
//       );
//     });
//   };

//   // Save revisions including images
//   const handleSaveNilaiWithImageAndMerge = async () => {
//     try {
//       // Upload each image and retrieve its URL
//       const PEBIMBING_URL = await uploadImage("PEBIMBING");
//       const KETUA_PENGUJI_URL = await uploadImage("KETUA_PENGUJI");
//       const ANGGOTA_PENGUJI_URL = await uploadImage("ANGGOTA_PENGUJI");
      
//       // Prepare the updated revisi data with images
//       const updatedNilaiData = {
//         revisi: {
//           PEBIMBING: {
//             text: localNilaiData.PEBIMBING.text,
//             imageUrl: PEBIMBING_URL || localNilaiData.PEBIMBING.imageUrl,
//           },
//           KETUA_PENGUJI: {
//             text: localNilaiData.KETUA_PENGUJI.text,
//             imageUrl: KETUA_PENGUJI_URL || localNilaiData.KETUA_PENGUJI.imageUrl,
//           },
//           ANGGOTA_PENGUJI: {
//             text: localNilaiData.ANGGOTA_PENGUJI.text,
//             imageUrl: ANGGOTA_PENGUJI_URL || localNilaiData.ANGGOTA_PENGUJI.imageUrl,
//           },
//         },
//       };

//       // Fetch existing data from both collections (revisiMahasiswaSempro and jadwalPenguji2)
//       const revisiDocRef = doc(db, "nilaiMahasiswaSempro", item.id);
//       const jadwalDocRef = doc(db, "jadwalPenguji2", item.id);
      
//       const revisiDoc = await getDoc(revisiDocRef);
//       const jadwalDoc = await getDoc(jadwalDocRef);
    
//       let finalData = updatedNilaiData; // Start with updatedNilaiData as the base
    
//       // If both documents exist, merge them
//       if (revisiDoc.exists() && jadwalDoc.exists()) {
//         const revisiData = revisiDoc.data();
//         const jadwalData = jadwalDoc.data();
    
//         // Merge both data, keeping the latest data for overlapping fields
//         finalData = {
//           ...jadwalData, // Merge jadwal data
//           ...revisiData, // Override with revisi data if it exists
//           revisi: {
//             ...jadwalData.revisi, // If revisi exists in jadwal, keep it
//             ...finalData.revisi,  // Override with the updatedRevisiData
//           },
//         };
//       } else if (jadwalDoc.exists()) {
//         // If only the jadwalPenguji2 document exists, use it as the base
//         finalData = {
//           ...finalData,
//           ...jadwalDoc.data(),
//         };
//       } else if (revisiDoc.exists()) {
//         // If only the revisiMahasiswaSempro document exists, use it as the base
//         finalData = {
//           ...finalData,
//           ...revisiDoc.data(),
//         };
//       }
  
//       // Log the final merged data before saving
//       console.log('Final merged data:', finalData);
    
//       // Save to Firestore
//       await setDoc(doc(db, "nilaiMahasiswaSempro", item.id), finalData);
    
//       alert("Nilai dan ttd telah disimpan.");
//       handleSaveNilai(item.id);
//     } catch (error) {
//       console.error("Error saving revisi with image: ", error);
//       alert("Terjadi kesalahan saat menyimpan revisi.");
//     }
//   };

//   return (
//     <div style={{ marginTop: "10px", padding: "50px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
//       <h3>Nilai Jadwal Penguji</h3>
//       <p>Berikan nilai pada jadwal penguji ini jika diperlukan.</p>
//       <div>
//         <h3>PEBIMBING</h3>
//         <textarea
//           rows="4"
//           style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
//           value={localNilaiData.PEBIMBING.text}
//           onChange={(e) => setLocalNilaiData((prev) => ({ ...prev, PEBIMBING: { ...prev.PEBIMBING, text: e.target.value } }))}
//         />
//         <input type="file" onChange={(e) => handleImageChange("PEBIMBING", e)} />
//         {imageUrls.PEBIMBING && <img src={imageUrls.PEBIMBING} alt="PEBIMBING" style={{ width: "100px", height: "100px" }} />}
//       </div>

//       <div>
//         <h3>KETUA PENGUJI</h3>
//         <textarea
//           rows="4"
//           style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
//           value={localNilaiData.KETUA_PENGUJI.text}
//           onChange={(e) => setLocalNilaiData((prev) => ({ ...prev, KETUA_PENGUJI: { ...prev.KETUA_PENGUJI, text: e.target.value } }))}
//         />
//         <input type="file" onChange={(e) => handleImageChange("KETUA_PENGUJI", e)} />
//         {imageUrls.KETUA_PENGUJI && <img src={imageUrls.KETUA_PENGUJI} alt="KETUA_PENGUJI" style={{ width: "100px", height: "100px" }} />}
//       </div>

//       <div>
//         <h3>ANGGOTA PENGUJI</h3>
//         <textarea
//           rows="4"
//           style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
//           value={localNilaiData.ANGGOTA_PENGUJI.text}
//           onChange={(e) => setLocalNilaiData((prev) => ({ ...prev, ANGGOTA_PENGUJI: { ...prev.ANGGOTA_PENGUJI, text: e.target.value } }))}
//         />
//         <input type="file" onChange={(e) => handleImageChange("ANGGOTA_PENGUJI", e)} />
//         {imageUrls.ANGGOTA_PENGUJI && <img src={imageUrls.ANGGOTA_PENGUJI} alt="ANGGOTA_PENGUJI" style={{ width: "100px", height: "100px" }} />}
//       </div>

//       <button
//         onClick={handleSaveNilaiWithImageAndMerge}
//         style={{ padding: "10px 20px", marginTop: "10px", backgroundColor: "#007BFF", color: "white", border: "none", borderRadius: "5px" }}
//       >
//         Save Nilai & TTD
//       </button>
//     </div>
//   );
// };

// export default NilaiForm;


"use client";
import React, { useState, useEffect } from "react";
import { storage, db } from "../../firebase"; // Import Firebase Storage and Firestore
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, getDoc, setDoc } from "firebase/firestore";

const NilaiForm = ({ item, nilaiData, handleNilaiChange, handleSaveNilai }) => {
  const [imageFiles, setImageFiles] = useState({
    PEBIMBING: null,
    KETUA_PENGUJI: null,
    ANGGOTA_PENGUJI: null,
  });
  const [imageUrls, setImageUrls] = useState({
    PEBIMBING: "",
    KETUA_PENGUJI: "",
    ANGGOTA_PENGUJI: "",
  });
  const [localNilaiData, setLocalNilaiData] = useState({
    PEBIMBING: { text: "", imageUrl: "" },
    KETUA_PENGUJI: { text: "", imageUrl: "" },
    ANGGOTA_PENGUJI: { text: "", imageUrl: "" },
  });
  const [averageNilai, setAverageNilai] = useState(0);
  const [letterGrade, setLetterGrade] = useState("");

  // Load existing revisi data from Firestore and persist the state even after refresh
  useEffect(() => {
    const loadNilaiData = async () => {
      try {
        const docRef = doc(db, "nilaiSempro", item.id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setLocalNilaiData({
            PEBIMBING: data.PEBIMBING || { text: "", imageUrl: "" },
            KETUA_PENGUJI: data.KETUA_PENGUJI || { text: "", imageUrl: "" },
            ANGGOTA_PENGUJI: data.ANGGOTA_PENGUJI || { text: "", imageUrl: "" },
          });
          setImageUrls({
            PEBIMBING: data.PEBIMBING?.imageUrl || "",
            KETUA_PENGUJI: data.KETUA_PENGUJI?.imageUrl || "",
            ANGGOTA_PENGUJI: data.ANGGOTA_PENGUJI?.imageUrl || "",
          });
        }
      } catch (error) {
        console.error("Error loading revisi data: ", error);
      }
    };

    loadNilaiData();
  }, [item.id]);

  // Handle image file change
  const handleImageChange = (role, event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFiles((prev) => ({ ...prev, [role]: file }));
    }
  };

  // Upload image to Firebase Storage and get the URL
  const uploadImage = (role) => {
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
            setImageUrls((prev) => ({ ...prev, [role]: url }));
            resolve(url);
          });
        }
      );
    });
  };

  // Function to calculate the total score and average score
  const calculateScores = () => {
    const getScoreFromText = (text) => {
      const score = parseFloat(text);
      return isNaN(score) ? 0 : score;
    };

    const PEBIMBING_SCORE = getScoreFromText(localNilaiData.PEBIMBING.text);
    const KETUA_PENGUJI_SCORE = getScoreFromText(localNilaiData.KETUA_PENGUJI.text);
    const ANGGOTA_PENGUJI_SCORE = getScoreFromText(localNilaiData.ANGGOTA_PENGUJI.text);

    const totalScore = PEBIMBING_SCORE + KETUA_PENGUJI_SCORE + ANGGOTA_PENGUJI_SCORE;
    const averageScore = totalScore / 3;

    // Calculate letter grade based on average score
    let grade = "";
    if (averageScore >= 80) {
      grade = "A";
    } else if (averageScore >= 77) {
      grade = "A-";
    } else if (averageScore >= 74) {
      grade = "B+";
    } else if (averageScore >= 68) {
      grade = "B";
    } else if (averageScore >= 65) {
      grade = "B-";
    } else {
      grade = "TIDAK LULUS";
    }

    setAverageNilai(averageScore);
    setLetterGrade(grade);
  };

  const handleSaveNilaiWithImageAndMerge = async () => {
    try {
      // Upload each image and retrieve its URL
      const PEBIMBING_URL = await uploadImage("PEBIMBING");
      const KETUA_PENGUJI_URL = await uploadImage("KETUA_PENGUJI");
      const ANGGOTA_PENGUJI_URL = await uploadImage("ANGGOTA_PENGUJI");
      
      // Prepare the updated revisi data with images
      const updatedNilaiData = {
        revisi: {
          PEBIMBING: {
            text: localNilaiData.PEBIMBING.text,
            imageUrl: PEBIMBING_URL || localNilaiData.PEBIMBING.imageUrl,
          },
          KETUA_PENGUJI: {
            text: localNilaiData.KETUA_PENGUJI.text,
            imageUrl: KETUA_PENGUJI_URL || localNilaiData.KETUA_PENGUJI.imageUrl,
          },
          ANGGOTA_PENGUJI: {
            text: localNilaiData.ANGGOTA_PENGUJI.text,
            imageUrl: ANGGOTA_PENGUJI_URL || localNilaiData.ANGGOTA_PENGUJI.imageUrl,
          },
        },
        totalNilai: averageNilai, // Store the totalNilai based on averageNilai
        letterGrade: letterGrade, // Store the letter grade (A, B, etc.)
      };
  
      // Prepare the full data structure to be saved to Firestore
      const fullData = {
        id: item.id,
        angkatan: "2024", // Example static value
        cabangKampus: "Harapan Indah", // Example static value
        daftarNilaiUrl: "https://example.com/daftarNilai.pdf", // Example file URL
        dosen: "Adi Widianto", // Example static value
        fileTA1Url: "https://example.com/fileTA1.pdf", // Example file URL
        jurusan: "TI", // Example static value
        krsUrl: "https://example.com/krs.pdf", // Example file URL
        nama: "Raden", // Example static value
        noWhatsapp: "089769759759", // Example static value
        pengajuanSidangUrl: "https://example.com/pengajuanSidang.pdf", // Example file URL
        penguji: "Nixon", // Example static value
        penguji1: "Bambang", // Example static value
        penguji2: "Nixon", // Example static value
        rataRata: averageNilai, // Store the calculated average score
        revisi: updatedNilaiData.revisi,
        totalNilai: averageNilai * 3, // Calculate total based on average score
        status: "Data Dikirim Ke Penguji", // Example static value
        statusJadwalSidangSempro: "acc", // Example static value
        tanggalSidang: "2024-12-23", // Example static value
        sksberjalan: "130", // Example static value
        sksditempuh: "120", // Example static value
        role: "mahasiswa", // Example static value
        letterGrade: letterGrade, // Save the letter grade (A, B, etc.)
      };
  
      // Save to Firestore
      await setDoc(doc(db, "nilaiMahasiswaSempro", item.id), fullData);
    
      alert("Nilai dan ttd telah disimpan.");
      handleSaveNilai(item.id);
    } catch (error) {
      console.error("Error saving revisi with image: ", error);
      alert("Terjadi kesalahan saat menyimpan revisi.");
    }
  };
  

  return (
    <div style={{ marginTop: "10px", padding: "50px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
      <h3>Nilai Jadwal Penguji</h3>
      <p>Berikan nilai pada jadwal penguji ini jika diperlukan.</p>
      <div>
        <h3>PEBIMBING</h3>
        <textarea
          rows="4"
          style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
          value={localNilaiData.PEBIMBING.text}
          onChange={(e) => setLocalNilaiData((prev) => ({ ...prev, PEBIMBING: { ...prev.PEBIMBING, text: e.target.value } }))}
        />
        <input type="file" onChange={(e) => handleImageChange("PEBIMBING", e)} />
        {imageUrls.PEBIMBING && <img src={imageUrls.PEBIMBING} alt="PEBIMBING" style={{ width: "100px", height: "100px" }} />}
      </div>

      <div>
        <h3>KETUA PENGUJI</h3>
        <textarea
          rows="4"
          style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
          value={localNilaiData.KETUA_PENGUJI.text}
          onChange={(e) => setLocalNilaiData((prev) => ({ ...prev, KETUA_PENGUJI: { ...prev.KETUA_PENGUJI, text: e.target.value } }))}
        />
        <input type="file" onChange={(e) => handleImageChange("KETUA_PENGUJI", e)} />
        {imageUrls.KETUA_PENGUJI && <img src={imageUrls.KETUA_PENGUJI} alt="KETUA_PENGUJI" style={{ width: "100px", height: "100px" }} />}
      </div>

      <div>
        <h3>ANGGOTA PENGUJI</h3>
        <textarea
          rows="4"
          style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
          value={localNilaiData.ANGGOTA_PENGUJI.text}
          onChange={(e) => setLocalNilaiData((prev) => ({ ...prev, ANGGOTA_PENGUJI: { ...prev.ANGGOTA_PENGUJI, text: e.target.value } }))}
        />
        <input type="file" onChange={(e) => handleImageChange("ANGGOTA_PENGUJI", e)} />
        {imageUrls.ANGGOTA_PENGUJI && <img src={imageUrls.ANGGOTA_PENGUJI} alt="ANGGOTA_PENGUJI" style={{ width: "100px", height: "100px" }} />}
      </div>

      <button onClick={calculateScores}>Hitung Nilai</button>
      <div>
        <h3>Rata-rata Nilai: {averageNilai}</h3>
        <h3>Grade: {letterGrade}</h3>
      </div>

      <button onClick={handleSaveNilaiWithImageAndMerge}>Simpan Nilai</button>
    </div>
  );
};

export default NilaiForm;
