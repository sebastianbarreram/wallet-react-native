import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon3MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//screens
import AccountScreen from '../screens/AccountScreen';
import LoansScreen from '../screens/LoansScreen';
import PaymentScreen from '../screens/PaymentScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: '#1554f7',
        },
      }}>
      <Tab.Screen
        name="My App"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ focused, color, size }) => (
            <IconIonicons
              name={focused ? 'home-sharp' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 15,
          },
        }}
      />
      <Tab.Screen
        name="Loans"
        component={LoansScreen}
        options={{
          tabBarLabel: 'Loan',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="hand-holding-usd" size={size} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 15,
          },
        }}
      />
      <Tab.Screen
        name="Payment"
        component={PaymentScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon3MaterialIcons name="payment" size={size} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 15,
          },
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
