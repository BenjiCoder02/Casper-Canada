import React from 'react';
import ProductTitle from './ProductTitle';
import styles from '../../styles/Product/Product.module.css';
import { ProductSelection } from './ProductSelection';
import { ProductInfo } from './ProductInfo';

import { MainProductImage } from './MainProductImage';
import { ProductDetails } from './ProductDetails';
import { ProductImageGrid } from './ProductImageGrid';
import { DeliveryDetails } from './DeliveryDetails';
import { ProductSpecs } from './ProductSpecs';
import { QuestionsSection } from './QuestionsSection';

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
        <DeliveryDetails styles={styles} />
        <ProductSpecs styles={styles} />
        <QuestionsSection styles={styles} />
      </div>
    </div>
  );
}

export default Product;
