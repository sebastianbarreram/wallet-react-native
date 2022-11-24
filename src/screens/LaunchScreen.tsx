import { Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Logo from '../components/Logo';
import { styles } from '../themes/WalletTheme';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';

export const LaunchScreen = ({ navigation }: MyStackScreenProps) => {
  useEffect(() => {
    setTimeout(() => navigation.navigate('LoginUser'), 20);
    // setTimeout(() => navigation.navigate('LoginUser'), 3000);
  });
  return (
    <View style={styles.containerLaunchScreen}>
      <Logo />
      <Text style={styles.titleAppLaunchScreen}>My App</Text>
    </View>
  );
};
