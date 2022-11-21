import React from 'react';
import { SafeAreaView } from 'react-native';
import AccountScreen from './src/screens/AccountScreen';
import TabNavigator from './src/navigation/TabNavigator';

const App = () => {
  return (
    // <SafeAreaView style={styles.container}>
    // <SafeAreaView>
    //   <AccountScreen />
    // </SafeAreaView>
    <TabNavigator />
  );
};

export default App;
