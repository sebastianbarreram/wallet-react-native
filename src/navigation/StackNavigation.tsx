import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginUserScreen } from '../screens/LoginUserScreen';
import { LoginPasswordScreen } from '../screens/LoginPasswordScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginUser"
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
      }}>
      <Stack.Screen name="LoginUser" component={LoginUserScreen} />
      <Stack.Screen name="LoginPassword" component={LoginPasswordScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
