import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  transaction: {
    // backgroundColor: '#f9c2ff',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  reason: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    paddingRight: 5,
  },
  date: {
    fontSize: 18,
    // fontWeight: 'bold',
    color: '#666666',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    // backgroundColor: 'green',
  },
  amountContainer: {
    flex: 1,
    backgroundColor: 'green',
  },
  incomeAmount: {
    fontSize: 18,
    color: '#228922',
    fontWeight: 'bold',
  },
  outcomeAmount: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
  },
  balanceText: {
    fontSize: 60,
    color: 'black',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 20,
    paddingBottom: 0,
  },
  balanceContainer: {
    height: 150,
    alignItems: 'stretch',
    // backgroundColor: 'green',
  },
  logo: {
    width: 140,
    height: 140,
  },
  containerLaunchScreen: {
    backgroundColor: 'white',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleAppLaunchScreen: {
    color: 'black',
    fontSize: 30,
    fontWeight: '400',
    position: 'absolute',
    bottom: '8.75%',
  },
});
