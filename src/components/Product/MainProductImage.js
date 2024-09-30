import React from 'react';
import { ASSET_LOCATIONS } from '../../constants/AssetUrls';

export const MainProductImage = ({ styles }) => {

  return (
    <img
      className={styles.mainImage}
      src={ASSET_LOCATIONS.mattress}
      alt="mattress-image"
    />);
}
