import React, { useContext, useEffect } from 'react';
import { View, Button, StyleSheet, BackHandler, Alert } from 'react-native';
import { StackActions } from '@react-navigation/native';

import { AuthContext } from '../context/AuthContext';

const LoginScreen = ({ navigation }: any) => {
  const { loggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (loggedIn) {
      //   navigation.dispatch(StackActions.replace('AccountAuth'));
      navigation.navigate('Home');
    }
  }, [loggedIn, navigation]);

  useEffect(() => {
    const backAction = () => {
      if (navigation.isFocused()) {
        Alert.alert('Hold on!', 'Are you sure you want exit?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          { text: 'YES', onPress: () => BackHandler.exitApp() },
        ]);
        return true;
      } else {
        return false;
      }
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [navigation]);

  const { login, logout } = useContext(AuthContext);

  return (
    <View style={[styles.container]}>
      <Button onPress={() => login()} title="Login with Auth0" />
      <Button onPress={() => logout()} title="Logout with Auth0" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 30,
    paddingLeft: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
