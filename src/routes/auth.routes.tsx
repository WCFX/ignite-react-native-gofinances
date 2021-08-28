import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import * as View from '../screens';

const { Screen, Navigator } = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="SignIn" component={View.SignIn} />
    </Navigator>
  );
};

export default AuthRoutes;
