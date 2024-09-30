import React from 'react';
import { useTranslation } from 'react-i18next';
import { ASSET_URLS } from '../../constants/AssetUrls';

export const ProductSelection = ({ styles }) => {
  const { t } = useTranslation();
  const options = t('sizes', { returnObjects: true });
  const selectionOptions = options.map((op) => {
    return { value: op, label: op }
  });



  return (
    <div className={styles.selectContainer}>
      <label for="sizeSelect">{t('sizeSelectHeading')}
        <select name="sizeSelect" id="sizeSelect">
          {selectionOptions.map((op) => (
            <option value={op.value}>{op.label}</option>
          ))}
        </select>
      </label>
      <button className={styles.addButton}>{t('addToCart')}</button>
      <div className={styles.shippingInfo}>
        <div className={styles.bulletGreen}></div>
        <p>{t('shippingInfo')}</p>
        <div className={styles.helpInfo}>
          <img src={ASSET_URLS.helpIcon} alt="help" />
          <div className={styles.helpInfoBlock}>
            {t('deliveryInfo')}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
