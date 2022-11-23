import { Text, View } from 'react-native';
import React from 'react';
import Logo from '../components/Logo';
import { styles } from '../themes/WalletTheme';

export const LaunchScreen = () => {
  return (
    <View style={styles.containerLaunchScreen}>
      <Logo />
      <Text style={styles.titleAppLaunchScreen}>My App</Text>
    </View>
  );
};
