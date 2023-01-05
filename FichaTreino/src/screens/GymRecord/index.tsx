import React, { useState } from 'react';
import { FlatList } from 'react-native';

import { Container, Title } from './styles';
import Exercise from '../../components/Exercise';
import RecordList from '../../components/RecordList';
import { IGymRecordData } from '../../mocks/GymRecord';
import { IRecordListData } from '../../mocks/RecordList';
import AddExercise from '../../../src/components/AddExercise';

const GymRecord = (): JSX.Element => {
  const [GymRecordData, setGymRecordData] = useState<IRecordListData[]>([]);

  return (
    <Container>
      <Title>Escolha qual Ficha você treinará hoje</Title>
      <RecordList setGymRecordData={setGymRecordData} />
      <FlatList
        data={GymRecordData}
        renderItem={({ item }) => <Exercise data={item} />}
        ListFooterComponent={() => <AddExercise />}
        keyExtractor={(item: IGymRecordData) => item.id}
      />
    </Container>
  );
};

export default GymRecord;
