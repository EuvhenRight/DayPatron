import { extendTheme } from '@chakra-ui/react';
import { cardTheme } from './card_theme';
import { buttonTheme } from './button_theme';
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

export const theme = extendTheme({
  fonts: {
    body: 'font-family: Carlito, sans-serif',
    heading: 'font-family: Carlito, sans-serif',
  },
  colors,
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  components: {
    Card: cardTheme,
    Button: buttonTheme,
  },
});
