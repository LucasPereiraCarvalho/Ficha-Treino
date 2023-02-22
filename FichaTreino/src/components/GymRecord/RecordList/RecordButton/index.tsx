import React, { useContext } from 'react';
import { useTheme } from 'react-native-paper';

import { IRecordListData } from '../../../../mocks/RecordList';
import { GymRecordContext } from '../../../../context/GymRecordContext';
import { Button } from './styles';

export interface IRecordButtonProps {
  data: IRecordListData;
  setSelectedId: React.Dispatch<string>;
}

const RecordButton = ({ data, setSelectedId }: IRecordButtonProps): JSX.Element => {
  const { id, name } = data;
  const { refatch } = useContext(GymRecordContext);
  const theme = useTheme();

  return (
    <Button
      buttonColor={theme.colors.onBackground}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onPress={async () => {
        setSelectedId(id);
        await refatch(id);
      }}
    >
      {name}
    </Button>
  );
};

export default RecordButton;
