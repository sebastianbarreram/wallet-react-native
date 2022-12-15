import {
  Alert,
  BackHandler,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useContext, useEffect } from 'react';
import Logo from '../components/Logo';
import { AuthButton } from '../components/AuthButton';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';
import { AuthContext } from '../context/AuthContext';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/storage/configStore';

export const LoginAuthScreen = ({ navigation }: MyStackScreenProps) => {
  const { loggedIn, loading } = useContext(AuthContext);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (loggedIn && loading) {
      navigation.navigate('Loading');
    }
  }, [dispatch, loading, loggedIn, navigation]);

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

  const { login } = useContext(AuthContext);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Logo size={48} />
      </View>
      <View style={styles.instructionContainer}>
        <Text style={styles.textInstruction}>Login or sign up for free.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => login()}>
          <Text style={styles.buttonText}>CONTINUE</Text>
        </TouchableOpacity>
        <View style={styles.containerLine}>
          <View style={styles.line} />
          <Text style={styles.textLine} />
          <View style={styles.line} />
        </View>
        <AuthButton text={'Sign in with Google'} iconName="logo-google" />
        <AuthButton text={'Sign in with Apple'} iconName="logo-apple" />
      </View>
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
  },
  input: {
    textAlignVertical: 'center',
    padding: 8,
    marginLeft: 12,
    color: 'black',
    fontSize: 16,
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
