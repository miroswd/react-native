import React from 'react';
// import { View, Text } from 'react-native';
// ReactoTron
import './config/ReactoTronConfig';

// Importação de arquivos depois do reactotron
import Routes from './routes';

export default function App() {
  console.tron.log('Testae');
  return <Routes />;
}
