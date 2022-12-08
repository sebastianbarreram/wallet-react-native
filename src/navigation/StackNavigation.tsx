import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginUserScreen } from '../screens/LoginUserScreen';
import { LoginPasswordScreen } from '../screens/LoginPasswordScreen';
import RegisterScreen from '../screens/RegisterScreen';
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
      {/* <Stack.Screen name="LoginUser" component={LoginUserScreen} />
      <Stack.Screen name="LoginPassword" component={LoginPasswordScreen} /> */}
      {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
    </Stack.Navigator>
  );
};
