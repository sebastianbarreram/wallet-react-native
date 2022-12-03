import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigation/DrawerNavigation';
import { AuthContextProvider } from './src/context/AuthContext';
import { Provider } from 'react-redux';
import { ConfigStorage } from './src/redux/storage/configStore';

const App = () => {
  return (
    // <SafeAreaView style={styles.container}>
    // <SafeAreaView>
    //   <LoginPasswordScreen />
    // </SafeAreaView>

    //Este va a ser el final final...
    <Provider store={ConfigStorage}>
      <AuthContextProvider>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </AuthContextProvider>
    </Provider>
  );
};

export default App;
