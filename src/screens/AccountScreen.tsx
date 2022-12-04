import {
  View,
  Text,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Transaction from '../components/Transaction';
import { styles as globalStyles } from '../themes/WalletTheme';
import useAccount from '../hooks/useAccount';
import { AuthContext } from '../context/AuthContext';
import { ClientInterface } from '../redux/interfaces/ClientInterface';
import { useSelector } from 'react-redux';
import useData from '../hooks/useData';

interface Movement {
  id: string;
  title: string;
  amount: string;
  image: string;
  date: string;
  income: string;
  outcome: string;
}

const timeElapsed: number = Date.now();
const today = new Date(timeElapsed);

const movements: Movement[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    amount: '5000000',
    image: 'https://reactjs.org/logo-og.png',
    date: today.toUTCString(),
    income: 'Sebas',
    outcome: '',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    amount: '10000',
    image: 'https://reactjs.org/logo-og.png',
    date: today.toUTCString(),
    income: '',
    outcome: 'Sebas',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    amount: '22000',
    image: 'https://reactjs.org/logo-og.png',
    date: today.toUTCString(),
    income: 'Santi',
    outcome: '',
  },
  {
    id: '58656djf-3da1-471f-bd96-145571e29d72',
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem optio dolorum temporibus',
    amount: '100000000',
    image: 'https://reactjs.org/logo-og.png',
    date: today.toUTCString(),
    income: 'Santi',
    outcome: '',
  },
  {
    id: '3bd91aa97f63',
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem optio dolorum temporibus',
    amount: '10000',
    image: 'https://reactjs.org/logo-og.png',
    date: today.toUTCString(),
    income: '',
    outcome: 'Sebas',
  },
  {
    id: '3af8-fbd91aa97f63',
    title: 'Second Item',
    amount: '10000',
    image: 'https://reactjs.org/logo-og.png',
    date: today.toUTCString(),
    income: '',
    outcome: 'Sebas',
  },
  {
    id: '3ac68afc-fbd91aa97f63',
    title: 'Second Item',
    amount: '960000',
    image: 'https://reactjs.org/logo-og.png',
    date: today.toUTCString(),
    income: '',
    outcome: 'Sebas',
  },
  {
    id: '3ac68afcaa97f63',
    title: 'Second Item',
    amount: '198640',
    image: 'https://reactjs.org/logo-og.png',
    date: today.toUTCString(),
    income: '',
    outcome: 'Sebas',
  },
  {
    id: 'bd7acbea-c1b1-46c3abb28ba',
    title: 'First Item',
    amount: '860000',
    image: 'https://reactjs.org/logo-og.png',
    date: today.toUTCString(),
    income: 'Sebas',
    outcome: '',
  },
  {
    id: '3ac68afc91aa97f63',
    title: 'Second Item',
    amount: '50000',
    image: 'https://reactjs.org/logo-og.png',
    date: today.toUTCString(),
    income: '',
    outcome: 'Sebas',
  },
  {
    id: '3ac68c91aa97f63',
    title: 'Second Item',
    amount: '50000',
    image: 'https://reactjs.org/logo-og.png',
    date: today.toUTCString(),
    income: '',
    outcome: 'Sebas',
  },
];

interface getClientError {
  message: string;
  statusCode: number;
}

const AccountScreen = ({ navigation }: any) => {
  const { client } = useSelector((state: any) => state.client);
  const { getClient, getAccount } = useData();
  const { loggedIn, userData } = useContext(AuthContext);

  const [response, setResponse] = useState<ClientInterface | getClientError>();

  useEffect(() => {
    if (loggedIn === false) {
      //   navigation.dispatch(StackActions.replace('Login'));
      navigation.navigate('Launch');
    }
  }, [loggedIn, navigation]);

  useEffect(() => {
    getClient(userData.email);
    console.log('hizo el get');
  }, [userData.email]);

  useEffect(() => {
    getAccount(client.id);
  }, [client.id]);

  const renderTransactions = ({ item }: ListRenderItemInfo<Movement>) => (
    <Transaction
      title={item.title}
      amount={item.amount}
      id={item.id}
      image={item.image}
      date={item.date}
      income={item.income}
    />
  );

  const { currencyFormat } = useAccount();

  return (
    <View style={styles.container}>
      <View style={globalStyles.circle} />
      <View style={globalStyles.balanceContainer}>
        <Text
          style={globalStyles.balanceText}
          numberOfLines={1}
          adjustsFontSizeToFit={true}>
          {currencyFormat(180576070)}
        </Text>
        <Text style={styles.balanceText}>Balance in your account</Text>
      </View>
      <FlatList
        data={movements}
        renderItem={renderTransactions}
        keyExtractor={movement => movement.id}
      />
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 150,
  },
  balanceText: {
    marginLeft: 55,
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.74)',
  },
});
