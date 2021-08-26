import React from 'react';

import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import * as S from './styles';

interface Props extends RectButtonProps {
  title: string;
  svg: React.FC<SvgProps>;
}

const SignInSocialButton = ({ title, svg: Svg, ...rest }: Props) => {
  return (
    <S.ContainerButton {...rest}>
      <S.ContainerSvg>
        <Svg />
      </S.ContainerSvg>
      <S.Title>{title}</S.Title>
    </S.ContainerButton>
  );
};

export default SignInSocialButton;
