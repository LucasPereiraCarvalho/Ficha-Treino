import React from 'react';

import {Text} from 'react-native';

import {Container} from './styles';

const Exercise = ({item}) => {
  return (
    <Container>
      <Text>{item.exercicio}</Text>;
    </Container>
  );
};

export default Exercise;
