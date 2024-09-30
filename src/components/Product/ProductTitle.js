import React from 'react';
import { Ratings } from './Ratings';
import { useTranslation } from 'react-i18next';
import { ASSET_URLS } from '../../constants/AssetUrls';

const PRICES = {
  actual: 1499,
  discount: 1199,
  percent: 20,
  financedMonthly: 106
}
const RATING = 4.8;

const ProductTitle = ({ styles }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.productContainer}>
      <Ratings className={styles.ratingsContainer} styles={styles} rating={RATING} />
      <h1 className={styles.title}>{t('productTitle')}</h1>
      <span className={styles.priceContainer}>
        <span className={styles.discount}>${PRICES.discount}</span>
        <span className={styles.actualPrice}>${PRICES.actual}</span>
        <span className={styles.percentDiscount}>{PRICES.percent}% OFF</span>
      </span>
      <p className={styles.financing}>
        {t('affirmFinancingInfo').replace('{price}', PRICES.financedMonthly)}
        <img alt="affirm" src={ASSET_URLS.affirm} />
        <a href="#">{t('learnMore')}</a>
      </p>
    </div>
  )
}

export default ProductTitle;
