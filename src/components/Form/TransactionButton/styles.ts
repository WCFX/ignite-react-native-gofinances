import { TouchableOpacity } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import Feather from '@expo/vector-icons/Feather';
import styled, { css } from 'styled-components/native';

import { Props } from '.';

export const Container = styled(TouchableOpacity)<Omit<Props, 'title'>>`
  width: 48%;
  flex-direction: row;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors.text};
  justify-content: center;
  padding: 16px;

  border-radius: 12px;

  ${({ isActive, type }) =>
    isActive &&
    type === 'up' &&
    css`
      background-color: ${({ theme }) => theme.colors.success_light};
      border: none;
    `}
  ${({ isActive, type }) =>
    isActive &&
    type === 'down' &&
    css`
      background-color: ${({ theme }) => theme.colors.attention_light};
      border: none;
    `}
`;

export const Icon = styled(Feather)<Pick<Props, 'type'>>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;
  color: ${({ theme, type }) =>
    type === 'up' ? theme.colors.success : theme.colors.attention};
`;

export const Title = styled.Text<Pick<Props, 'type' | 'isActive'>>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.title};

  ${({ isActive, type }) =>
    isActive &&
    type === 'up' &&
    css`
      color: ${({ theme }) => theme.colors.shape};
      font-family: ${({ theme }) => theme.fonts.bold};
    `}
  ${({ isActive, type }) =>
    isActive &&
    type === 'down' &&
    css`
      color: ${({ theme }) => theme.colors.shape};
      font-family: ${({ theme }) => theme.fonts.bold};
    `}
`;
