import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SettingsPage} from '../../pages/Settings';
import {HomePage} from '../../pages/Home';
import {LoginPage} from '../../pages/Login';

const Stack = createNativeStackNavigator<RootRoutesParamList>();

export type RootRoutesParamList = {
  HomePage: undefined;
  DetailPage: undefined;
  LoginPage: undefined;
};

export const RootRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={HomePage}
        name="HomePage"
        options={{title: 'Home'}}
      />
      <Stack.Screen
        component={SettingsPage}
        name="DetailPage"
        options={{title: 'Detail'}}
      />
      <Stack.Screen
        component={LoginPage}
        name="LoginPage"
        options={{title: 'Detail'}}
      />
    </Stack.Navigator>
  );
};
