import React from 'react';

const StarIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" aria-labelledby="8488314044731-ada-star-ratings-text" width="15" height="15">
    <defs>
      <linearGradient aria-hidden="true" id="yotpo_stars_gradient_0.11778458034820272">
        <stop offset="100%" stop-color="#e7721b"></stop>
        <stop stop-opacity="1" offset="100%" stop-color="#FFFFFF"></stop>
      </linearGradient>
    </defs>
    <path aria-hidden="true" d="M9 14.118L14.562 17.475L13.086 11.148L18 6.891L11.529 6.342L9 0.375L6.471 6.342L0 6.891L4.914 11.148L3.438 17.475L9 14.118Z" stroke="#e7721b" fill="url('#yotpo_stars_gradient_0.11778458034820272')"></path>
  </svg>)

export default StarIcon;
