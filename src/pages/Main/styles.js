import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'; // Botões

// RectButton -> botão retangular

export const Container = styled.View`
  flex: 1; /* Todo o espaço possível */
  padding: 30px;
  background-color: #ddd;
`;

export const Form = styled.View`
  /* Como não tem component de form, usar view comum */
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #ccc;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#666',
})`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
`;

export const SubmitButton = styled(RectButton)`
  /* RectButton é um elemento externo, por isso passar entre parenteses */
  justify-content: center;
  align-items: center;
  background-color: #267d8d;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 10px;
  opacity: ${props => (props.loading ? 0.7 : 1)};
`;

// Listagem

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px; /*Não consigo trabalhar com porcentagem, usar a metade do valor de altura e largura */
  background-color: #bbb;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center; /** Align-items alinha o component */
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  line-height: 18px;
  color: #555;
  margin-top: 5px;
`;

export const ProfileButton = styled(RectButton)`
  margin-top: 10px;
  align-self: stretch; /* Ocupa a largura total do component */
  background: #267d8d;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase; /**Caixa alta */
  color: #fff;
`;
