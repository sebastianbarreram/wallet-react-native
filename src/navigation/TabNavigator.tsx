import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';

//screens
import AccountScreen from '../screens/AccountScreen';
import LoansScreen from '../screens/LoansScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'purple',
      }}>
      <Tab.Screen
        name="My App"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? 'home-sharp' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Loans"
        component={LoansScreen}
        options={{
          tabBarLabel: 'Loan',
          tabBarIcon: ({ color, size }) => (
            <Icon2 name="hand-holding-usd" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
