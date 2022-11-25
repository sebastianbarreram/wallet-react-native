import { View, Text } from 'react-native';
import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import InputTextContainer from '../components/InputTextContainer';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';

const ChangePasswordScreen = ({ navigation }: MyStackScreenProps) => {
  return (
    <View style={styles.mainContainer}>
      <InputTextContainer
        style={styles.maxLoanAmountContainer}
        iconName="person"
        placeHolder="Current password"
        type="password"
      />
      <InputTextContainer
        style={{ ...styles.maxLoanAmountContainer, marginVertical: 15 }}
        iconName="lock-open"
        placeHolder="New password"
        type="password"
      />
      <InputTextContainer
        style={{ ...styles.maxLoanAmountContainer, marginVertical: 15 }}
        iconName="lock"
        placeHolder="Confirm new password"
        type="password"
      />
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Change password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.button,
            backgroundColor: 'white',
            ...styles.cancelbutton,
          }}
          onPress={() => navigation.navigate('Home')}>
          <Text style={{ ...styles.buttonText, color: 'black' }}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangePasswordScreen;

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
  cancelbutton: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
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
