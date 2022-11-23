import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { MyDrawerScreenProps } from '../interfaces/MyDrawerScreenProps';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const SideMenuScreen = ({ navigation }: MyDrawerScreenProps) => {
  const avatarImage = 'https://reactjs.org/logo-og.png';
  const nombre = 'Sutanita Mejía';
  return (
    <View>
      <Image
        source={{ uri: avatarImage }}
        // source={require('../assets/images/9E2.jpg')}
        style={{
          width: 120,
          height: 120,
          borderRadius: 600,
          alignSelf: 'center',
          margin: 10,
          marginTop: 30,
        }}
      />
      <Text
        style={{
          fontSize: 23,
          alignSelf: 'center',
          fontWeight: '500',
          color: 'black',
          marginBottom: 60,
        }}>
        {nombre}
      </Text>
      <Button
        title="Ir a Pantalla 1"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Ir a Pantalla 2"
        onPress={() => navigation.navigate('Loans')}
      />
      <Button
        title="Ir a Pantalla 3"
        onPress={() => navigation.navigate('Payment')}
      />
      <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="settings" size={22} />
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'Roboto-Medium',
              marginLeft: 5,
            }}>
            Sign Out
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="bookmark" size={22} />
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'Roboto-Medium',
              marginLeft: 5,
            }}>
            Sign Out
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="logout" size={22} />
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'Roboto-Medium',
              marginLeft: 5,
            }}>
            Sign Out
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
