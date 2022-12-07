import React, { useEffect, useContext } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { StackActions } from '@react-navigation/native';

import { AuthContext } from '../context/AuthContext';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';
import { useSelector } from 'react-redux';

export const LoadingScreen = ({ navigation }: MyStackScreenProps) => {
  const { loading, loggedIn, logout } = useContext(AuthContext);
  const { client } = useSelector((state: any) => state.client);

  useEffect(() => {
    async () => {
      console.log('loggedIn en useefect', loggedIn);

      if (loggedIn) {
        // await getAccount(client.id);
        navigation.navigate('Home');
      }
      if (loggedIn === false) {
        navigation.dispatch(StackActions.replace('Login'));
      }
    };
  },[loggedIn]);

  return (
    <View style={styles.container}>
      {loading && (
        <React.Fragment>
          <ActivityIndicator size="large" />
          <View style={{ marginTop: 10 }}>
            <Text>Please wait...</Text>
            <TouchableOpacity onPress={() => logout()}>
              <Text>logout</Text>
            </TouchableOpacity>
          </View>
        </React.Fragment>
      )}
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
