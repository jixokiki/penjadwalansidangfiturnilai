const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.generateNim = functions.firestore
  .document("users/{userId}")
  .onCreate((snap, context) => {
    const data = snap.data();
    const angkatan = data.angkatan;
    const jurusan = data.jurusan === "TI" ? "10" : "11";
    const cabangKampus = data.cabangKampus === "Harapan Indah" ? "02" : data.cabangKampus === "Kebon Jeruk" ? "01" : "03";

    const nim = `${angkatan}${jurusan}${cabangKampus}`;

    return admin.firestore().collection("users").doc(context.params.userId).update({ nim });
  });
