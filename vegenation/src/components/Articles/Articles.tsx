import React from 'react';
import Image from 'next/image';
import styles from '@/components/Articles/articles.module.css';

interface Article {
  date: string;
  description: string;
  img_url: string;
  link: string;
  title: string;
}

interface Props {
  articles: Article[];
  index: number;
  onPrev: () => void;
  onNext: () => void;
}

const Articles: React.FC<Props> = ({ articles = [], index = 0, onPrev, onNext }) => {
  const safeIndex = Math.max(0, Math.min(index, articles.length - 1));
  const article = articles[safeIndex];

  if (!article) return null;

  return (
    <div className={styles.articleContainer}>
      {/* Tombol Prev samping (desktop only) */}
      <button onClick={onPrev} className={`${styles.navButton} ${styles.sideButton}`}>←</button>

      {/* Card Artikel */}
      <div className={styles.articleCard}>
        <div style={{ position: 'relative', width: '100%', height: 110, borderRadius: 8, overflow: 'hidden' }}>
          {article.img_url ? (
            <Image
              src={article.img_url}
              alt={article.title || 'Image'}
              layout="fill"
              objectFit="cover"
              unoptimized
            />
          ) : (
            <div style={{ width: '100%', height: '100%', backgroundColor: '#ccc' }} />
          )}
        </div>

        <h4 className={styles.articleTitle} style={{ fontSize: 12, margin: '8px 0 4px', color: '#333' }}>
          {article.title || 'No Title'}
        </h4>

        <p className={styles.articleDescription} style={{ fontSize: 10, color: '#555', margin: '4px 0' }}>
          {article.description || 'No description available.'}
        </p>

        <p style={{ fontSize: 8, color: '#999', margin: '4px 0' }}>{article.date || 'Unknown date'}</p>

        {article.link && (
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.articleLink}
            style={{
              display: 'inline-block',
              marginTop: 6,
              padding: '4px 8px',
              fontSize: 10,
              backgroundColor: '#4CAF50',
              color: 'white',
              borderRadius: 4,
              textDecoration: 'none'
            }}
          >
            Baca selengkapnya
          </a>
        )}
      </div>

      {/* Tombol Next samping (desktop only) */}
      <button onClick={onNext} className={`${styles.navButton} ${styles.sideButton}`}>→</button>

      {/* Tombol Prev + Next bawah (mobile only) */}
      <div className={styles.bottomButtons}>
        <button onClick={onPrev} className={styles.navButton}>←</button>
        <button onClick={onNext} className={styles.navButton}>→</button>
      </div>
    </div>
  );
};

export default Articles;
