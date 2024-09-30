import React from 'react';
import { useTranslation } from 'react-i18next';
import { NAVLINKS } from '../../constants/NavLinks';
import { capitalize } from '../../utils/StringUtils';
import clsx from 'clsx';
import GreaterThanIcon from '../../icons/GreaterThanIcon';

export const NavbarLinks = ({ styles, containerClass, showIcon }) => {
  const { t } = useTranslation();

  return (
    <nav className={containerClass}>
      <ul className={styles.navList} >
        {
          NAVLINKS.map((link, index) => (
            <div key={link} className={styles.linkContainer}>
              <li>
                <a
                  href={link}
                  className={clsx(index === NAVLINKS.length - 1 && styles.sales)}
                >
                  {capitalize(t(link))}</a>
              </li>
              {showIcon && <GreaterThanIcon className={styles.greaterThanIcon} />}
            </div>
          ))
        }
      </ul>
    </nav>
  );
}
