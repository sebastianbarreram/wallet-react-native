import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';

interface Props {
  text: string;
  image: string;
}
interface ImageProps {
  imageRequire: ImageSourcePropType;
}
const ThemeButton = ({ text, image }: Props) => {
  let iconRequire: ImageProps = {
    imageRequire: require('../assets/images/arts&culture.png'),
  };
  switch (image) {
    case 'arts&culture':
      iconRequire = {
        imageRequire: require('../assets/images/arts&culture.png'),
      };
      break;
    case 'food&drinks':
      iconRequire = {
        imageRequire: require('../assets/images/food&drinks.png'),
      };
      break;
    case 'gaming':
      iconRequire = {
        imageRequire: require('../assets/images/gaming.png'),
      };
      break;
    case 'music':
      iconRequire = {
        imageRequire: require('../assets/images/music.png'),
      };
      break;
    case 'nature':
      iconRequire = {
        imageRequire: require('../assets/images/nature.png'),
      };
      break;
    case 'activity':
      iconRequire = {
        imageRequire: require('../assets/images/activity.png'),
      };
      break;
    case 'fashion':
      iconRequire = {
        imageRequire: require('../assets/images/fashion.png'),
      };
      break;
    case 'technology':
      iconRequire = {
        imageRequire: require('../assets/images/technology.png'),
      };
      break;
    case 'travel':
      iconRequire = {
        imageRequire: require('../assets/images/travel.png'),
      };
      break;
  }
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={{ width: 40, height: 40 }}
        source={iconRequire.imageRequire}
      />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ThemeButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(241, 243, 244, 1)',
    width: 104,
    height: 144.67,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 0.6)',
    marginTop: 8,
  },
});
