import { NativeStackNavigationOptions } from 'react-native-screens/native-stack';

export const DEFAULT_STACK_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
};

export const GLOBAL_NAVIGATION_STACK_OPTIONS: NativeStackNavigationOptions = {
  ...DEFAULT_STACK_OPTIONS,
  gestureEnabled: false,
  replaceAnimation: 'push',
};

export const TRANSPARENT_MODAL_WITH_FADE_ANIM_OPTIONS: NativeStackNavigationOptions =
  {
    stackAnimation: 'fade',
    stackPresentation: 'transparentModal',
  };
