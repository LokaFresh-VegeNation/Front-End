import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <section className={styles.heroSection}>
          <div className={styles.heroBackground}>
            <Image src="/background.jpg" alt="Sayur"
              fill
              priority
              className={styles.heroImage}
            />
            <div className={styles.overlay}></div>
          </div>

          <div className={styles.heroText}>
            <span className={styles.badge}>Prediksi Harga, Tanam Keputusan yang Lebih Pasti</span>
            <h1 className={styles.title}>Vegenation</h1>
            <p className={styles.description}>
              Vegenation hadir untuk membantu Anda memetakan tren harga komoditas sayuran secara real-time, akurat,
              dan berbasis data, agar bisnis agrikultur Anda makin cerdas dan tahan fluktuasi.
            </p>
            <Link href="/auth/login" className={styles.ctaButton}>
              Dashboard →
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
