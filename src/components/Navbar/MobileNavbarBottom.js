import React from 'react';
import { useTranslation } from 'react-i18next';
import { LANG_OPTIONS } from '../../constants/LangOptions';
import { ASSET_URLS } from '../../constants/AssetUrls';



const MobileNavbarBottom = ({ styles }) => {
  const { t, i18n } = useTranslation();

  const onLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  }

  return (
    <div className={styles.mobileNavBottom}>
      <a href="/">1.888.828.5448</a>
      <a href="/">{t('findAStore')}</a>
      <a href="/">{t('blog')}</a>
      <label>
        <div className={styles.countryIcon} style={{ backgroundImage: ASSET_URLS.countryIcon }} />
        <select onChange={onLanguageChange} className={styles.localeSelector}>
          {LANG_OPTIONS.map((lang) => (
            <option value={lang.value} key={lang.value}>{lang.label}</option>
          ))}
        </select>
      </label>
    </div>
  );
}


export default MobileNavbarBottom;
