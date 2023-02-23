import { StyleSheet, ViewStyle } from 'react-native';

type IInitialScreenStyles = {
  siteNameContainer: ViewStyle;
  copyrightTextContainer: ViewStyle;
};

export const styles = StyleSheet.create<IInitialScreenStyles>({
  siteNameContainer: {
    marginTop: 4,
    marginBottom: 8,
  },
  copyrightTextContainer: {
    marginTop: 10,
  },
});
