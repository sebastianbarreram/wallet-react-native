import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Logo from '../components/Logo';
import { AuthButton } from '../components/AuthButton';
import usePasswordVisibility from '../hooks/usePasswordVisibility';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';

export const LoginPasswordScreen = ({ navigation }: MyStackScreenProps) => {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    usePasswordVisibility();
  const [password, setPassword] = useState('');
  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Logo size={48} />
      </View>
      <View style={styles.instructionContainer}>
        <Text style={styles.textInstruction}>Login or sign up for free.</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={'Password'}
          placeholderTextColor="rgba(0, 0, 0, 0.38)"
          autoCapitalize="none"
          secureTextEntry={passwordVisibility}
          textContentType={'password'}
          onChangeText={text => setPassword(text)}
        />
        <Pressable onPress={handlePasswordVisibility}>
          <Icon name={rightIcon} size={22} color="#232323" />
        </Pressable>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerLine}>
        <View style={styles.line} />
        <Text style={styles.textLine}>or use</Text>
        <View style={styles.line} />
      </View>
      <AuthButton text={'Sign in with Google'} iconName="logo-google" />
      <AuthButton text={'Sign in with Apple'} iconName="logo-apple" />
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: 150,
  },
  inputContainer: {
    height: 48,
    width: '75%',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 4,
    borderStyle: 'solid',
    borderColor: 'rgba(0, 0, 0, 0.38)',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    textAlignVertical: 'center',
    padding: 8,
    marginLeft: 12,
    color: 'black',
    fontSize: 16,
    width: '82%',
  },
  line: {
    flex: 1,
    height: 1,
    alignSelf: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
  },
  containerLine: {
    flexDirection: 'row',
    width: '75%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  textLine: {
    alignSelf: 'center',
    paddingHorizontal: 5,
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.6)',
    fontWeight: '400',
  },
  button: {
    width: '75%',
    height: 48,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#1554f6',
    marginVertical: 17,
    borderRadius: 4,
  },
  mainContainer: {
    height: '100%',
    flexDirection: 'column',
    padding: 5,
    paddingBottom: 38,
    backgroundColor: 'white',
  },
  instructionContainer: {
    height: 41,
    marginBottom: 9,
  },
  textInstruction: {
    alignSelf: 'center',
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
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
