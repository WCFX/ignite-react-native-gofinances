import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const ContainerButton = styled(RectButton)`
  height: ${RFValue(56)}px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: ${RFValue(14)}px;
`;

export const ContainerSvg = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  height: 100%;
  width: ${RFValue(50)}px;
  justify-content: center;
  align-items: center;
  padding: ${RFValue(16)}px;
  border-color: ${({ theme }) => theme.colors.secondary};
  border-right-width: 1px;
`;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
`;
