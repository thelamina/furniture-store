import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const COLORS = {
  // base colors
  primary: '#a6c13c', //Green
  secondary: '#454c5d', //Gray

  // colors
  black: '#1e1f20',
  white: '#fff',
  lightGray: '#abafb8',
  lightGray2: '#efeff0',
  lightGray3: '#d4d5d6',
  gray: '#bec1d2',
  blue: '#42b0ff',
  darkGreen: '#59990f',
  darkGray: '#898c95',
  transparentLightGray: '#ccd4d5d6',
  transparentLightGray1: 'rgba(255,255,255,0.7)',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: SIZES.largeTitle,
    lineHeight: 60,
  },

  h1: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: SIZES.h1,
    lineHeight: 36,
  },
  h2: { fontFamily: 'Montserrat-Medium', fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: 'Montserrat-Medium', fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: 'Montserrat-Medium', fontSize: SIZES.h4, lineHeight: 22 },

  body1: {
    fontFamily: 'Montserrat-Regular',
    fontSize: SIZES.body1,
    lineHeight: 36,
  },

  body2: {
    fontFamily: 'Montserrat-Regular',
    fontSize: SIZES.body2,
    lineHeight: 30,
  },

  body3: {
    fontFamily: 'Montserrat-Regular',
    fontSize: SIZES.body3,
    lineHeight: 22,
  },

  body4: {
    fontFamily: 'Montserrat-Regular',
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
