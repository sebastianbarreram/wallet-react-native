import { Image } from 'react-native';
import React from 'react';
import { styles } from '../themes/WalletTheme';

interface Props {
  size?: string;
}

const Logo = ({ size }: Props) => {
  return (
    <Image
      style={{
        ...(size ? { ...styles.logo, width: size, height: size } : styles.logo),
      }}
      source={require('../assets/images/LogoWallet.png')}
    />
  );
};

export default Logo;
