import React from 'react';
import { Text as ReactNativeText } from 'react-native';

import presets from './ExtendedText.presets';
import { IExtendedTextProps } from './ExtendedText.props';

export const ExtendedText: React.FC<IExtendedTextProps> = ({
  style,
  preset = 'default',
  ...rest
}) => {
  const styles = [presets[preset], style];

  return <ReactNativeText {...rest} style={styles} />;
};
