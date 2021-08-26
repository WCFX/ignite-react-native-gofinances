import React from 'react';
import { FlatList } from 'react-native';

import * as S from './styles';

import { Button } from '../../components';
import { categories } from '../../utils/categories';

interface CategoryProps {
  key: string;
  name: string;
}

export interface Props {
  category: CategoryProps;
  setCategory: (category: CategoryProps) => void;
  closeSelectCategory: () => void;
}

export const CategorySelect = ({
  category,
  setCategory,
  closeSelectCategory,
}: Props) => {
  function handleCategorySelect(category: CategoryProps) {
    setCategory(category);
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>Categoria</S.Title>
      </S.Header>

      <FlatList
        data={categories}
        style={{ flex: 1, width: '100%' }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <S.Category
            isActive={category.key === item.key}
            onPress={() => handleCategorySelect(item)}
          >
            <S.Icon isActive={category.key === item.key} name={item.icon} />
            <S.Name isActive={category.key === item.key}>{item.name}</S.Name>
          </S.Category>
        )}
        ItemSeparatorComponent={() => <S.Separator />}
      />

      <S.Footer>
        <Button onPress={closeSelectCategory} title="Selecionar" />
      </S.Footer>
    </S.Container>
  );
};

export default CategorySelect;
