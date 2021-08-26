import React from 'react';
import { TextInputProps } from 'react-native';

import * as S from './styles';

export interface Props extends TextInputProps {}

const Input = ({ ...rest }: Props) => {
  return <S.Container {...rest} />;
};

export default Input;
