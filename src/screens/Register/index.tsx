import React, { useState } from 'react';
import { Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { showMessage } from 'react-native-flash-message';
import uuid from 'react-native-uuid';
import * as Yup from 'yup';

import * as S from './styles';

import {
  Button,
  CategorySelectButton,
  InputForm,
  TransactionButton,
} from '../../components';
import CategorySelect from '../CategorySelect';

interface FormData {
  name: string;
  amount: string;
}
const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  amount: Yup.number()
    .positive('O valor não pode ser negativo')
    .typeError('Informe um valor numérico')
    .required('O valor é obrigatório'),
});

const Register = () => {
  const { navigate } = useNavigation();

  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name: 'categoria',
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleTransactionTypeSelected(type: 'positive' | 'negative') {
    setTransactionType(type);
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
  }

  async function handleRegister(form: FormData) {
    if (!transactionType) {
      return;
    }

    if (category.key === 'category') {
      return;
    }

    const newTransaction = {
      id: String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      type: transactionType,
      category: category.key,
      date: new Date(),
    };
    try {
      const dataKey = '@gofinances:transactions';
      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];

      const dataFormatted = [...currentData, newTransaction];

      reset();
      setTransactionType('');
      setCategory({
        key: 'category',
        name: 'categoria',
      });
      navigate('Home');

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));
    } catch (error) {
      showMessage({
        message: 'Não foi possível salvar 😔',
        icon: 'danger',
        description: 'Aconteceu algum erro, tente novamente mais tarde.',
        type: 'danger',
      });
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <S.Header>
          <S.Title>Cadastro</S.Title>
        </S.Header>

        <S.Form>
          <S.Fields>
            <InputForm
              autoCapitalize="sentences"
              autoCorrect={false}
              name="name"
              control={control}
              placeholder="Nome"
              error={errors.name && errors.name.message}
            />
            <InputForm
              keyboardType="numeric"
              name="amount"
              control={control}
              placeholder="Valor"
              error={errors.amount && errors.amount.message}
            />
            <S.TransactionButtonContainer>
              <TransactionButton
                isActive={transactionType === 'positive'}
                onPress={() => handleTransactionTypeSelected('positive')}
                title="Entradas"
                type="up"
              />
              <TransactionButton
                isActive={transactionType === 'negative'}
                onPress={() => handleTransactionTypeSelected('negative')}
                title="Saídas"
                type="down"
              />
            </S.TransactionButtonContainer>

            <CategorySelectButton
              onPress={handleOpenSelectCategoryModal}
              title={category.name}
            />
          </S.Fields>
          <Button onPress={handleSubmit(handleRegister)} title="Enviar" />
        </S.Form>

        <Modal visible={categoryModalOpen}>
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseSelectCategoryModal}
          />
        </Modal>
      </S.Container>
    </TouchableWithoutFeedback>
  );
};

export default Register;
function alert(arg0: string) {
  throw new Error('Function not implemented.');
}
