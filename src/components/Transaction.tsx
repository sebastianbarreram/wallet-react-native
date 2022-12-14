import { View, Text, Image } from 'react-native';
import React from 'react';
import { styles } from '../themes/WalletTheme';
import useAccount from '../hooks/useAccount';
import { RootState } from '../redux/storage/configStore';
import { useSelector } from 'react-redux';

interface Props {
  id: string;
  title: string;
  amount: string;
  image: string;
  date: Date;
  income?: string;
  outcome?: string;
}

const Transaction = ({
  title,
  amount,
  image,
  date,
  income,
  outcome,
}: Props) => {
  const { currencyFormat, dateFormat } = useAccount();
  const { client } = useSelector((state: RootState) => state.client);

  return (
    <View style={styles({ color: client.app.color }).transaction}>
      <View>
        <Image
          source={{ uri: image }}
          // source={require('../assets/images/9E2.jpg')}
          style={styles({ color: client.app.color }).image}
        />
      </View>
      <View style={styles({ color: client.app.color }).textContainer}>
        <Text
          style={styles({ color: client.app.color }).reason}
          numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles({ color: client.app.color }).date}>
          {dateFormat(date)}
        </Text>
      </View>

      <Text
        style={{
          ...(income === ''
            ? styles({ color: client.app.color }).outcomeAmount
            : styles({ color: client.app.color }).incomeAmount),
        }}>
        {currencyFormat(Number(amount))}
      </Text>
    </View>
  );
};

export default Transaction;
