import React, { useState } from 'react';
import { useTheme } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RouteProp, useRoute } from '@react-navigation/core';
import uuid from 'react-native-uuid';

import { Container } from '../../../src/styles/components';
import { Title, Form, TextInput, Button } from './styles';
import { MainStackParams } from '../../../src/navigation/main';

type CreateExerciseRouteType = RouteProp<MainStackParams, 'CreateExercise'>;

export default function CreateExercise(): JSX.Element {
  const {
    params: { selectedRecordId },
  } = useRoute<CreateExerciseRouteType>();

  const theme = useTheme();

  const [name, setName] = useState<string>('');
  const [weight, setWeight] = useState<string>('');

  const getSavedData = async (): Promise<string | null> => {
    try {
      return await AsyncStorage.getItem(selectedRecordId);
    } catch (e) {
      console.log('error getting saved data', e);
      return null;
    }
  };

  const addExercise = async (): Promise<void> => {
    const newdata = [
      {
        id: uuid.v4(),
        image: '',
        name,
        weight,
      },
    ];

    const savedDataString = await getSavedData();

    let savedData = [];

    if (savedDataString !== null) {
      savedData = JSON.parse(savedDataString);
    }

    const data = savedData?.concat(newdata);

    try {
      await AsyncStorage.setItem(selectedRecordId, JSON.stringify(data));
    } catch (e) {
      // saving error
    }
  };

  return (
    <Container>
      <Title>Informe os dados do novo Exercicio</Title>
      <Form style={{ backgroundColor: theme.colors.primaryContainer }}>
        <TextInput
          label="Nome do Exercício"
          value={name}
          onChangeText={(text) => setName(text)}
          outlineStyle={{
            borderRadius: 10,
            borderColor: theme.colors.onPrimary,
            backgroundColor: theme.colors.onPrimary,
          }}
        />
        <TextInput
          label="Peso"
          value={weight}
          onChangeText={(text) => setWeight(text)}
          outlineStyle={{
            borderRadius: 10,
            borderColor: theme.colors.onPrimary,
            backgroundColor: theme.colors.onPrimary,
          }}
        />
        <Button
          onPress={async () => await addExercise()}
          style={{ backgroundColor: theme.colors.primary }}
        >
          Salvar
        </Button>
      </Form>
    </Container>
  );
}
