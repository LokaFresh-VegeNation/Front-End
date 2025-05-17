/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
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
  commodityName
}) => {
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
    indicatorClass = styles.indicatorGray;
  }

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
      </div>
    </div>
  );
};

export default PriceSummaryCard;
