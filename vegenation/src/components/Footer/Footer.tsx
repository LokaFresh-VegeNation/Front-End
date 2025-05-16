import styles from '@/components/Footer/footer.module.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <div className={styles.socialIcons}>
          <Image src="/icons/x.png" alt="X" width={20} height={20} />
          <Image src="/icons/instagram.png" alt="Instagram" width={20} height={20} />
          <Image src="/icons/youtube.png" alt="YouTube" width={20} height={20} />
          <Image src="/icons/linkedin.png" alt="LinkedIn" width={20} height={20} />
        </div>
        <div className={styles.logo}>
          <Image src="/icons/logo.png" alt="VegeNation Logo" width={40} height={40} />
        </div>
      </div>

      <div className={styles.links}>
        <div className={styles.column}>
          <h4>Use cases</h4>
          <ul>
            <li>UI design</li>
            <li>UX design</li>
            <li>Wireframing</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Explore</h4>
          <ul>
            <li>Design</li>
            <li>Prototyping</li>
            <li>Development features</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Best practices</li>
            <li>Colors</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
