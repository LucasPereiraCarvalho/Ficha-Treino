import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { StyledButton, Text } from './styles';
import { MainStackParams } from '../../../navigation/main';

const AddExercise = (): JSX.Element => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParams>>();

  return (
    <StyledButton icon="plus" onPress={() => navigation.navigate('CreateExercise')}>
      <Text>Novo Exercício</Text>
    </StyledButton>
  );
};

export default AddExercise;
