import AsyncStorage from '@react-native-community/async-storage';
import reactotron from 'reactotron-react-native';

export const setToken = async (token) => {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (e) {}
};

export const getToken = async () => {
  try {
    return await AsyncStorage.getItem('token');
  } catch (e) {}
};

export const setStoreInfo = async (storeInfo) => {
  try {
    await AsyncStorage.setItem('storeInfo', JSON.stringify(storeInfo));
  } catch (e) {}
};
export const getStoreInfo = async () => {
  try {
    const storeInfo = await AsyncStorage.getItem('storeInfo');
    return JSON.parse(storeInfo);
  } catch (e) {}
};

export const setProfile = async (profile) => {
  try {
    await AsyncStorage.setItem('profile', JSON.stringify(profile));
  } catch (e) {}
};
export const getProfile = async () => {
  try {
    const profile = JSON.parse(await AsyncStorage.getItem('profile'));  
    reactotron.log('state.role local: ' + profile.role)
    return profile
  } catch (e) {}
};
