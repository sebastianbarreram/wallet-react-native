import React, { useState, useEffect } from 'react';
import Auth0 from 'react-native-auth0';
import SInfo from 'react-native-sensitive-info';
import jwtDecode from 'jwt-decode';
import { Alert } from 'react-native';
import useData from '../hooks/useData';
import { useDispatch, useSelector } from 'react-redux';
import { setClient } from '../redux/slices/ClientSlice';
import { ClientInterface } from '../redux/interfaces/ClientInterface';
import { setAccount } from '../redux/slices/AccountSlice';
import { setImage } from '../redux/slices/ImagesSlice';
import { setMovements } from '../redux/slices/MovementsSlice';
import { RootState } from '../redux/storage/configStore';
import { setToken } from '../redux/slices/TokenSlice';

const auth0 = new Auth0({
  domain: 'dev-ekzvwhhuz1fzlqp0.us.auth0.com',
  clientId: 't2s6ES8frJheJIUz2P8weZGZo7JtYk1A',
});

const AuthContextProvider = (props: any) => {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState<boolean>();
  const [userData, setUserData] = useState<
    | {
        name: string;
        picture: string;
      }
    | undefined
  >();
  const { getClient, getFullAccount } = useData();
  const { client } = useSelector((state: RootState) => state.client);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        if (loggedIn) {
          const user_data = await getUserData();
          if (user_data) {
            if (
              client.id !== '' &&
              client.id !== null &&
              client.id !== undefined
            ) {
              const responseAccountFull = await getFullAccount(client.id);
              if (
                responseAccountFull &&
                responseAccountFull.account.id !== null &&
                responseAccountFull.account.id !== undefined &&
                responseAccountFull.account.id !== ''
              ) {
                dispatch(setAccount(responseAccountFull.account));
                dispatch(setImage(responseAccountFull.images));
                dispatch(setMovements(responseAccountFull.movements));
              }
            }
            setLoading(true);
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
          setLoading(false);
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
    dispatch(setToken(idToken));

    let getClientResponse: ClientInterface | undefined = await getClient(
      data.email,
    );
    if (getClientResponse) {
      dispatch(setClient(getClientResponse));
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
      setLoading(false);
      setLoggedIn(true);
      setUserData(user_data);
    } catch (err) {
      console.log('err login :>> ', err);
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
      setAccount({
        id: '',
        idClient: '',
        balance: '',
        credit: '',
        state: 0,
        createdAt: null,
        updatedAt: null,
        deletedAt: null,
        movementsIncome: [],
        movementsOutcome: [],
      });
      setImage([]);
      setClient({
        id: '',
        fullName: '',
        email: '',
        phone: '',
        photo: 'https://reactjs.org/logo-og.png',
        state: 1,
        createdAt: null,
        updatedAt: null,
        account: {
          id: '',
          idClient: '',
          balance: '',
          credit: '',
          state: 0,
          createdAt: null,
          updatedAt: null,
          deletedAt: null,
          movementsIncome: [],
          movementsOutcome: [],
        },
        app: {
          id: '',
          idClient: '',
          color: '',
          createdAt: null,
          updatedAt: null,
        },
      });
    } catch (err) {
      console.log('err', err);
      Alert.alert('Error logging in ' + err);
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
