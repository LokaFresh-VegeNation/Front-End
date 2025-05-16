// components/Navbar/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/components/Navbar/navbar.module.css';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Pastikan react-icons terpasang

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/" className={styles.logoLink}>
          <div className={styles.logoContent}>
            <Image src="/icons/logo2.png" alt="Logo" width={30} height={30} />
            <span className={styles.logoText}>VegeNation</span>
          </div>
        </Link>
      </div>

      <div className={`${styles.links} ${isOpen ? styles.showMenu : ''}`}>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="#articles">Articles</Link>
        <Link href="#about">About</Link>
      </div>

      <button className={styles.burger} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}
