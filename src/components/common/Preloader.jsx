import React from 'react';
import logoWordmark from '../../../static/logo-wordmark.png';

const Preloader = () => (
  <div className="preloader">
    <svg className="logo-symbol" viewBox="0 0 41.25 41.25" style={{position: 'relative', top: "80px"}}>
      <circle cx="20.62" cy="20.62" r="20.62" />
      <circle className="fill-white" cx="29.97" cy="14.93" r="6.58" />
    </svg>
    <img alt="DigitalstoreNp logo wordmark" src={logoWordmark} style={{height: "50%", width: "50%", position: "absolute"}}/>
  </div>
);

export default Preloader;
