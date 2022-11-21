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
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  date: {
    fontSize: 20,
    // fontWeight: 'bold',
    color: '#666666',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
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
    fontSize: 20,
    color: '#228922',
    fontWeight: 'bold',
  },
  outcomeAmount: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
  },
});
