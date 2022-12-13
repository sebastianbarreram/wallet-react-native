import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import ThemeButton from '../components/ThemeButton';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';

const ThemeOptionsScreen = ({ navigation }: MyStackScreenProps) => {
  const [color, setColor] = useState('');
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Choose your theme</Text>
      <Text style={styles.paragraph}>
        You can always change this at any time
      </Text>
      <View style={styles.row}>
        <ThemeButton text="Arts & Culture" image="arts&culture" />
        <ThemeButton text="Food & Drinks" image="food&drinks" />
        <ThemeButton text="Gaming" image="gaming" />
      </View>
      <View style={styles.row}>
        <ThemeButton text="Music" image="music" />
        <ThemeButton text="Nature" image="nature" />
        <ThemeButton text="Activity" image="activity" />
      </View>
      <View style={styles.row}>
        <ThemeButton text="Fashion" image="fashion" />
        <ThemeButton text="Technology" image="technology" />
        <ThemeButton text="Travel" image="travel" />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.cancelbutton}
          onPress={() => navigation.navigate('Home')}>
          <Text style={{ ...styles.buttonText, color: 'black' }}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ThemeOptionsScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 16,
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 0.87)',
  },
  paragraph: {
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.6)',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 8,
  },
  button: {
    width: 160,
    height: 43,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#1554f6',
    marginTop: 17,
    borderRadius: 4,
  },
  cancelbutton: {
    width: 160,
    height: 43,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 17,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    height: 43,
    textAlignVertical: 'center',
    fontWeight: '500',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
