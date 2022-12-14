import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import ThemeButton from '../components/ThemeButton';
import { MyStackScreenProps } from '../interfaces/MyStackScreenProps';
import { AppInterface } from '../redux/interfaces/AppInterface';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/storage/configStore';
import useData from '../hooks/useData';
import { ClientInterface } from '../redux/interfaces/ClientInterface';
import { setClient } from '../redux/slices/ClientSlice';

const ThemeOptionsScreen = ({ navigation }: MyStackScreenProps) => {
  const [color, setColor] = useState('');
  const { client } = useSelector((state: RootState) => state.client);
  const { token } = useSelector((state: RootState) => state.token);
  const { updateApp, getClient } = useData();
  const dispatch = useDispatch();

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
      backgroundColor:
        client && client.app.color !== '' ? client.app.color : '#1554F7',
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
    colorBar: {
      width: '98%',
      height: 10,
      alignSelf: 'center',
      backgroundColor: color,
      borderRadius: 10,
    },
  });

  const handleClick = async (colorTheme: string) => {
    const app: AppInterface = {
      id: '',
      idClient: '',
      color: colorTheme,
      createdAt: null,
      updatedAt: null,
    };
    const response = await updateApp(client.id, app, token);
    const getClientResponse: ClientInterface | undefined = await getClient(
      client.email,
    );
    if (getClientResponse) {
      dispatch(setClient(getClientResponse));
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Choose your theme</Text>
      <Text style={styles.paragraph}>
        You can always change this at any time
      </Text>
      <View style={styles.colorBar} />
      <View style={styles.row}>
        <ThemeButton
          text="Arts & Culture"
          image="arts&culture"
          action={() => setColor('#d99a6c')}
        />
        <ThemeButton
          text="Food & Drinks"
          image="food&drinks"
          action={() => setColor('#ee9a12')}
        />
        <ThemeButton
          text="Gaming"
          image="gaming"
          action={() => setColor('#b38cfb')}
        />
      </View>
      <View style={styles.row}>
        <ThemeButton
          text="Music"
          image="music"
          action={() => setColor('#b40900')}
        />
        <ThemeButton
          text="Nature"
          image="nature"
          action={() => setColor('#008f39')}
        />
        <ThemeButton
          text="Activity"
          image="activity"
          action={() => setColor('#0084cf')}
        />
      </View>
      <View style={styles.row}>
        <ThemeButton
          text="Fashion"
          image="fashion"
          action={() => setColor('#f81895')}
        />
        <ThemeButton
          text="Technology"
          image="technology"
          action={() => setColor('#99989d')}
        />
        <ThemeButton
          text="Travel"
          image="travel"
          action={() => setColor('#21c4cb')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.cancelbutton}
          onPress={() => navigation.navigate('Home')}>
          <Text style={{ ...styles.buttonText, color: 'black' }}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleClick(color)}>
          <Text style={styles.buttonText}>Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ThemeOptionsScreen;
