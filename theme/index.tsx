// 1. Import the extendTheme function
import {extendTheme} from 'native-base';
// 2. Extend the theme to include custom colors, fonts, etc
const newColorTheme = {
  brand: {
    900: '#383839',
    800: '#A4A3A0',
    700: '#E9965A',
    600: '#4A9990',
    500: '#FEE4B4',
  },
};
const newTypographyTheme = {
  Roboto: {
    100: {
      normal: 'Roboto-Light',
      italic: 'Roboto-LightItalic',
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
    mono: 'Roboto',
  },
};
export default extendTheme({
  colors: newColorTheme,
  fontConfig: newTypographyTheme,
});
