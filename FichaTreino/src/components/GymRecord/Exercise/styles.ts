import styled from 'styled-components/native';
import { Text as TextPaper } from 'react-native-paper';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px 0px;
  padding: 10px;
  border-radius: 12px;
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
`;

export const Text = styled(TextPaper)`
  text-align: center;
  margin: 10px;
`;
