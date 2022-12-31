import React from 'react';

import { IRecordListData } from '../../mocks/RecordList';
import { TouchableOpacity, Text } from './styles';

const RecordButton = ({ data }: { data: IRecordListData }): JSX.Element => {
  return (
    <TouchableOpacity isActive={data.isActive}>
      <Text isActive={data.isActive}>{data.name}</Text>
    </TouchableOpacity>
  );
};

export default RecordButton;
