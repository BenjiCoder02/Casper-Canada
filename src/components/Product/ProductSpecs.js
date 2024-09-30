import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import CloseIcon from '../../icons/CloseIcon';
import { Measurements } from "./Measurements";
import clsx from 'clsx';


export const ProductSpecs = ({ styles }) => {
  const [active, setActive] = useState(null);
  const { t } = useTranslation();

  const materialBulletPoints = t('materialInfoBullets', { returnObjects: true })

  const onButtonClick = useCallback((value) => {
    if (active === value) {
      setActive(null);
    } else {
      setActive(value);
    }
  }, [active]);

  return (
    <div className={styles.specContainer}>
      <div className={styles.specWrapper}>
        <button
          onClick={() => onButtonClick('measurements')}
          className={styles.specTitle}
        >
          <h4>{t('measurements')}</h4>
          <CloseIcon className={clsx(styles.svg, { [styles.active]: active === 'measurements' })} />
        </button>
        <Measurements
          className={clsx({ [styles.active]: active === 'measurements' })}
          styles={styles}
        />
      </div>
      <div className={styles.specWrapper}>
        <button
          onClick={() => onButtonClick('materials')}
          className={styles.specTitle}
        >
          <h4>{t('materials')}</h4>
          <CloseIcon className={clsx(styles.svg, { [styles.active]: active === 'materials' })} />
        </button>
        <div className={clsx(styles.detailContainer, { [styles.active]: active === 'materials' })}>
          <div className={styles.detailWrapperMaterial}>
            <p>{t('materialInfo')}</p>
            {materialBulletPoints.map((point) => (
              <li key={point} className={styles.bullets}>{point}</li>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.specWrapper}>
        <button
          onClick={() => onButtonClick('warranty')}
          className={styles.specTitle}
        >
          <h4>{t('warrantyShippingHeader')}</h4>
          <CloseIcon className={clsx(styles.svg, { [styles.active]: active === 'warranty' })} />
        </button>
        <div className={clsx(styles.detailContainer, { [styles.active]: active === 'warranty' })}>
          <div className={styles.detailWrapperMaterial}>
            <p>{t('warrantyShippinginfo1')}</p>
            <p>{t('limitationsForShipping')}</p>
            <p>{t('warrantyLimit')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
