import { View, Text, Button } from 'react-native';
import React from 'react';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';

const LoansScreen = ({ navigation }: MyStackScreenProps) => {
  return (
    <View>
      <Text>Loans</Text>
      <Button
        onPress={() => navigation.navigate('Payment')}
        title="Go to payment"
      />
    </View>
  );
};

export default LoansScreen;
