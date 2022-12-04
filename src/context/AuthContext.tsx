import React, { useState, useEffect } from 'react';
import Auth0 from 'react-native-auth0';
import SInfo from 'react-native-sensitive-info';
import jwtDecode from 'jwt-decode';
import { Alert } from 'react-native';
import useData from '../hooks/useData';
import { useSelector } from 'react-redux';

const auth0 = new Auth0({
  domain: 'dev-ekzvwhhuz1fzlqp0.us.auth0.com',
  clientId: 't2s6ES8frJheJIUz2P8weZGZo7JtYk1A',
});

const AuthContextProvider = (props: any) => {
  const [loading] = useState(true);
  const [loggedIn, setLoggedIn] = useState<boolean>();
  const [userData, setUserData] = useState<
    | {
        name: string;
        picture: string;
      }
    | undefined
  >();
  const { getClient, postClient } = useData();
  const { client } = useSelector((state: any) => state.client);

  useEffect(() => {
    (async () => {
      try {
        if (loggedIn) {
          const user_data = await getUserData();
          if (user_data) {
            setLoggedIn(true);
            setUserData(user_data);
          }
        }
      } catch (err) {
        Alert.alert('Error logging in');
      }
    })();
  }, [loggedIn]);

  useEffect(() => {
    (async () => {
      try {
        const user_data = await getUserData();
        if (user_data) {
          setLoggedIn(true);
          setUserData(user_data);
        }
      } catch (err) {
        setLoggedIn(false);
      }
    })();
  }, []);

  const getUserData = async (id?: string) => {
    // Saco el token del SInfo, algo que deberíamos cambiar por el Redux
    const idToken = id ? id : await SInfo.getItem('idToken', {});
    // Decodifico el token (JWT)
    const { name, picture, exp, email } = jwtDecode<any>(idToken);
    const data = jwtDecode<any>(idToken);
    console.log('data JWT', JSON.stringify(data, null, 2));
    // postClient();

    await getClient(data.email);
    console.log('body response', client);
    if (client && 'message' in client && client.statusCode === 404) {
      console.log('responseError', client);

      await postClient({
        fullName: data.name,
        email: data.email,
        phone: '3',
        photo: data.picture,
      });
    }

    if (exp < Date.now() / 1000) {
      throw new Error('ID token expired!');
    }
    return {
      name,
      picture,
      email,
    };
  };

  const login = async () => {
    try {
      const credentials = await auth0.webAuth.authorize({
        scope: 'openid email profile',
      });
      // Aquí se obtiene el token JWT
      await SInfo.setItem('idToken', credentials.idToken, {});
      // Se obtiene la información del usuario
      const user_data = await getUserData(credentials.idToken);
      setLoggedIn(true);
      setUserData(user_data);
    } catch (err) {
      Alert.alert('Error logging in: ' + err);
    }
  };

  const logout = async () => {
    try {
      // Limpiando la sesión en Auth0
      await auth0.webAuth.clearSession();
      // Limpiando la sesión. En nuestro caso sería en el Redux
      await SInfo.deleteItem('idToken', {});
      setLoggedIn(false);
      setUserData(undefined);
    } catch (err) {
      console.log(err);
      Alert.alert('Error logging in');
    }
  };
  const value = {
    loading,
    loggedIn,
    login,
    logout,
    userData,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

const AuthContext = React.createContext<any>(null);

export { AuthContext, AuthContextProvider };
