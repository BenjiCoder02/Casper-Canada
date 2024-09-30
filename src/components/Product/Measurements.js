import clsx from 'clsx';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const Measurements = ({ styles, className }) => {
  const { t } = useTranslation();
  const sizes = useMemo(() => t('sizes', { returnObjects: true }), [t]);

  return (
    <div className={clsx(styles.detailContainer, className)}>
      <div className={styles.detailWrapper}>
        <div>
          <h6>{sizes[1]}</h6>
          <div>
            <p>37.5" W x 74.5" L x 10" H x 43lbs</p>
          </div>
        </div>
        <div>
          <h6>{sizes[2]}</h6>
          <div>
            <p>37.5" W x 79.5" L x 10" H x 43lbs</p>
          </div>
        </div>
        <div>
          <h6>{sizes[3]}</h6>
          <div>
            <p>52.5" W x 74.5" L x 10" H x 57lbs</p>
          </div>
        </div>
        <div>
          <h6>{sizes[0]}</h6>
          <div>
            <p>59.5" W x 79.5" L x 10" H x 69lbs</p>
          </div>
        </div>
        <div>
          <h6>{sizes[4]}</h6>
          <div>
            <p>75.5" W x 79.5" L x 10" H x 88lbs</p>
          </div>
        </div>
        <div>
          <h6>{sizes[5]}</h6>
          <div>
            <p>84" x 72" x 10" x 88lbs</p>
          </div>
        </div>
      </div>
    </div>
  )
};
