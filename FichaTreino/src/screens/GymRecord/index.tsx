import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import AddExercise from '../../components/GymRecord/AddExercise';
import Exercise from '../../components/GymRecord/Exercise';
import RecordList from '../../components/GymRecord/RecordList';
import { IGymRecordData } from '../../mocks/GymRecord';
import { IRecordListData } from '../../mocks/RecordList';
import { Container } from '../../styles/components';
import { Title } from './styles';

const GymRecord = (): JSX.Element => {
  const [GymRecordData, setGymRecordData] = useState<IRecordListData[]>([]);
  const [selectedId, setSelectedId] = useState<string>('');

  useEffect(() => {}, [selectedId, setSelectedId]);

  return (
    <Container>
      <Title>Escolha qual Ficha você treinará hoje</Title>
      <FlatList
        data={GymRecordData}
        ListHeaderComponent={() => (
          <RecordList setGymRecordData={setGymRecordData} setSelectedId={setSelectedId} />
        )}
        renderItem={({ item }) => <Exercise data={item} />}
        ListFooterComponent={() => <AddExercise />}
        keyExtractor={(item: IGymRecordData) => item.id}
      />
    </Container>
  );
};

export default GymRecord;
