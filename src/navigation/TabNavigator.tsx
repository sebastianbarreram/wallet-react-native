import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon3MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AccountScreen from '../screens/AccountScreen';
import LoansScreen from '../screens/LoansScreen';
import PaymentScreen from '../screens/PaymentScreen';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/storage/configStore';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  const { client } = useSelector((state: RootState) => state.client);

  return (
    <Tab.Navigator
      initialRouteName="My App"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: client.app.color,
          height: 52,
        },
        headerShown: false,
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
          tabBarLabel: 'Loans',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="hand-holding-usd" size={size} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 15,
          },
          headerShown: true,
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
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
