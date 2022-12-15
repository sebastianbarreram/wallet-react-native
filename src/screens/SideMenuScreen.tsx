import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { MyDrawerScreenProps } from '../interfaces/MyDrawerScreenProps';
import SideMenuButton from '../components/SideMenuButton';
import { AuthContext } from '../context/AuthContext';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/storage/configStore';

export const SideMenuScreen = ({ navigation }: MyDrawerScreenProps) => {
  const { client } = useSelector((state: RootState) => state.client);
  const { logout, userData } = useContext(AuthContext);
  return (
    <View style={styles.mainContainer}>
      <Image
        source={{ uri: userData ? client.photo : null }}
        // source={require('../assets/images/9E2.jpg')}
        style={styles.avatarImage}
      />
      <Text style={styles.textAccountName}>
        {userData ? client.fullName : null}
      </Text>
      <SideMenuButton
        iconName="settings"
        text="Change password"
        color="rgba(0, 0, 0, 0.6)"
        action={() => navigation.navigate('ChangePassword')}
      />
      <SideMenuButton
        iconName="bookmark"
        text="Theme options"
        color="rgba(0, 0, 0, 0.6)"
        action={() => navigation.navigate('ThemeOptions')}
      />
      <SideMenuButton
        iconName="logout"
        text="Logout"
        color="rgba(0, 0, 0, 0.6)"
        action={() => logout()}
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
});
