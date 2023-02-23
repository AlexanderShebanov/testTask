import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { navigationRef } from '../services/navigator';

import { GLOBAL_NAVIGATION_STACK_OPTIONS } from './options';
import { InitialStackNavigator } from './stacks';

export type RootParams = {
  InitialStack: undefined;
};

const Stack = createNativeStackNavigator<RootParams>();

const RootNavigator = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator screenOptions={GLOBAL_NAVIGATION_STACK_OPTIONS}>
      <Stack.Screen name="InitialStack" component={InitialStackNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
