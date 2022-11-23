import { TabNavigator } from './src/navigation/TabNavigator';
import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import AccountScreen from './src/screens/AccountScreen';
import { NavigationContainer } from '@react-navigation/native';
import { LaunchScreen } from './src/screens/LaunchScreen';
import DrawerNavigator from './src/navigation/DrawerNavigation';

const App = () => {
  return (
    // <SafeAreaView style={styles.container}>
    // <SafeAreaView>
    // <AccountScreen />
    // <LaunchScreen />
    // </SafeAreaView>
    <NavigationContainer>
      {/* <TabNavigator /> */}
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
