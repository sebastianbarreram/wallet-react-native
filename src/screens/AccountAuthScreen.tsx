import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { StackActions } from '@react-navigation/native';

import { AuthContext } from '../context/AuthContext';

const AccountAuthScreen = ({ navigation }: any) => {
  const { logout, loggedIn, userData } = useContext(AuthContext);

  useEffect(() => {
    if (loggedIn === false) {
      //   navigation.dispatch(StackActions.replace('Login'));
    }
  }, [loggedIn, navigation]);

  return (
    <View style={styles.container}>
      {userData && (
        <View style={styles.userContainer}>
          <Image
            source={{ uri: userData.picture }}
            style={{ width: 100, height: 100 }}
          />
          <View style={styles.textContainer}>
            <Text>{userData.name}</Text>
          </View>
        </View>
      )}

      <Button title="Logout" onPress={() => logout()} />
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
  userContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  textContainer: {
    marginTop: 10,
  },
});

export default AccountAuthScreen;
