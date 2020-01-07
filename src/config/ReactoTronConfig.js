// Facilita o acesso ao ReactoTron, sem precisar importar esse arquivo toda vez

import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  // Variável DEV === variável global do react-native
  // Retorna true quando o usuário está em ambiente de desenvolvimento
  const tron = Reactotron.configure('192.168.0.8')
    .useReactNative()
    .connect();
  console.tron = tron;
  tron.clear(); // Limpa a timeline do reactotron quando der o refresh
}
