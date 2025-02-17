import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    backgroundColor: 'RGBA(255, 255, 255, 0.80)',
    _dark: {
      backgroundColor: 'RGBA(0, 0, 0, 0.64)',
    },
  },
  header: {},
  body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

const sizes = {
  sm: definePartsStyle({
    container: {
      borderRadius: '2em',
      borderColor: 'red.500',
      _dark: {
        borderColor: 'red.300',
      },
      borderWidth: '1px',
    },
  }),
  md: definePartsStyle({
    container: {
      backgroundColor: 'RGBA(255, 255, 255, 0.80)',
      _dark: {
        backgroundColor: 'RGBA(0, 0, 0, 0.64)',
      },
      borderRadius: '2em',
      body: {},
    },
  }),
};

export const cardTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    // define which size and variant is applied by default
    size: 'sm',
  },
});
