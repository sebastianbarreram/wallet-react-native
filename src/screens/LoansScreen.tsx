import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import useAccount from '../hooks/useAccount';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';
import InputTextContainer from '../components/InputTextContainer';
import { useDispatch, useSelector } from 'react-redux';
import useData from '../hooks/useData';
import { AppDispatch, RootState } from '../redux/storage/configStore';
import { AccountFullInterface } from '../hooks/interfaces/accountFullInterface';
import { setMovements } from '../redux/slices/MovementsSlice';
import { setAccount } from '../redux/slices/AccountSlice';
import { setImage } from '../redux/slices/ImagesSlice';

const LoansScreen = ({ navigation }: MyStackScreenProps) => {
  const { currencyFormat } = useAccount();
  const { account } = useSelector((state: RootState) => state.account);
  const { client } = useSelector((state: RootState) => state.client);
  const { createMovement, getFullAccount } = useData();
  const [amountInput, setAmountInput] = useState('');
  const [reasonInput, setReasonInput] = useState('');
  const [errorTextAmount, setErrorTextAmount] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const [isValidAmount, setIsValidAmount] = useState(true);
  const [isValidReason, setIsValidReason] = useState(true);

  const handleValidAmount = (limit: string, input: string) => {
    if (Number(input) <= Number(limit)) {
      setIsValidAmount(true);
      if (input === '') {
        setErrorTextAmount('Amount should not be empty');
        setIsValidAmount(false);
      }
    } else {
      setIsValidAmount(false);
      setErrorTextAmount('Authorized amount has been exceeded');
      if (Number.isNaN(Number(input))) {
        setErrorTextAmount('Amount is not a number');
      }
    }
  };

  const handleValidReason = (input: string) => {
    if (input !== '') {
      setIsValidReason(true);
    } else {
      setIsValidReason(false);
    }
  };

  const handleLoan = () => {
    createMovement({
      idIncome: account.id,
      idOutcome: account.id,
      reason: reasonInput,
      amount: Number(amountInput),
      fees: 60,
    })
      .then(movementResponse => {
        if (movementResponse) {
          getFullAccount(account.idClient).then(
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
              }
            },
          );
          setAmountInput('');
          setReasonInput('');
          navigation.navigate('My App');
        }
      })
      .catch((error: unknown) => {
        console.log('error :>> ', error);
        Alert.alert('We have problems applying for loan');
      });
  };

  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: 'white',
      marginBottom: 150,
      padding: 12,
      height: '100%',
    },
    containerLoan: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 8,
      marginTop: 0,
    },
    lastInput: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 8,
      marginVertical: 15,
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
      backgroundColor: client.app.color,
      marginVertical: 17,
      borderRadius: 4,
    },
    buttonText: {
      color: 'white',
      height: 48,
      textAlignVertical: 'center',
      fontWeight: '500',
    },
    errorMessage: {
      fontSize: 12,
      fontWeight: '400',
      color: 'rgba(255, 0, 0, 0.6)',
      marginLeft: 72,
    },
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerLoan}>
        <View style={styles.icon}>
          <Icon name="euro" size={24} color="rgba(0, 0, 0, 0.6)" />
        </View>

        <View>
          <Text style={styles.maxLoanAmountText}>Maximum loan amount</Text>
          <Text style={styles.balanceText}>
            {currencyFormat(Number(account.credit))}
          </Text>
        </View>
      </View>

      <InputTextContainer
        style={styles.maxLoanAmountContainer}
        iconName="credit-card"
        placeHolder="Amount"
        handleOnChange={setAmountInput}
        value={amountInput}
        validateInput={e =>
          handleValidAmount(account.credit, e.nativeEvent.text)
        }
      />
      {isValidAmount ? null : (
        <Text style={styles.errorMessage}>{errorTextAmount}</Text>
      )}
      <InputTextContainer
        style={styles.lastInput}
        iconName="comment"
        placeHolder="Reason"
        handleOnChange={setReasonInput}
        value={reasonInput}
        validateInput={e => handleValidReason(e.nativeEvent.text)}
      />
      {isValidReason ? null : (
        <Text style={styles.errorMessage}>Reason should not be empty</Text>
      )}
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleLoan()}
          disabled={!isValidAmount || !isValidReason}>
          <Text style={styles.buttonText}>Apply for loan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoansScreen;
