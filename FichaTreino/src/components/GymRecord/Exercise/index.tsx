import React from 'react';
import { useTheme } from 'react-native-paper';

import { IGymRecordData } from '../../../../src/context/GymRecordContext';
import { Container, Image, Text } from './styles';

const Exercise = ({ data }: { data: IGymRecordData }): JSX.Element => {
  const theme = useTheme();

  return (
    <Container style={{ backgroundColor: theme.colors.primaryContainer }}>
      <Image
        resizeMode={'cover'}
        source={{
          uri: data.image,
        }}
      />
      <Text>{data.name}</Text>
    </Container>
  );
};

export default Exercise;
