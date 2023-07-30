import React from 'react';
import { Vortex } from 'react-loader-spinner';

const LoaderSpinner = () => (
  <div id="loader">
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
