import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Selamat Datang di Penjadwalan Sidang Mahasiswa</h1>
        <p>Atur jadwal sidang Anda dengan mudah, di mana saja.</p>
      </div>

      <div className={styles.buttons}>
        <Link href="/login">
          <button className={styles.btn}>Login</button>
        </Link>
        <Link href="/register">
          <button className={styles.btnOutline}>Registrasi</button>
        </Link>
        <Link href="/adminLogin">
          <button className={styles.btnAdmin}>Admin Registrasi</button>
        </Link>
      </div>
    </div>
  );
}
