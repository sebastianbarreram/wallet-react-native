import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoansScreen from '../screens/LoansScreen';
import PaymentScreen from '../screens/PaymentScreen';
import { TabNavigator } from './TabNavigator';
import { SideMenuScreen } from '../screens/SideMenuScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <SideMenuScreen {...props} />}>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Loans" component={LoansScreen} />
      <Drawer.Screen name="Payment" component={PaymentScreen} />
    </Drawer.Navigator>
  );
}
