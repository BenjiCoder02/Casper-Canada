import React from 'react';
import StarIcon from '../../icons/StarIcon';

const STAR_COUNT = [1, 2, 3, 4, 5]

export const Ratings = ({ className, styles, rating }) => {

  return (
    <div className={className}>
      {STAR_COUNT.map((val, idx) => (
        <StarIcon key={val * idx} className={styles.starSvgFill} />
      ))}
      <strong className={styles.ratingText}>{rating}</strong>
    </div>
  );
}
