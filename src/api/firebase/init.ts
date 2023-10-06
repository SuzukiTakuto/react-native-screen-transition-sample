import firebase from '@react-native-firebase/app';
import {Platform} from 'react-native';
// import {Platform} from 'react-native';

const androidCredentials = {
  clientId: '',
  apiKey: 'AIzaSyDDY8XWZhLj0mPH4pXP_T2FSowGMXsQjlw',
  authDomain: 'com.example',
  projectId: 'avocado-test-5e236',
  storageBucket: 'avocado-test-5e236.appspot.com',
  databaseURL: '',
  messagingSenderId: '',
  appId: '1:834098871992:android:653899f4a4054746af7e4d',
};

// Your secondary Firebase project credentials for iOS...
const iosCredentials = {
  clientId: '',
  appId: '',
  apiKey: '',
  databaseURL: '',
  storageBucket: '',
  messagingSenderId: '',
  projectId: '',
};

// // Select the relevant credentials

// const config = {
//   name: 'SECONDARY_APP',
// };

export const initializeFirebase = async () => {
  const credentials = Platform.select({
    android: androidCredentials,
    ios: iosCredentials,
  });
  await firebase.initializeApp(credentials || androidCredentials);
};
