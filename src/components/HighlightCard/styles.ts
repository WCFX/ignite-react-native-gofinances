import { RFValue } from 'react-native-responsive-fontsize';
import Feather from '@expo/vector-icons/Feather';
import styled, { css } from 'styled-components/native';

interface TypeProps {
  type: 'up' | 'down' | 'total';
}

export const Container = styled.View<TypeProps>`
  background-color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.secondary : theme.colors.shape};

  width: ${RFValue(280)}px;
  border-radius: 18px;
  padding: 22px 23px;
  margin-left: ${RFValue(10)}px;
  margin-right: ${RFValue(10)}px;
  margin-bottom: ${RFValue(10)}px;
  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 4;
  };
  shadow-opacity: 0.30;
  shadow-radius: 4.65;
  elevation: 8;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.shape : theme.colors.title};
`;

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(40)}px;
  ${({ type }) =>
    type === 'up' &&
    css`
      color: ${({ theme }) => theme.colors.success};
    `}
  ${({ type }) =>
    type === 'down' &&
    css`
      color: ${({ theme }) => theme.colors.attention};
    `}
  ${({ type }) =>
    type === 'total' &&
    css`
      color: ${({ theme }) => theme.colors.shape};
    `}
`;

export const Footer = styled.View``;

export const Amount = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.shape : theme.colors.title};
  margin-top: ${RFValue(36)}px;
`;

export const LastTransaction = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.shape : theme.colors.text};
`;
