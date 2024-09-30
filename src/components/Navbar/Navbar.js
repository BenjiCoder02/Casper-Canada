import React, { useCallback, useState } from 'react';
import BurgerMenuIcon from '../../icons/BurgerMenu';
import styles from '../../styles/Navbar/Navbar.module.css';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/casper_logo.webp';
import CartIcon from '../../icons/CheckoutIcon';
import { NavbarLinks } from './NavbarLinks';
import CloseIcon from '../../icons/CloseIcon';
import clsx from 'clsx';
import MobileNavbarBottom from './MobileNavbarBottom';



const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const onMenuToggle = useCallback(() => {
    if (!isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <section className={styles.nav}>
      <button className={styles.burgerMenu} onClick={onMenuToggle}>
        <BurgerMenuIcon className={styles.svgFill} />
      </button>
      <a href="/" className={clsx(styles.logo, styles.logoLg)}>
        <img alt={t('brandName')} className={styles.logoLg} src={logo} width="116" height="40" />
      </a>
      <NavbarLinks
        styles={styles}
        containerClass={styles.containerClassLg}
        showIcon={false}
      />
      <button>
        <CartIcon className={styles.svgFill} />
      </button>
      <section className={
        clsx(styles.smNavContainer, { [styles.open]: isOpen })}
      >
        <nav>
          <div className={styles.logoSmContainer}>
            <a href="/" className={styles.logo}>
              <img alt={t('brandName')} src={logo} width="116" height="40" />
            </a>
            <button onClick={onMenuToggle}>
              <CloseIcon className={styles.svgFill} />
            </button>
          </div>
          <NavbarLinks
            styles={styles}
            containerClass={styles.containerClassSm}
            showIcon={true}
          />
        </nav>
        <MobileNavbarBottom styles={styles} />
      </section>
    </section>
  );
}

export default Navbar;
