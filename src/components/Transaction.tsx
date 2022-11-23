import { View, Text, Image } from 'react-native';
import React from 'react';
import { styles } from '../themes/WalletTheme';

interface Props {
  id: string;
  title: string;
  amount: string;
  image: string;
  date: string;
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
  const currencyFormat = (number: string) => {
    return (
      '$' +
      Number(number)
        .toFixed(0)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    );
  };
  return (
    <View style={styles.transaction}>
      <View>
        <Image
          source={{ uri: image }}
          // source={require('../assets/images/9E2.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.reason} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.date}>{date}</Text>
      </View>

      <Text
        style={{
          ...(income === '' ? styles.outcomeAmount : styles.incomeAmount),
        }}>
        {currencyFormat(amount)}
      </Text>
    </View>
  );
};

export default Transaction;
