import React from 'react';

import { IGymRecordData } from '../../mocks/GymRecord';
import { Container, Image, Text } from './styles';

const Exercise = ({ data }: { data: IGymRecordData }): JSX.Element => (
  <Container>
    <Image
      resizeMode={'cover'}
      source={{
        uri: data.image,
      }}
    />
    <Text>{data.name}</Text>
  </Container>
);

export default Exercise;
