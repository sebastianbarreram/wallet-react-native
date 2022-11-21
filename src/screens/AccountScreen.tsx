import { View, Text, FlatList, ListRenderItemInfo } from 'react-native';
import React from 'react';
import Transaction from '../components/Transaction';

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
];

const AccountScreen = () => {
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
  return (
    <View>
      <Text>Home</Text>
      <FlatList
        data={movements}
        renderItem={renderTransactions}
        keyExtractor={movement => movement.id}
      />
    </View>
  );
};

export default AccountScreen;
