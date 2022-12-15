import { ClientInterface } from '../redux/interfaces/ClientInterface';
import { MovementInterface } from '../redux/interfaces/MovementInterface';
import { AccountFullInterface } from './interfaces/accountFullInterface';
import { ClientPostInterface } from './interfaces/clientPostInterface';
import { MovementPostInterface } from './interfaces/movementPostInterface';
import { AppInterface } from '../redux/interfaces/AppInterface';

const useData = () => {
  // const localhost = '192.168.102.223'; //sofka
  const localhost = '192.168.1.3'; //casa

  const getClient = async (
    search: string,
    token: string,
  ): Promise<ClientInterface | undefined> => {
    try {
      const response: Response = await fetch(
        `http://${localhost}:3000/api/client/search/${search}`,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      const client: ClientInterface = await response.json();
      return client;
    } catch (error) {
      console.log('error', error);
    }
  };

  const postClient = async (
    data: ClientPostInterface,
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
        `http://${localhost}:3000/api/client/signup`,
        requestOptions,
      );
      const bodyResponsePost: ClientInterface = await responsePost.json();
      return bodyResponsePost;
    } catch (error) {
      console.log('error', error);
    }
  };

  const getFullAccount = async (
    id: string,
    token: string,
  ): Promise<AccountFullInterface | undefined> => {
    try {
      const response: Response = await fetch(
        `http://${localhost}:3000/api/account/full/${id}`,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      const clientImages = await response.json();
      return clientImages;
    } catch (error) {}
  };

  const createMovement = async (data: MovementPostInterface, token: string) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    };
    try {
      const responsePost: Response = await fetch(
        `http://${localhost}:3000/api/movement`,
        requestOptions,
      );
      const bodyResponseCreateMovement: MovementInterface =
        await responsePost.json();
      return bodyResponseCreateMovement;
    } catch (error) {
      console.log('error :>> ', error);
    }
  };

  const getClientBySearch = async (
    search: string,
    token: string,
  ): Promise<ClientInterface | undefined> => {
    try {
      const response: Response = await fetch(
        `http://${localhost}:3000/api/client/search/${search}`,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      const client: ClientInterface = await response.json();
      return client;
    } catch (error) {
      console.log('error', error);
    }
  };

  const updateApp = async (
    id: string,
    data: AppInterface,
    token: string,
  ): Promise<AppInterface | undefined> => {
    const requestOptions = {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    };
    try {
      const response: Response = await fetch(
        `http://${localhost}:3000/api/app/${id}`,
        requestOptions,
      );
      const app: AppInterface = await response.json();
      return app;
    } catch (error) {
      console.log('error :>> ', error);
    }
  };

  return {
    getClient,
    postClient,
    getFullAccount,
    createMovement,
    getClientBySearch,
    updateApp,
  };
};

export default useData;
