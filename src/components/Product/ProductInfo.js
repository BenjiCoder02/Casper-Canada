import React from "react";
import { useTranslation } from "react-i18next";

export const ProductInfo = ({ styles }) => {
  const { t } = useTranslation();
  const productBullets = t('productPoints', { returnObjects: true });

  return (
    <div className={styles.productInfo}>
      <p>{t('productInfo')}</p>
      <ul>
        {
          productBullets.map((point) => (
            <li
              className={styles.productBullet}
              key={point}
              dangerouslySetInnerHTML={{ __html: point }}
            >

            </li>
          ))
        }
      </ul>
    </div>
  );
}
