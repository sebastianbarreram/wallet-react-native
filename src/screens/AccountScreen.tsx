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
import { useDispatch, useSelector } from 'react-redux';
import useData from '../hooks/useData';
import { MovementInterface } from '../redux/interfaces/MovementInterface';
import { setMovements } from '../redux/slices/MovementsSlice';
import { AppDispatch, RootState } from '../redux/storage/configStore';
import { setAccount } from '../redux/slices/AccountSlice';
import { setImage } from '../redux/slices/ImagesSlice';
import { AccountFullInterface } from '../hooks/interfaces/accountFullInterface';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';

const AccountScreen = ({ navigation }: MyStackScreenProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const { client } = useSelector((state: RootState) => state.client);
  const { account } = useSelector((state: RootState) => state.account);
  const { images } = useSelector((state: RootState) => state.images);
  const { token } = useSelector((state: RootState) => state.token);
  const { getFullAccount } = useData();
  const { loggedIn } = useContext(AuthContext);
  const [refreshing, setRefreshing] = useState(false);
  let image = 'https://reactjs.org/logo-og.png';

  useEffect(() => {
    if (loggedIn === false) {
      navigation.navigate('Launch');
    }
  }, [loggedIn, navigation]);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    if (client.id !== '' && movements) {
      getFullAccount(client.id, token).then(
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
      for (const element of images) {
        if (element.id === item.idIncome) {
          image = element.photo;
        }
      }
    } else if (item.idIncome === item.idOutcome) {
      income = item.idIncome;
      // image = 'https://reactjs.org/logo-og.png';
      image = 'https://i.postimg.cc/ryPFBkm1/Logo-Wallet.jpg';
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
  const { movements, loading } = useSelector(
    (state: RootState) => state.movements,
  );
  const movementsFix = movements.map((movement): MovementInterface => {
    const newMovement: MovementInterface = {
      id: movement.id,
      idIncome: movement.idIncome,
      idOutcome: movement.idOutcome,
      reason: movement.reason,
      amount: movement.amount,
      fees: movement.fees,
      date: new Date(movement.date),
    };
    return newMovement;
  });

  const sortedMovements = movementsFix.sort(
    (objA, objB) => objB.date.getTime() - objA.date.getTime(),
  );

  if (loading && account.id === '' && client) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.container}>
      {refreshing ? <ActivityIndicator /> : null}
      <View
        style={
          globalStyles({
            color:
              client && client.app.color === '' ? '#1554F7' : client.app.color,
          }).circle
        }
      />
      <View
        style={
          globalStyles({
            color:
              client && client.app.color === '' ? '#1554F7' : client.app.color,
          }).balanceContainer
        }>
        <Text
          style={
            globalStyles({
              color:
                client && client.app.color === ''
                  ? '#1554F7'
                  : client.app.color,
            }).balanceText
          }
          numberOfLines={1}
          adjustsFontSizeToFit={true}>
          {currencyFormat(Number(account.balance))}
        </Text>
        <Text style={styles.balanceText}>Balance in your account</Text>
      </View>
      <View style={styles.containerMovements}>
        <FlatList
          data={sortedMovements}
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
    height: '100%',
    backgroundColor: 'white',
  },
  balanceText: {
    marginLeft: 55,
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.74)',
  },
  containerMovements: {
    flex: 1,
    backgroundColor: 'white',
  },
});
