import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import InputTextContainer from '../components/InputTextContainer';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';
import useAccount from '../hooks/useAccount';
import { useDispatch, useSelector } from 'react-redux';
import useData from '../hooks/useData';
import { setMovements } from '../redux/slices/MovementsSlice';
import { setAccount } from '../redux/slices/AccountSlice';
import { setImage } from '../redux/slices/ImagesSlice';
import { AppDispatch, RootState } from '../redux/storage/configStore';
import { AccountFullInterface } from '../hooks/interfaces/accountFullInterface';

const PaymentScreen = ({ navigation }: MyStackScreenProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { createMovement, getFullAccount } = useData();
  const { currencyFormat } = useAccount();
  const { account } = useSelector((state: RootState) => state.account);
  const { client } = useSelector((state: RootState) => state.client);
  const { getClientBySearch } = useData();
  const [searchInput, setSearchInput] = useState('');
  const [amountInput, setAmountInput] = useState('');
  const [reasonInput, setReasonInput] = useState('');
  const [incomeAccountId, setIncomeAccountId] = useState('');
  const [errorTextAmount, setErrorTextAmount] = useState('');

  const [isValidClient, setIsValidClient] = useState(true);
  const [isValidAmount, setIsValidAmount] = useState(true);
  const [isValidReason, setIsValidReason] = useState(true);

  const handleValidClientBySearch = async (search: string) => {
    const clientResponse = await getClientBySearch(search);
    if (
      clientResponse &&
      (clientResponse.email === search || clientResponse.phone === search)
    ) {
      setIsValidClient(true);
      setIncomeAccountId(clientResponse.account.id);
      if (
        clientResponse.email === client.email &&
        clientResponse.phone === client.phone
      ) {
        Alert.alert('You have entered an invalid email or phone number');
        setIsValidClient(false);
      }
    } else {
      setIsValidClient(false);
    }
  };

  const handleValidAmount = (limit: string, input: string) => {
    if (Number(input) <= Number(limit)) {
      setIsValidAmount(true);
      if (input === '') {
        setErrorTextAmount('Amount should not be empty');
        setIsValidAmount(false);
      }
    } else {
      setIsValidAmount(false);
      setErrorTextAmount('Amount exceeded the maximum transaction amount');
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

  const handlePayment = (): void => {
    createMovement({
      idIncome: incomeAccountId,
      idOutcome: account.id,
      reason: reasonInput,
      amount: Number(amountInput),
      fees: 1,
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
          setSearchInput('');
          setAmountInput('');
          setReasonInput('');
          setIncomeAccountId('');
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
      padding: 12,
      height: '100%',
    },
    maxLoanAmountContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 8,
    },
    inputTextAmount: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 8,
      marginVertical: 15,
    },
    commentBalance: {
      alignSelf: 'center',
      fontSize: 23,
      color: 'black',
      fontWeight: '500',
    },
    button: {
      width: '100%',
      height: 48,
      alignSelf: 'center',
      alignItems: 'center',
      backgroundColor:
        client && client.app.color !== '' ? client.app.color : '#1554F7',
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
    errorMessage: {
      fontSize: 12,
      fontWeight: '400',
      color: 'rgba(255, 0, 0, 0.6)',
      marginLeft: 72,
    },
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.balanceContainer}>
        <Text
          style={styles.balanceText}
          numberOfLines={1}
          adjustsFontSizeToFit={true}>
          {currencyFormat(Number(account.balance))}
        </Text>
        <Text style={styles.commentBalance}>Account balance</Text>
      </View>

      <InputTextContainer
        style={styles.maxLoanAmountContainer}
        iconName="person"
        placeHolder="User's email or phone number"
        handleOnChange={setSearchInput}
        value={searchInput}
        validateInput={e => handleValidClientBySearch(e.nativeEvent.text)}
      />
      {isValidClient ? null : (
        <Text style={styles.errorMessage}>User account does not exist</Text>
      )}
      <InputTextContainer
        style={styles.inputTextAmount}
        iconName="euro"
        placeHolder="Amount"
        handleOnChange={setAmountInput}
        value={amountInput}
        validateInput={e =>
          handleValidAmount(account.balance, e.nativeEvent.text)
        }
      />
      {isValidAmount ? null : (
        <Text style={styles.errorMessage}>{errorTextAmount}</Text>
      )}
      <InputTextContainer
        style={styles.inputTextAmount}
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
          onPress={() => handlePayment()}
          disabled={!isValidClient || !isValidAmount || !isValidReason}>
          <Text style={styles.buttonText}>Send payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentScreen;
