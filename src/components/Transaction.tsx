import { View, Text, Image } from 'react-native';
import React from 'react';
import { styles } from '../themes/WalletTheme';
import useAccount from '../hooks/useAccount';

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
        <Text style={styles.date}>{dateFormat(date)}</Text>
      </View>

      <Text
        style={{
          ...(income === '' ? styles.outcomeAmount : styles.incomeAmount),
        }}>
        {currencyFormat(Number(amount))}
      </Text>
    </View>
  );
};

export default Transaction;
