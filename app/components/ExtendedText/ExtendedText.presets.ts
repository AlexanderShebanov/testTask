import { StyleSheet, TextStyle } from 'react-native';

const BASE: TextStyle = {
  color: '#000',
  fontSize: 15,
};

interface IExtendedTextStyles {
  default: TextStyle;
  fs24: TextStyle;
  fs20: TextStyle;
  fs18: TextStyle;
  fs16: TextStyle;
  fs14: TextStyle;
  fs12: TextStyle;
  title: TextStyle;
  secondary: TextStyle;
}

export type ExtendedTextPresets = keyof IExtendedTextStyles;

export default StyleSheet.create<IExtendedTextStyles>({
  default: BASE,

  fs24: {
    ...BASE,
    fontSize: 24,
  },

  fs20: {
    ...BASE,
    fontSize: 20,
  },

  fs18: {
    ...BASE,
    fontSize: 18,
  },

  fs16: {
    ...BASE,
    fontSize: 18,
  },

  fs14: {
    ...BASE,
    fontSize: 18,
  },

  fs12: {
    ...BASE,
    fontSize: 18,
  },

  title: {
    ...BASE,
    fontSize: 24,
    fontWeight: 'bold',
  },

  secondary: {
    ...BASE,
    fontSize: 11,
  },
});
