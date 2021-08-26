import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

export interface Props extends TouchableOpacityProps {
  type: 'up' | 'down';
  isActive: boolean;
  title: string;
}
const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
};

const TransactionButton = ({ isActive, type, title, ...rest }: Props) => {
  return (
    <S.Container type={type} {...rest} isActive={isActive}>
      <S.Icon type={type} name={icons[type]} />
      <S.Title type={type} isActive={isActive}>
        {title}
      </S.Title>
    </S.Container>
  );
};

export default TransactionButton;
