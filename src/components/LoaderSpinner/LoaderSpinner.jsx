import React from 'react';
import { Vortex } from 'react-loader-spinner';
import style from '../../App.module.css';

const LoaderSpinner = () => (
  <div className={style.loader__wrapper}>
    <Vortex
      visible={true}
      height="80"
      width="80"
      ariaLabel="vortex-loading"
      wrapperStyle={{}}
      wrapperClass="vortex-wrapper"
      colors={[]}
    />
  </div>
);

export default LoaderSpinner;
