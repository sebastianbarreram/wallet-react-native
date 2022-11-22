import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoansScreen from '../screens/LoansScreen';
import PaymentScreen from '../screens/PaymentScreen';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Loans" component={LoansScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
    </Stack.Navigator>
  );
};
