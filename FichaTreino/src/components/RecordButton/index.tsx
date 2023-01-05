import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Button from '../Base/Button';
import { IRecordListData } from '../../mocks/RecordList';

export interface IRecordButtonProps {
  data: IRecordListData;
  setGymRecordData: React.Dispatch<IRecordListData[]>;
}

const RecordButton = ({ data, setGymRecordData }: IRecordButtonProps): JSX.Element => {
  const getAsyncStorageData = async (id: string): Promise<void> => {
    await AsyncStorage.getItem(id).then((result: string | null) => {
      setGymRecordData(JSON.parse(result === null ? '' : result));
    });
  };

  return <Button text={data.name} onPress={async () => await getAsyncStorageData(data.id)} />;
};

export default RecordButton;
