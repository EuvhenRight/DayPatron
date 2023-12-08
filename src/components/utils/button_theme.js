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

const shopPrimary = defineStyle({
  variant: 'outline',
  size: 'lg',
  width: '90px',
  height: '90px',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  borderRadius: '50%',
  bg: 'red.500',
  _dark: {
    bg: 'red.300',
    _hover: {
      transform: 'scale(1.1, 1.1)',
      bg: 'red.500',
      color: 'white',
    },
  },
  color: 'white',
  _hover: {
    transform: 'scale(1.1, 1.1)',
    bg: 'red.600',
    color: 'white',
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { brandPrimary, shopPrimary },
});
