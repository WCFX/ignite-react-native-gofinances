import React from 'react';

import { RFValue } from 'react-native-responsive-fontsize';

import * as S from './styles';

import { AppleSvg, GoogleSvg, LogoSvg } from '../../assets';
import { SignInSocialButton } from '../../components';
import { useAuth } from '../../hooks/Auth';

const SignIn = () => {
  const { user } = useAuth();
  console.log(user);

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
          <SignInSocialButton svg={GoogleSvg} title="Entrar com Google" />
          <SignInSocialButton svg={AppleSvg} title="Entrar com Apple" />
        </S.FooterWrapper>
      </S.Footer>
    </S.Container>
  );
};

export default SignIn;
