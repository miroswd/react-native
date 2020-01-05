import React from 'react';
import { Text, View } from 'react-native';

// ReactoTron
import './config/ReactTronConfig';

export default function App() {
  console.tron.log('Agora foi!');
  return (
    <View>
      <Text>Hello Muchacho</Text>
    </View>
  );
}
