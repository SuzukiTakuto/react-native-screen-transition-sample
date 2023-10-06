import React, {FC, useEffect} from 'react';
import {Text, Button} from 'react-native';
import type {RootRoutesParamList} from '../../routes/Root';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import {initializeFirebase} from '../../api/firebase/init';
// import {getAuth} from 'firebase/auth';

type Props = NativeStackScreenProps<RootRoutesParamList, 'LoginPage'>;
export const LoginPage: FC<Props> = ({navigation}) => {
  useEffect(() => {}, []);

  const FirebaseAuth = async () => {
    await initializeFirebase();

    auth()
      .signInWithEmailAndPassword('hoge@gmail.com', 'hogehoge')
      .then(() => {
        console.log('User account created & signed in!');
        navigation.push('HomePage');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <>
      <Text>LOGIN</Text>
      <Button onPress={FirebaseAuth} title="Login" />
    </>
  );
};
