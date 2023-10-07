import React, {FC, useEffect, useState} from 'react';
import {Text, Button, TextInput, View} from 'react-native';
import type {RootRoutesParamList} from '../../routes/Root';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import {initializeFirebase} from '../../api/firebase/init';
import {AuthError} from '../../api/firebase/error';

type Props = NativeStackScreenProps<RootRoutesParamList, 'LoginPage'>;
export const LoginPage: FC<Props> = ({navigation}) => {
  useEffect(() => {}, []);

  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  const FirebaseAuth = async () => {
    // ホーム画面で初期化しても良いかもだけど
    // 簡易的にログイン・ボタン押下時に初期化する
    await initializeFirebase();

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('SUCCESS: signed in');
        navigation.push('HomePage');
      })
      .catch(error => {
        if (error.code === AuthError.EmailAlreadyInUse) {
          console.log('That email address is already in use!');
        }

        if (error.code === AuthError.InvalidEmail) {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <View>
      <Text>LOGIN</Text>
      <TextInput onChangeText={onChangeEmail} value={email} />
      <TextInput onChangeText={onChangePassword} value={password} />
      <Button onPress={FirebaseAuth} title="Login" />
    </View>
  );
};
