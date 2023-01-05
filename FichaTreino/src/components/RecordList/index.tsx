import React from 'react';
import { FlatList } from 'react-native';

import { Container } from './styles';
import RecordButton from '../RecordButton';
import AddRecordButton from '../AddRecordButton';
import { RecordListData, IRecordListData } from '../../mocks/RecordList';

interface IRecordListProps {
  setGymRecordData: React.Dispatch<IRecordListData[]>;
}

const RecordList = ({ setGymRecordData }: IRecordListProps): JSX.Element => {
  return (
    <Container>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={RecordListData}
        renderItem={({ item }) => <RecordButton data={item} setGymRecordData={setGymRecordData} />}
        ListFooterComponent={() => <AddRecordButton />}
        keyExtractor={(item: IRecordListData) => item.id}
      />
    </Container>
  );
};

export default RecordList;
