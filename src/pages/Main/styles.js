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
`;
