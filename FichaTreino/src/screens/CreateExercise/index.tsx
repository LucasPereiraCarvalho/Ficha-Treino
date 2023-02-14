import React from 'react';

import { Container } from '../../../src/styles/components';
import { Title, Form, TextInput } from './styles';

export default function CreateExercise(): JSX.Element {
  return (
    <Container>
      <Title>Informe os dados do novo Exercicio</Title>
      <Form>
        <TextInput label="Nome do Exercício" />
      </Form>
    </Container>
  );
}
