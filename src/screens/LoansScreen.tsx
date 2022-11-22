import { View, Text, Button } from 'react-native';
import React from 'react';
import { MyDrawerScreenProps } from '../interfaces/MyDrawerScreenProps';

const LoansScreen = ({ navigation }: MyDrawerScreenProps) => {
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
