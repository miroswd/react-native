import React from 'react';
import { View } from 'react-native';

import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <View />
    </Container>
  );
}

Main.navigationOptions = {
  title: 'Main',
};
