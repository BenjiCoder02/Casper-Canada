import React from 'react';
import ProductTitle from './ProductTitle';
import styles from '../../styles/Product/Product.module.css';
import { ProductSelection } from './ProductSelection';
import { ProductInfo } from './ProductInfo';

import { MainProductImage } from './MainProductImage';
import { ProductDetails } from './ProductDetails';

const Product = () => {
  return (
    <div className={styles.productWrapper}>
      <div className={styles.sectionLeftLg}>
        <MainProductImage styles={styles} />
        <ProductDetails styles={styles} />
      </div>
      <div className={styles.sectionRightLg}>
        <ProductTitle styles={styles} />
        <ProductSelection styles={styles} />
        <ProductInfo styles={styles} />
      </div>
    </div>
  );
}

export default Product;
