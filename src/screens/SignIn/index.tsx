import React from 'react';
import { Alert, Platform } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

import * as S from './styles';

import { AppleSvg, FacebookSvg, GoogleSvg, LogoSvg } from '../../assets';
import { SignInSocialButton } from '../../components';
import { useAuth } from '../../hooks/Auth';

const SignIn = () => {
  const { signInWithGoogle, signInWithApple } = useAuth();

  async function handleSignInWithGoogle() {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível conectar com a Google');
    }
  }

  async function handleSignInWithApple() {
    try {
      await signInWithApple();
    } catch (error) {
      throw new Error(error);
    }
  }

  function handleSocialNotImplemented() {
    Alert.alert('Essa Função ainda será implementada.');
  }

  return (
    <S.Container>
      <S.Header>
        <S.TitleWrapper>
          <LogoSvg width={RFValue(120)} height={RFValue(68)} />
        </S.TitleWrapper>
        <S.Title>
          Controle suas{'\n'} finanças de forma{'\n'} muito simples
        </S.Title>

        <S.SignInTitle>
          Faça seu login com{'\n'} uma das contas abaixo
        </S.SignInTitle>
      </S.Header>

      <S.Footer>
        <S.FooterWrapper>
          {Platform.OS === 'android' ? (
            <SignInSocialButton
              onPress={handleSignInWithGoogle}
              svg={GoogleSvg}
              title="Entrar com Google"
            />
          ) : (
            <SignInSocialButton
              onPress={handleSignInWithApple}
              svg={AppleSvg}
              title="Entrar com Apple"
            />
          )}
          <SignInSocialButton
            onPress={handleSocialNotImplemented}
            svg={FacebookSvg}
            title="Entrar com Facebook"
          />
        </S.FooterWrapper>
      </S.Footer>
    </S.Container>
  );
};

export default SignIn;
