import styled from 'styled-components/native';
import { Button as ButtonPaper } from 'react-native-paper';

export const Button = styled(ButtonPaper).attrs({
  mode: 'contained',
  contentStyle: { height: 50 },
})`
  margin-right: 15px;
  border-radius: 30px;
`;
