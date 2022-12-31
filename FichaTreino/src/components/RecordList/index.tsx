import React from 'react';
import { FlatList } from 'react-native';

import { RecordListData, IRecordListData } from '../../mocks/RecordList';
import { Container } from './styles';

import RecordButton from '../RecordButton';

const RecordList = (): JSX.Element => {
  return (
    <Container>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={RecordListData}
        renderItem={({ item }) => <RecordButton data={item} />}
        keyExtractor={(item: IRecordListData) => item.id}
      />
    </Container>
  );
};

export default RecordList;
