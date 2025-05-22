/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { parseCookies } from 'nookies';
import styles from './PriceSummaryCard.module.css';

interface PriceSummaryCardProps {
  latestPrice?: number;
  previousPrice?: number;
  firstPrice?: number;
  date?: string;
  commodityName?: string;
}

const PriceSummaryCard: React.FC<PriceSummaryCardProps> = ({
  latestPrice,
  previousPrice,
  firstPrice,
  date,
  commodityName,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const cookies = parseCookies();
    setIsLoggedIn(!!cookies.token); // asumsi login via cookie token
  }, []);

  if (latestPrice == null || firstPrice == null) {
    return (
      <div className={styles.card}>
        <div className={styles.title}>Memuat prediksi...</div>
      </div>
    );
  }

  const changePercent = ((latestPrice - firstPrice) / firstPrice) * 100;
  const roundedChangePercent = Number(changePercent.toFixed(2));

  let indicator = '';
  let indicatorText = '';
  let indicatorClass = '';

  if (roundedChangePercent > 0) {
    indicator = '🔺';
    indicatorText = 'Naik';
    indicatorClass = styles.indicatorRed;
  } else if (roundedChangePercent < 0) {
    indicator = '🔻';
    indicatorText = 'Turun';
    indicatorClass = styles.indicatorGreen;
  } else {
    indicator = '➖';
    indicatorText = 'Stabil';
    indicatorClass = styles.indicatorWhite;
  }

  const handleSavePrediction = () => {
    const prediction = {
      commodityName,
      latestPrice,
      firstPrice,
      date,
      savedAt: new Date().toISOString(),
    };

    const existing = JSON.parse(localStorage.getItem('savedPredictions') || '[]');
    existing.push(prediction);
    localStorage.setItem('savedPredictions', JSON.stringify(existing));
    alert('Prediksi berhasil disimpan!');
  };

  return (
    <div className={styles.card}>
      <div>
        <div className={styles.title}>
          Prediksi Harga {commodityName ?? ''}
        </div>

        <div className={styles.priceContainer}>
          <div className={styles.price}>
            Rp {latestPrice.toLocaleString('id-ID', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}
          </div>
          <div className={`${styles.indicator} ${indicatorClass}`}>
            {indicator}{' '}
            {Math.abs(roundedChangePercent).toLocaleString('id-ID', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}
            % ({indicatorText})
          </div>
        </div>

        <div className={styles.date}>{date ?? ''}</div>

        {isLoggedIn && (
          <button className={styles.saveButton} onClick={handleSavePrediction}>
            Simpan Prediksi
          </button>
        )}
      </div>
    </div>
  );
};

export default PriceSummaryCard;
