import { TextProps as RNTextProps } from 'react-native';

import { ExtendedTextPresets } from './ExtendedText.presets';

export interface IExtendedTextProps extends RNTextProps {
  preset?: ExtendedTextPresets;
}
