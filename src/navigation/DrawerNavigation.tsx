import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TabNavigator } from './TabNavigator';
import { SideMenuScreen } from '../screens/SideMenuScreen';
import { LaunchScreen } from '../screens/LaunchScreen';
import ThemeOptionsScreen from '../screens/ThemeOptionsScreen';
import { StackNavigation } from './StackNavigation';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/storage/configStore';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const { client } = useSelector((state: RootState) => state.client);

  return (
    <Drawer.Navigator
      initialRouteName="Launch"
      drawerContent={props => <SideMenuScreen {...props} />}
      screenOptions={{
        unmountOnBlur: true,
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor:
            client.app && client.app.color !== ''
              ? client.app.color
              : '#1554F7',
          shadowColor: 'transparent',
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{
          headerTitle: 'My App',
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
