import React from 'react';
import tradeMark from '../assets/DayLogo_main.svg';
import style from '../Home/Home.module.css';

const AnimationLogo = ({ rotate }) => {
  return (
    <>
      <img
        className={`${rotate ? style.rotateTrademark : style.tradeMark}`}
        src={tradeMark}
        alt="trademark"
      />
    </>
  );
};

export default AnimationLogo;
