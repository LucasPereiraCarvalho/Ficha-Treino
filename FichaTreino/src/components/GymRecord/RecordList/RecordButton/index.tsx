import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from 'react-native-paper';

import { IRecordListData } from '../../../../mocks/RecordList';
import { StyledButton } from './styles';

export interface IRecordButtonProps {
  data: IRecordListData;
  setGymRecordData: React.Dispatch<IRecordListData[]>;
  setSelectedId: React.Dispatch<string>;
}

const RecordButton = ({
  data,
  setGymRecordData,
  setSelectedId,
}: IRecordButtonProps): JSX.Element => {
  const getAsyncStorageData = async (id: string): Promise<void> => {
    await AsyncStorage.getItem(id).then((result: string | null) => {
      if (result === null) return;
      setGymRecordData(JSON.parse(result === null ? '' : result));
    });
  };

  const theme = useTheme();

  return (
    <StyledButton
      buttonColor={theme.colors.onBackground}
      mode="contained"
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onPress={async () => {
        setSelectedId(data.id);
        await getAsyncStorageData(data.id);
      }}
    >
      {data.name}
    </StyledButton>
  );
};

export default RecordButton;
