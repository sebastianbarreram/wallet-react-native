import {
  View,
  Text,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  RefreshControl,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Transaction from '../components/Transaction';
import { styles as globalStyles } from '../themes/WalletTheme';
import useAccount from '../hooks/useAccount';
import { AuthContext } from '../context/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
import useData from '../hooks/useData';
import { MovementInterface } from '../redux/interfaces/MovementInterface';
import { fetchMovements } from '../redux/slices/MovementsSlice';
import { AppDispatch } from '../redux/storage/configStore';
import { setAccount } from '../redux/slices/AccountSlice';
import { setImage } from '../redux/slices/ImagesSlice';

const AccountScreen = ({ navigation }: any) => {
  const dispatch = useDispatch<AppDispatch>();

  const { client } = useSelector((state: any) => state.client);
  const { account } = useSelector((state: any) => state.account);
  const { images } = useSelector((state: any) => state.images);
  const { getAccount, getClientImage } = useData();
  const { loggedIn } = useContext(AuthContext);
  const [refreshing, setRefreshing] = useState(false);
  let image = 'https://reactjs.org/logo-og.png';
  console.log('client', client);

  useEffect(() => {
    if (loggedIn === false) {
      navigation.navigate('Launch');
    }
  }, [loggedIn, navigation]);

  // useEffect(() => {
  //   getAccount(client.id);
  //   setRefreshing(false);
  // }, [client.id]);

  useEffect(() => {
    console.log('images 1', images);
    dispatch(fetchMovements(account.id));
  }, [account.id, dispatch]);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    // wait(2000).then(() => setRefreshing(false));
    // console.log('account :>> ', account);
    if (account.id !== '' && client.id !== '') {
      dispatch(fetchMovements(account.id));
      const responseAccount = await getAccount(client.id);
      // console.log('responseAccount2', responseAccount);
      if (responseAccount && responseAccount.id !== '') {
        dispatch(setAccount(responseAccount));
        const responseClientImage = await getClientImage(account.id);
        if (responseClientImage && responseClientImage.length > 0) {
          dispatch(setImage(responseClientImage));
        }
      }
    }
    setRefreshing(false);
  }, []);

  const renderTransactions = ({
    item,
  }: ListRenderItemInfo<MovementInterface>) => {
    var income: string = '';
    if (
      item.idIncome !== item.idOutcome &&
      account.id === item.idOutcome &&
      images
    ) {
      income = '';
      // console.log('images2', images);
      for (const element of images) {
        if (element.id === item.idIncome) {
          image = element.photo;
        }
      }
      // image = images.get(item.idIncome);
    } else if (item.idIncome === item.idOutcome) {
      income = item.idIncome;
      image = 'https://reactjs.org/logo-og.png';
    } else {
      income = item.idIncome;
      for (const element of images) {
        if (element.id === item.idOutcome && images) {
          image = element.photo;
        }
      }
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
  const { movements, loading } = useSelector((state: any) => state.movements);
  if (loading && account.id === '' && client) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.container}>
      {/* <ScrollView
        contentContainerStyle={{ ...styles.container, marginBottom: 70 }}
        refreshControl={
          <RefreshControl refreshing={refreshing2} onRefresh={onRefresh} />
        }> */}
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
      {/* </ScrollView> */}
      <View style={styles.containerMovements}>
        <FlatList
          data={movements}
          renderItem={renderTransactions}
          keyExtractor={movement => movement.id}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
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
  containerMovements: {
    height: '80%',
    backgroundColor: 'white',
  },
});
