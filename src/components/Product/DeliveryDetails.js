import React from "react";
import { DeliveryTruck } from "../../icons/DeliveryTruck";
import { MoonIcon } from "../../icons/MoonIcon";
import { CalendarIcon } from '../../icons/CalendarIcon';
import { useTranslation } from "react-i18next";

export const DeliveryDetails = ({ styles }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.deliveryContainer}>
      <div>
        <DeliveryTruck />
        {t('deliveryInfo1')}
      </div>
      <div>
        <MoonIcon />
        {t('freeTrialInfo1')}
      </div>
      <div>
        <CalendarIcon />
        {t('warrantyInfo')}
      </div>
    </div>
  );
}
