import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Button, Text } from './styles';
import { MainStackParams } from '../../../navigation/main';

interface IAddExerciseProps {
  selectedRecordId: string;
}

const AddExercise = ({ selectedRecordId }: IAddExerciseProps): JSX.Element => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParams>>();

  return (
    <Button icon="plus" onPress={() => navigation.navigate('CreateExercise', { selectedRecordId })}>
      <Text>Novo Exercício</Text>
    </Button>
  );
};

export default AddExercise;
