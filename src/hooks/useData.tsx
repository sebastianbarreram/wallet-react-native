import { useDispatch } from 'react-redux';
import { setAccount } from '../redux/slices/AccountSlice';
import { setClient } from '../redux/slices/ClientSlice';
import { setImage } from '../redux/slices/ImagesSlice';

const useData = () => {
  const dispatch = useDispatch();
  const getClient = (search: string) => {
    return fetch(`http://192.168.1.13:3000/api/client/search/${search}`)
      .then(res => {
        return res.json();
      })
      .then(json => {
        // console.log('json', json);
        dispatch(setClient(json));
      });
  };

  const getAccount = (id: string) => {
    // console.log('id', id);
    return fetch(`http://192.168.1.13:3000/api/account/${id}`)
      .then(res => {
        return res.json();
      })
      .then(json => {
        // console.log('account', json);
        dispatch(setAccount(json));
      });
  };

  const postClient = async (data: any) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    try {
      const responsePost = await fetch(
        'http://192.168.1.13:3000/api/client/signup',
        requestOptions,
      );
      const json = await responsePost.json();
      const bodyResponsePost = await json;
      dispatch(setClient(bodyResponsePost));
    } catch (error) {
      // console.log('error', error);
    }
  };

  const getMovements = (id: string) => {
    return fetch(`http://192.168.1.13:3000/api/account/movements/${id}`)
      .then(res => {
        return res.json();
      })
      .then(json => {
        // console.log('json', json);
      });
  };

  const getClientImage = (id: string) => {
    fetch(`http://192.168.1.13:3000/api/account/images/${id}`)
      .then(res => {
        return res.json();
      })
      .then(json => {
        // console.log('json :>> ', json);
        dispatch(setImage(json));
      });
    // console.log('image', image);
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
