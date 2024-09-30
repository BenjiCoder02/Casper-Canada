import React, { useCallback } from 'react';
import styles from '../../styles/NotificationSlider/NotificationSlider.module.css'
import { useTranslation } from 'react-i18next';

export const NotificationSlider = () => {
  const { i18n } = useTranslation();

  const toggleLang = useCallback((language) => {
    i18n.changeLanguage(language);
  }, [i18n]);

  return (
    <section className={styles.slider}>
      <div className={styles.langSelect}>
        <button onClick={() => toggleLang('en')}>EN</button>&nbsp;|&nbsp;
        <button onClick={() => toggleLang('fr')}>FR</button>
      </div>
    </section>
  );
}
