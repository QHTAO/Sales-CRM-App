import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppTabNavigator from './AppTabNavigator';

const AppNavContainer = () => {
  return (
    <NavigationContainer>
      <AppTabNavigator />
    </NavigationContainer>
  );
};

export default AppNavContainer;
