import { TabNavigator } from './src/navigation/TabNavigator';
import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import AccountScreen from './src/screens/AccountScreen';
import { NavigationContainer } from '@react-navigation/native';
import { LaunchScreen } from './src/screens/LaunchScreen';
import DrawerNavigator from './src/navigation/DrawerNavigation';
import { LoginUserScreen } from './src/screens/LoginUserScreen';
import { LoginPasswordScreen } from './src/screens/LoginPasswordScreen';
import { AuthContextProvider } from './src/context/AuthContext';

const App = () => {
  return (
    // <SafeAreaView style={styles.container}>
    // <SafeAreaView>
    //   <LoginPasswordScreen />
    // </SafeAreaView>

    //Este va a ser el final final...
    <AuthContextProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </AuthContextProvider>
  );
};

export default App;
