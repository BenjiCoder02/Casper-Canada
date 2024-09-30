import React from "react";
import { ASSET_LOCATIONS } from "../../constants/AssetUrls";

const IMAGES = [
  ASSET_LOCATIONS.gridImage1,
  ASSET_LOCATIONS.gridImage2,
  ASSET_LOCATIONS.gridImage3,
  ASSET_LOCATIONS.gridImage4,
]

export const ProductImageGrid = ({ styles }) => {
  return (
    <div className={styles.productImageGrid}>
      {IMAGES.map((image) => (
        <img alt={`bed-info ${image}`} src={image} />
      ))}
    </div>
  );
}
