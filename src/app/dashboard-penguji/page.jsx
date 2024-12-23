"use client";
import { useState, useEffect } from "react";
import { auth, db } from "../../firebase"; // Assuming you have initialized Firebase
import { onAuthStateChanged } from "firebase/auth"; // Import the method to check auth state

// import styles from "./dashboard.module.css"; // Import CSS untuk styling
import Navbar from "../navbar/Navbar";
import Link from 'next/link';
import styles from '../page.module.css';
import NavbarPenguji from "../navbarpenguji/page";

export default function DashboardPenguji() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true); // User is signed in
      } else {
        setIsLoggedIn(false); // No user is signed in
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  return (
    <>
      <NavbarPenguji isLoggedIn={isLoggedIn} />
      <div className={styles.container}>
      <div className={styles.header}>
        <h1>Selamat Datang di Penjadwalan Sidang Mahasiswa</h1>
        <p>Atur jadwal sidang Anda dengan mudah, di mana saja.</p>
      </div>

      <div className={styles.buttons}>
        <Link href="/dashboardsempro">
          <button className={styles.btn}>Seminar Proposal</button>
        </Link>
        <Link href="/dashboardskripsi">
          <button className={styles.btnAdmin}>Skripsi</button>
        </Link>
        {/* <Link href="/adminLogin">
          <button className={styles.btnAdmin}>Admin Registrasi</button>
        </Link> */}
      </div>
    </div>
    </>
  );
}
