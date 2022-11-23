import { View, Text, Button, Image, StyleSheet } from 'react-native';
import React from 'react';
import { MyDrawerScreenProps } from '../interfaces/MyDrawerScreenProps';
import SideMenuButton from '../components/SideMenuButton';

export const SideMenuScreen = ({ navigation }: MyDrawerScreenProps) => {
  const avatarImage = 'https://reactjs.org/logo-og.png';
  const nombre = 'Sutanita Mejía';
  return (
    <View style={styles.mainContainer}>
      <Image
        source={{ uri: avatarImage }}
        // source={require('../assets/images/9E2.jpg')}
        style={styles.avatarImage}
      />
      <Text style={styles.textAccountName}>{nombre}</Text>
      <Button
        title="Ir a Launch Screen"
        onPress={() => navigation.navigate('Launch')}
      />
      <Button
        title="Ir a Login User Screen"
        onPress={() => navigation.navigate('LoginUser')}
      />
      <Button
        title="Ir a Login Password Screen"
        onPress={() => navigation.navigate('LoginPassword')}
      />
      <Button
        title="Ir a Pantalla Home"
        onPress={() => navigation.navigate('Home')}
      />
      <SideMenuButton
        iconName="settings"
        text="Change password"
        color="rgba(0, 0, 0, 0.6)"
      />
      <SideMenuButton
        iconName="bookmark"
        text="Theme options"
        color="rgba(0, 0, 0, 0.6)"
      />
      <SideMenuButton
        iconName="logout"
        text="Logout"
        color="rgba(0, 0, 0, 0.6)"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    flexDirection: 'column',
    padding: 16,
    backgroundColor: 'white',
  },
  avatarImage: {
    width: 120,
    height: 120,
    borderRadius: 600,
    alignSelf: 'center',
    margin: 10,
    marginTop: 30,
  },
  textAccountName: {
    fontSize: 23,
    alignSelf: 'center',
    fontWeight: '500',
    color: 'black',
    marginBottom: 60,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    height: 48,
    textAlignVertical: 'center',
    fontWeight: '500',
  },
});
