import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';
import api from './api_config';
import {Alert} from 'react-native';

const API_BASE_URL = api.BASE_URL;

const Service = async (requestConfig, header) => {
  const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      'content-type':
        header === 'multipart' ? 'multipart/form-data' : 'application/json',
    },
  });

  let isNetConnected = null;

  await NetInfo.fetch().then(state => (isNetConnected = state.isConnected));

  if (isNetConnected) {
    try {
      //also we can fetch token from local storage and pass into api
      const response = await apiClient.request(requestConfig);
      if (response) {
        const {status} = response;
        if (status >= 200) {
          const {data} = response;
          return data;
        }
      }
      return null;
    } catch (error) {
      Alert.alert('You are not connected');
      return null;
    }
  } else {
    Alert.alert('You are not connected');
  }
};

export default Service;
