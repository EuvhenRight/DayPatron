import React from 'react';
import { motion } from 'framer-motion';
import tradeMark from '../assets/DayLogo.svg';
import style from './Home.module.css';

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
