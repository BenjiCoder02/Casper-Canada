import React from 'react';
import { useTranslation } from 'react-i18next';
import { NAVLINKS } from '../../constants/NavLinks';
import { capitalize } from '../../utils/StringUtils';

export const NavbarLinks = ({ styles, containerClass }) => {
  const { t } = useTranslation();

  return (
    <nav className={containerClass}>
      <ul className={styles.navList} >
        {
          NAVLINKS.map((link) => (
            <li>
              <a href={link}>{capitalize(link)}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}
