import { ClientInterface } from '../redux/interfaces/ClientInterface';
import { setImage } from '../redux/slices/ImagesSlice';
import { AccountInterface } from '../redux/interfaces/AccountInterface';
import { MovementInterface } from '../redux/interfaces/MovementInterface';
import { AccountGetByIdInterface } from './interfaces/accountGetByIdInterface';

const useData = () => {
  const getClient = async (
    search: string,
  ): Promise<ClientInterface | undefined> => {
    console.log('search :>> ', search);
    try {
      const response: Response = await fetch(
        `http://192.168.1.3:3000/api/client/search/${search}`,
      );
      const client: ClientInterface = await response.json();
      // dispatch(setClient(json));
      return client;
    } catch (error) {
      console.log('error', error);
    }
  };

  const getAccount = async (
    id: string,
  ): Promise<AccountInterface | undefined> => {
    console.log('id getAccount', id);
    try {
      const response: Response = await fetch(
        `http://192.168.1.3:3000/api/account/${id}`,
      );
      const account: AccountInterface = await response.json();
      return account;
    } catch (error) {
      console.log('error', error);
    }
  };

  const postClient = async (
    data: any,
  ): Promise<ClientInterface | undefined> => {
    const requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    try {
      const responsePost: Response = await fetch(
        'http://192.168.1.3:3000/api/client/signup',
        requestOptions,
      );
      const bodyResponsePost: ClientInterface = await responsePost.json();
      return bodyResponsePost;
    } catch (error) {
      console.log('error', error);
    }
  };

  const getMovements = async (
    id: string,
  ): Promise<MovementInterface | undefined> => {
    console.log('id getMovements', id);
    try {
      const response: Response = await fetch(
        `http://192.168.1.3:3000/api/account/movements/${id}`,
      );
      const movements: MovementInterface = await response.json();
      return movements;
    } catch (error) {}
  };

  const getClientImage = async (
    id: string,
  ): Promise<AccountGetByIdInterface[] | undefined> => {
    console.log('id getClientImage', id);
    try {
      const response: Response = await fetch(
        `http://192.168.1.3:3000/api/account/images/${id}`,
      );
      const clientImages = await response.json();
      return clientImages;
    } catch (error) {}
  };

  return {
    getClient,
    getAccount,
    postClient,
    getMovements,
    getClientImage,
  };
};

export default useData;
