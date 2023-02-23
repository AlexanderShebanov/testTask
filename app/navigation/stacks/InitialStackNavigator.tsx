import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { InitialScreen } from '../../screens';
import { DEFAULT_STACK_OPTIONS } from '../options';

export type InitialStackParams = {
  Initial: undefined;
};

const Stack = createNativeStackNavigator<InitialStackParams>();

export const InitialStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen name="Initial" component={InitialScreen} />
  </Stack.Navigator>
);
