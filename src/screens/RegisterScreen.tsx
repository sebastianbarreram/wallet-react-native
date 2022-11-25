import { View, Text } from 'react-native';
import { StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import InputTextContainer from '../components/InputTextContainer';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';
import usePasswordVisibility from '../hooks/usePasswordVisibility';

const RegisterScreen = ({ navigation }: MyStackScreenProps) => {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    usePasswordVisibility();
  const [password, setPassword] = useState('');
  return (
    <View style={styles.mainContainer}>
      <InputTextContainer
        style={styles.maxLoanAmountContainer}
        iconName="photo"
        placeHolder="Photo"
      />
      <InputTextContainer
        style={{ ...styles.maxLoanAmountContainer, marginVertical: 15 }}
        iconName="person"
        placeHolder="Name and lastname"
      />
      <InputTextContainer
        style={{ ...styles.maxLoanAmountContainer, marginVertical: 15 }}
        iconName="mail"
        placeHolder="Email"
      />
      <InputTextContainer
        style={{ ...styles.maxLoanAmountContainer, marginVertical: 15 }}
        iconName="phone"
        placeHolder="Phone"
      />
      <InputTextContainer
        style={{ ...styles.maxLoanAmountContainer, marginVertical: 15 }}
        iconName="lock-open"
        placeHolder="Password"
        type="password"
      />
      <InputTextContainer
        style={{ ...styles.maxLoanAmountContainer, marginVertical: 15 }}
        iconName="lock"
        placeHolder="Confirm password"
        type="password"
      />
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    padding: 12,
    marginTop: 0,
    height: '100%',
  },
  maxLoanAmountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 8,
  },
  icon: {
    height: 56,
    width: 48,
    justifyContent: 'flex-end',
    padding: 10,
  },

  inputContainer: {
    height: 56,
    width: 330,
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderStyle: 'solid',
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    borderColor: 'rgba(0, 0, 0, 0.38)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    textAlignVertical: 'center',
    marginLeft: 12,
    color: 'black',
    fontSize: 16,
    width: '82%',
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
  balanceText: {
    fontSize: 40,
    color: 'black',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 20,
    paddingBottom: 0,
    fontWeight: '400',
  },
  balanceContainer: {
    height: 140,
    alignItems: 'stretch',
    // backgroundColor: 'green',
  },
});
