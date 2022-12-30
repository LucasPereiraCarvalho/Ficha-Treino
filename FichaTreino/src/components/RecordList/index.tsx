import React from 'react';
import { FlatList } from 'react-native';

import { RecordListData, IRecordListData } from '../../mocks/RecordList';

import RecordButton from '../RecordButton';

const RecordList = (): JSX.Element => {
  return (
    <FlatList
      horizontal={true}
      data={RecordListData}
      renderItem={({ item }) => <RecordButton data={item} />}
      keyExtractor={(item: IRecordListData) => item.id}
    />
  );
};

export default RecordList;
