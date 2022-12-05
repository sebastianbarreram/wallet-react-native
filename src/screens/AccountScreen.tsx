import {
  View,
  Text,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Transaction from '../components/Transaction';
import { styles as globalStyles } from '../themes/WalletTheme';
import useAccount from '../hooks/useAccount';
import { AuthContext } from '../context/AuthContext';
import { useSelector } from 'react-redux';
import useData from '../hooks/useData';
import { MovementInterface } from '../redux/interfaces/MovementInterface';

const AccountScreen = ({ navigation }: any) => {
  const { client } = useSelector((state: any) => state.client);
  const { account } = useSelector((state: any) => state.account);
  const { getClient, getAccount } = useData();
  const { loggedIn, userData } = useContext(AuthContext);
  const [refreshing, setRefreshing] = useState(false);
  const image = 'https://reactjs.org/logo-og.png';

  useEffect(() => {
    if (loggedIn === false) {
      //   navigation.dispatch(StackActions.replace('Login'));
      navigation.navigate('Launch');
    }
  }, [loggedIn, navigation]);

  useEffect(() => {
    getClient(userData.email);
  }, [userData.email]);

  useEffect(() => {
    getAccount(client.id);
    setRefreshing(false);
  }, [client.id]);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    // wait(2000).then(() => setRefreshing(false));
    await getAccount(client.id);
    setRefreshing(false);
  }, []);

  const joinArrays = (
    array1: MovementInterface[],
    array2: MovementInterface[],
  ) => {
    const ids = new Set(array1.map(element => element.id));
    const transactions: MovementInterface[] = [
      ...array1,
      ...array2.filter(item => !ids.has(item.id)),
    ];
    return transactions;
  };

  const renderTransactions = ({
    item,
  }: ListRenderItemInfo<MovementInterface>) => {
    var income: string = '';
    if (item.idIncome !== item.idOutcome && account.id === item.idOutcome) {
      income = '';
    } else {
      income = item.idIncome;
    }

    return (
      <Transaction
        title={item.reason}
        amount={item.amount}
        id={item.id}
        image={image}
        date={item.date}
        income={income}
      />
    );
  };

  const { currencyFormat } = useAccount();

  return (
    <View style={styles.container}>
      {refreshing ? <ActivityIndicator /> : null}
      <View style={globalStyles.circle} />
      <View style={globalStyles.balanceContainer}>
        <Text
          style={globalStyles.balanceText}
          numberOfLines={1}
          adjustsFontSizeToFit={true}>
          {currencyFormat(Number(account.balance))}
        </Text>
        <Text style={styles.balanceText}>Balance in your account</Text>
      </View>

      {/* <Transaction
        title={account.movementsIncome[0].reason}
        amount={account.movementsIncome[0].amount}
        id={account.movementsIncome[0].id}
        image={client.photo}
        date={account.movementsIncome[0].date}
        income={account.movementsIncome[0].idIncome}
      /> */}

      <FlatList
        data={joinArrays(account.movementsIncome, account.movementsOutcome)}
        renderItem={renderTransactions}
        keyExtractor={movement => movement.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 170,
  },
  balanceText: {
    marginLeft: 55,
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.74)',
  },
});
