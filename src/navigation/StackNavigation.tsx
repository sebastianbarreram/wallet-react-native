import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginAuthScreen } from '../screens/LoginAuthScreen';
import LoadingScreen from '../screens/LoadingScreen';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginAuthScreen} />
      <Stack.Screen name="Loading" component={LoadingScreen} />
    </Stack.Navigator>
  );
};
