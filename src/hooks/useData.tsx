import { useDispatch } from 'react-redux';
import { setClient } from '../redux/slices/ClientSlice';

const useData = () => {
  const dispatch = useDispatch();
  const getClient = async (search: string) => {
    return await fetch(`http://192.168.1.13:3000/api/client/search/${search}`)
      .then(res => {
        // console.log('res', JSON.stringify(res, null, 2));
        return res.json();
      })
      .then(json => {
        console.log('json', json);
        dispatch(setClient(json));
      });
  };

  const getAccount = async (id: string) => {
    console.log('id', id);
    return await fetch(`http://192.168.1.13:3000/api/account/${id}`)
      .then(res => {
        // console.log('res', JSON.stringify(res, null, 2));
        return res.json();
      })
      .then(json => {
        console.log('account', json);
        // setResponse(json);
        // dispatch(setClient(json));
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
      console.log('error', error);
    }
  };

  return {
    getClient,
    getAccount,
    postClient,
  };
};

export default useData;
