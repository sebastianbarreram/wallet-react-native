import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { AuthContext } from '../context/AuthContext';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';
import { useDispatch, useSelector } from 'react-redux';
import { StackActions } from '@react-navigation/native';
import InputTextContainer from '../components/InputTextContainer';
import useData from '../hooks/useData';
import { setClient } from '../redux/slices/ClientSlice';
import { setAccount } from '../redux/slices/AccountSlice';
import { setImage } from '../redux/slices/ImagesSlice';
import { AccountFullInterface } from '../hooks/interfaces/accountFullInterface';
import { setMovements } from '../redux/slices/MovementsSlice';

export const LoadingScreen = ({ navigation }: MyStackScreenProps) => {
  const { loading, loggedIn, logout, userData } = useContext(AuthContext);
  const { postClient, getFullAccount } = useData();
  const { client } = useSelector((state: any) => state.client);
  const [register, setRegister] = useState(false);
  const [nameForm, setNameForm] = useState(false);
  const [dataOk, setDataOk] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    async () => {
      if (loggedIn === false) {
        navigation.dispatch(StackActions.replace('Login'));
      }
    };
  }, [loggedIn, navigation]);

  useEffect(() => {
    if (!register) {
      if (dataOk && client.id !== undefined) {
        getFullAccount(client.id).then(
          (accountFull: AccountFullInterface | undefined) => {
            if (
              accountFull &&
              accountFull.account.id !== null &&
              accountFull.account.id !== undefined &&
              accountFull.account.id !== ''
            ) {
              dispatch(setAccount(accountFull.account));
              dispatch(setImage(accountFull.images));
              dispatch(setMovements(accountFull.movements));
              navigation.navigate('Home');
            }
          },
        );
      }
    }
  }, [client.id, dataOk, dispatch, getFullAccount, navigation, register]);

  useEffect(() => {
    if (client && 'message' in client && client.statusCode === 404) {
      const validEmail =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      if (validEmail.test(userData.name)) {
        setNameForm(true);
      }
      setRegister(true);
    } else {
      setDataOk(true);
    }
  }, [client, userData.name]);

  const handleRegister = () => {
    setRegister(false);
    postClient({
      fullName: nameInput !== '' ? nameInput : userData.name,
      email: userData.email,
      phone: phoneInput,
      photo: userData.picture,
    })
      .then(clientResponse => {
        if (clientResponse) {
          setDataOk(true);
          return dispatch(setClient(clientResponse));
        }
      })
      .catch((error: unknown) => {
        Alert.alert('We have problems with the registration form');
      });
  };

  return (
    <View style={styles.container}>
      {loading && !register && (
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
      {register && (
        <React.Fragment>
          <Text style={styles.titleText}>Registration Form</Text>
          {nameForm && (
            <InputTextContainer
              style={styles.textContainer}
              iconName="person"
              placeHolder="Name and lastname"
              handleOnChange={setNameInput}
              value={nameInput}
            />
          )}
          <InputTextContainer
            style={styles.textContainer}
            iconName="phone"
            placeHolder="Phone"
            handleOnChange={setPhoneInput}
            value={phoneInput}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleRegister()}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
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
    padding: 12,
    backgroundColor: 'white',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 8,
    marginVertical: 15,
  },
  button: {
    width: '100%',
    height: 48,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#1554f6',
    marginTop: 17,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    height: 48,
    textAlignVertical: 'center',
    fontWeight: '500',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
