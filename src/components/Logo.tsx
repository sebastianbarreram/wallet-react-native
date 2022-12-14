import { Image } from 'react-native';
import React from 'react';
import { styles } from '../themes/WalletTheme';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/storage/configStore';

interface Props {
  size?: number;
}

const Logo = ({ size }: Props) => {
  const { client } = useSelector((state: RootState) => state.client);

  return (
    <Image
      style={{
        ...(size
          ? {
              ...styles({ color: client.app.color }).logo,
              width: size,
              height: size,
            }
          : styles({ color: client.app.color }).logo),
      }}
      source={require('../assets/images/LogoWallet.png')}
    />
  );
};

export default Logo;
