import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoansScreen from '../screens/LoansScreen';
import PaymentScreen from '../screens/PaymentScreen';
import { TabNavigator } from './TabNavigator';
import { SideMenuScreen } from '../screens/SideMenuScreen';
import { LoginUserScreen } from '../screens/LoginUserScreen';
import { LoginPasswordScreen } from '../screens/LoginPasswordScreen';
import { LaunchScreen } from '../screens/LaunchScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import ThemeOptionsScreen from '../screens/ThemeOptionsScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Launch"
      drawerContent={props => <SideMenuScreen {...props} />}
      screenOptions={{
        unmountOnBlur: true,
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'rgba(21, 84, 246, 1)' },
      }}>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Loans" component={LoansScreen} />
      <Drawer.Screen name="Payment" component={PaymentScreen} />
      <Drawer.Screen
        name="LoginUser"
        component={LoginUserScreen}
        options={{
          drawerItemStyle: { display: 'none' },
          headerShown: false,
          swipeEnabled: false,
        }}
      />
      <Drawer.Screen
        name="LoginPassword"
        component={LoginPasswordScreen}
        options={{
          drawerItemStyle: { display: 'none' },
          headerShown: false,
          swipeEnabled: false,
        }}
      />
      <Drawer.Screen
        name="Launch"
        component={LaunchScreen}
        options={{
          drawerItemStyle: { display: 'none' },
          headerShown: false,
          swipeEnabled: false,
        }}
      />
      <Drawer.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Drawer.Screen name="ThemeOptions" component={ThemeOptionsScreen} />
    </Drawer.Navigator>
  );
}
