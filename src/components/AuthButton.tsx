import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';
import { View } from 'react-native';

interface Props {
  iconName: string;
  text: string;
  action?: () => void;
}
interface ImageProps {
  imageRequiere: ImageSourcePropType;
}

export const AuthButton = ({ iconName, text, action }: Props) => {
  let iconRequire: ImageProps = {
    imageRequiere: require('../assets/images/LogoGoogle.png'),
  };
  switch (iconName) {
    case 'logo-google':
      iconRequire = {
        imageRequiere: require('../assets/images/LogoGoogle.png'),
      };
      break;
    case 'logo-apple':
      iconRequire = {
        imageRequiere: require('../assets/images/LogoApple.png'),
      };
      break;
  }
  // if (iconName === 'logo-google') {
  //   iconRequire = { imageRequiere: require('../assets/images/LogoGoogle.png') };
  // } else if (iconName === 'logo-apple') {
  //   iconRequire = { imageRequiere: require('../assets/images/LogoGoogle.png') };
  // }

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => (action ? action() : null)}
      disabled={true}>
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={iconRequire.imageRequiere} />
      </View>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    height: 40,
    width: '75%',
    alignSelf: 'center',
    borderRadius: 4,
    borderColor: '#e5e5e5',
    borderWidth: 3,
    margin: 5,
    alignContent: 'space-around',
    paddingRight: 16,
  },
  btnText: {
    textAlignVertical: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.6)',
    fontWeight: '500',
    width: 197,
    textAlign: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    margin: 10,
  },
  iconContainer: {
    justifyContent: 'center',
  },
});
