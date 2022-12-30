import React from 'react';
import { FlatList } from 'react-native';

import { Container, Title } from './styles';
import Exercise from '../../components/Exercise';
import RecordList from '../../components/RecordList';
import { GymRecordData, IGymRecordData } from '../../mocks/GymRecord';

const GymRecord = (): JSX.Element => (
  <Container>
    <Title>Escolha qual Ficha você treinará hoje</Title>
    <RecordList />
    <FlatList
      data={GymRecordData}
      renderItem={({ item }) => <Exercise data={item} />}
      keyExtractor={(item: IGymRecordData) => item.id}
    />
  </Container>
);

export default GymRecord;
