import React from 'react';
import ProductTitle from './ProductTitle';
import styles from '../../styles/Product/Product.module.css';
import { ProductSelection } from './ProductSelection';
import { ProductInfo } from './ProductInfo';

import { MainProductImage } from './MainProductImage';
import { ProductDetails } from './ProductDetails';
import { ProductImageGrid } from './ProductImageGrid';

const Product = () => {
  return (
    <div className={styles.productWrapper}>
      <div className={styles.sectionLeftLg}>
        <ProductTitle styles={styles} />
        <MainProductImage styles={styles} />
        <ProductSelection styles={styles} />
        <ProductInfo styles={styles} />
        <ProductDetails styles={styles} />
        <ProductImageGrid styles={styles} />

      </div>
      <div className={styles.sectionRightLg}>
        <ProductTitle styles={styles} />
        <MainProductImage styles={styles} />
        <ProductSelection styles={styles} />
        <ProductInfo styles={styles} />
      </div>
    </div>
  );
}

export default Product;
