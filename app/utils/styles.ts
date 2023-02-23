import { StyleSheet, ViewStyle } from 'react-native';

export interface IGeneralStyles {
  flex: ViewStyle;
  whFlex: ViewStyle;

  jcCenter: ViewStyle;
  jcEnd: ViewStyle;
  jcSpaceBtw: ViewStyle;

  aiCenter: ViewStyle;
  aiEnd: ViewStyle;

  centered: ViewStyle;

  row: ViewStyle;

  flexGrow: ViewStyle;

  posRelative: ViewStyle;
}

export const generalStyles = StyleSheet.create<IGeneralStyles>({
  flex: {
    flex: 1,
  },
  whFlex: {
    flex: 1,
    backgroundColor: '#fff',
  },

  jcCenter: {
    justifyContent: 'center',
  },
  jcEnd: {
    justifyContent: 'flex-end',
  },
  jcSpaceBtw: {
    justifyContent: 'space-between',
  },

  aiCenter: {
    alignItems: 'center',
  },
  aiEnd: {
    alignItems: 'flex-end',
  },

  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  row: {
    flexDirection: 'row',
  },
  flexGrow: {
    flexGrow: 1,
  },

  posRelative: {
    position: 'relative',
  },
});
