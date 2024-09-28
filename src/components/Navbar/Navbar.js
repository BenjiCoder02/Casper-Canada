import React from 'react';
import BurgerMenuIcon from '../../icons/BurgerMenu';
import styles from '../../styles/Navbar/Navbar.module.css';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/casper_logo.webp';
import CartIcon from '../../icons/CheckoutIcon';
import { NavbarLinks } from './NavbarLinks';



const Navbar = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.nav}>
      <button className={styles.burgerMenu}>
        <BurgerMenuIcon className={styles.svgFill} />
      </button>
      <a href="/" className={styles.logo}>
        <img alt={t('brandName')} src={logo} width="116" height="40" />
      </a>
      <NavbarLinks styles={styles} containerClass={styles.containerClassLg} />
      <button>
        <CartIcon className={styles.svgFill} />
      </button>
    </section>
  );
}

export default Navbar;
