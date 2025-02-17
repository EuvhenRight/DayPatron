import { Box, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { Vortex } from 'react-loader-spinner';

export default function LoaderSpinner() {
  const { colorMode } = useColorMode();
  return (
    <Box
      m="0"
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
    >
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={
          colorMode === 'dark'
            ? ['white', 'white', 'white', 'white', 'white', 'white']
            : []
        }
      />
    </Box>
  );
}
