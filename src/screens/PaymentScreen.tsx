import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import InputTextContainer from '../components/InputTextContainer';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';
import useAccount from '../hooks/useAccount';

const PaymentScreen = ({ navigation }: MyStackScreenProps) => {
  const { currencyFormat } = useAccount();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.balanceContainer}>
        <Text
          style={styles.balanceText}
          numberOfLines={1}
          adjustsFontSizeToFit={true}>
          {currencyFormat(180576070)}
        </Text>
        <Text style={styles.commentBalance}>Account balance</Text>
      </View>

      <InputTextContainer
        style={styles.maxLoanAmountContainer}
        iconName="person"
        placeHolder="User's email or phone number"
      />
      <InputTextContainer
        style={styles.inputTextAmount}
        iconName="euro"
        placeHolder="Amount"
      />
      <InputTextContainer
        style={styles.inputTextAmount}
        iconName="comment"
        placeHolder="Reason"
      />
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('My App')}>
          <Text style={styles.buttonText}>Send payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    padding: 12,
    height: '100%',
  },
  maxLoanAmountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 8,
  },
  maxLoanAmountText: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.6)',
  },
  inputTextAmount: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 8,
    marginVertical: 15,
  },
  icon: {
    height: 56,
    width: 48,
    justifyContent: 'flex-end',
    padding: 10,
  },
  commentBalance: {
    alignSelf: 'center',
    fontSize: 23,
    color: 'black',
    fontWeight: '500',
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
    marginVertical: 17,
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
  },
});
