import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TabNavigator } from './TabNavigator';
import { SideMenuScreen } from '../screens/SideMenuScreen';
import { LaunchScreen } from '../screens/LaunchScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import ThemeOptionsScreen from '../screens/ThemeOptionsScreen';
import { StackNavigation } from './StackNavigation';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Launch"
      drawerContent={props => <SideMenuScreen {...props} />}
      screenOptions={{
        unmountOnBlur: true,
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'rgba(21, 84, 246, 1)',
          shadowColor: 'transparent',
        },
      }}>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen
        name="Launch"
        component={LaunchScreen}
        options={{
          drawerItemStyle: { display: 'none' },
          headerShown: false,
          swipeEnabled: false,
        }}
      />
      <Drawer.Screen
        name="LoginStack"
        component={StackNavigation}
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
