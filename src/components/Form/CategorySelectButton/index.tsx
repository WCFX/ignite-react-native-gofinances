import React from 'react';

import * as S from './styles';

export interface Props {
  title: string;
  onPress: () => void;
}

const CategorySelectButton = ({ onPress, title }: Props) => {
  return (
    <S.Container onPress={onPress}>
      <S.Category>{title}</S.Category>
      <S.Icon name="chevron-down" />
    </S.Container>
  );
};

export default CategorySelectButton;
