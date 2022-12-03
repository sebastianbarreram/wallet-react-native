import React, { useContext, useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';
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

  const { login } = useContext(AuthContext);

  return (
    <View style={[styles.container]}>
      <Button onPress={() => login()} title="Login with Auth0" />
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
