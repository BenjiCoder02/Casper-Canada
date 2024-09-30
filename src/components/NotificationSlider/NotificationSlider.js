import React, { useCallback, useState } from 'react';
import styles from '../../styles/NotificationSlider/NotificationSlider.module.css'
import { useTranslation } from 'react-i18next';
const DEFAULT_LANG = "EN";

export const NotificationSlider = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(DEFAULT_LANG);

  const toggleLang = useCallback(() => {
    if (lang === DEFAULT_LANG) {
      i18n.changeLanguage('fr');
      setLang('FR');
    } else {
      i18n.changeLanguage('en');
      setLang('EN');
    }
  }, [i18n, lang]);

  return (
    <section className={styles.slider}>
      <div className={styles.langSelect}>
        <button onClick={toggleLang}>EN</button>&nbsp;|&nbsp;
        <button onClick={toggleLang}>FR</button>
      </div>
    </section>
  );
}
