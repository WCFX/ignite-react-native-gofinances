import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import { StatusBar } from 'react-native'; 
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from './hooks/Auth';
import Routes from './routes';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import theme from './styles/Theme';

import { SignIn } from './screens';


export default function App() {


  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>

        <AuthProvider>
          {/* <Routes /> */}
          <SignIn />
        <StatusBar barStyle="dark-content" />

        </AuthProvider>

      </NavigationContainer>
    </ThemeProvider>
  )
}
