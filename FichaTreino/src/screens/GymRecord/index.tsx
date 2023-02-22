import React, { useContext, useState } from 'react';
import { FlatList } from 'react-native';

import { GymRecordContext, IGymRecordData } from '../../../src/context/GymRecordContext';
import AddExercise from '../../components/GymRecord/AddExercise';
import Exercise from '../../components/GymRecord/Exercise';
import RecordList from '../../components/GymRecord/RecordList';
import { Container } from '../../styles/components';
import { Title } from './styles';

const GymRecord = (): JSX.Element => {
  const { gymRecordData } = useContext(GymRecordContext);
  const [selectedId, setSelectedId] = useState<string>('');

  return (
    <Container>
      <Title>Escolha qual Ficha você treinará hoje</Title>
      <FlatList
        data={gymRecordData}
        ListHeaderComponent={() => <RecordList setSelectedId={setSelectedId} />}
        renderItem={({ item }) => <Exercise data={item} />}
        ListFooterComponent={() => <AddExercise selectedRecordId={selectedId} />}
        keyExtractor={(item: IGymRecordData) => item.id}
      />
    </Container>
  );
};

export default GymRecord;
