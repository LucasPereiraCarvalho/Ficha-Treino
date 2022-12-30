import React from 'react';

import { IRecordListData } from '../../mocks/RecordList';
import { TouchableOpacity, Text } from './styles';

const RecordButton = ({ data }: { data: IRecordListData }): JSX.Element => {
  return (
    <TouchableOpacity>
      <Text>{data.name}</Text>
    </TouchableOpacity>
  );
};

export default RecordButton;
