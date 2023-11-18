import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const brandPrimary = defineStyle({
  variant: 'outline',
  size: 'md',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  borderRadius: '8px',
  bg: '#303030',
  color: 'white',
  _hover: {
    bg: 'white',
    color: 'black',
    border: '1px solid #303030',
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { brandPrimary },
});
