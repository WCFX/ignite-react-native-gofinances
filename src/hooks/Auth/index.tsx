import React , { createContext, useContext, ReactNode } from 'react';

import * as Google from 'expo-google-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface AuthContextData {
  user: User;
  signInWithGoogle(): Promise<void>;
}


const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const user = {
    id: '12321',
    name: 'Wagner Barboza',
    email: 'wcfx.dev@gmail.com',
  };

  async function signInWithGoogle() {
    try {
      const result = await Google.logInAsync({
        iosClientId: '373705253923-abos19b8lmh7j1a2u0loij6pam1nv3jd.apps.googleusercontent.com',
        androidClientId: '373705253923-hkskdflahni95jv3fogujfcoc173da1t.apps.googleusercontent.com',
        scopes: ['profile', 'email']
      })
      if (result.type === 'success') {
        const userLogged = {
          id: String(result.user.id),
          email: result.user.email!,
          name: result.user.name!,
          photo: result.user.photoUrl!
        }
        await AsyncStorage.setItem('@gofinances:user', JSON.stringify(userLogged));
      }
      
    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };
