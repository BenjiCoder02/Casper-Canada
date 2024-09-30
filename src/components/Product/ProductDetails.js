import React from 'react';
import { useTranslation } from 'react-i18next';
import { ASSET_URLS } from '../../constants/AssetUrls';

export const ProductDetails = ({ styles }) => {
  const { t } = useTranslation();

  return (
    <section className={styles.detailsLg}>
      <h2>{t('productSubHeading')}</h2>
      <div>
        <img src={ASSET_URLS.casperDetail1} alt="Signature foam" />
        <p>{t('productSubInfoCard1Desc')}</p>
      </div>
      <div>
        <img src={ASSET_URLS.casperDetail2} alt="airscape" />
        <p>{t('productSubInfoCard2Desc')}</p>
      </div>
    </section>
  );
}
