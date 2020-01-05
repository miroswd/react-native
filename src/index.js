import React from 'react';
import { StatusBar } from 'react-native';
// ReactoTron
import './config/ReactoTronConfig';

// Importação de arquivos depois do reactotron
import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#267d8d" />
      <Routes />
    </>
  );
}
