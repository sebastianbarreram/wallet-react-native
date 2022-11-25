import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import useAccount from '../hooks/useAccount';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';
import InputTextContainer from '../components/InputTextContainer';

const LoansScreen = ({ navigation }: MyStackScreenProps) => {
  const { currencyFormat } = useAccount();
  return (
    <View style={styles.mainContainer}>
      <View style={{ ...styles.maxLoanAmountContainer, marginTop: 0 }}>
        <View style={styles.icon}>
          <Icon name="euro" size={24} color="rgba(0, 0, 0, 0.6)" />
        </View>

        <View>
          <Text style={styles.maxLoanAmountText}>Maximum loan amount</Text>
          <Text style={styles.balanceText}>{currencyFormat(50000000)}</Text>
        </View>
      </View>

      <InputTextContainer
        style={styles.maxLoanAmountContainer}
        iconName="credit-card"
        placeHolder="Amount"
      />
      {/* <View style={styles.maxLoanAmountContainer}>
        <View style={styles.icon}>
          <Icon name="credit-card" size={24} color="rgba(0, 0, 0, 0.6)" />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={'Amount'}
            placeholderTextColor="#rgba(0, 0, 0, 0.6)"
          />
        </View>
      </View> */}
      <InputTextContainer
        style={{ ...styles.maxLoanAmountContainer, marginVertical: 15 }}
        iconName="comment"
        placeHolder="Reason"
      />
      {/* <View style={{ ...styles.maxLoanAmountContainer, marginVertical: 15 }}>
        <View style={styles.icon}>
          <Icon name="comment" size={24} color="rgba(0, 0, 0, 0.6)" />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={'Reason'}
            placeholderTextColor="#rgba(0, 0, 0, 0.6)"
          />
        </View>
      </View> */}

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('My App')}>
          <Text style={styles.buttonText}>Apply for loan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoansScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    marginBottom: 150,
    padding: 12,
    height: '100%',
  },
  balanceText: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.6)',
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
    marginVertical: 17,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    height: 48,
    textAlignVertical: 'center',
    fontWeight: '500',
  },
});
