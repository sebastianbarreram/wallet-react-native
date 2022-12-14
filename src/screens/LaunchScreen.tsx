import { Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Logo from '../components/Logo';
import { styles } from '../themes/WalletTheme';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/storage/configStore';

export const LaunchScreen = ({ navigation }: MyStackScreenProps) => {
  const { client } = useSelector((state: RootState) => state.client);

  useEffect(() => {
    setTimeout(() => navigation.navigate('LoginStack'), 20);
    // setTimeout(() => navigation.navigate('LoginStack'), 3000);
  });
  return (
    <View style={styles({ color: client.app.color }).containerLaunchScreen}>
      <Logo />
      <Text style={styles({ color: client.app.color }).titleAppLaunchScreen}>
        My App
      </Text>
    </View>
  );
};
