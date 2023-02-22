import styled from 'styled-components/native';
import { Text, Button as ButtonPaper, TextInput as TextInputPaper } from 'react-native-paper';

import fonts from '../../styles/fonts';

export const Title = styled(Text)`
  font-size: ${fonts.title};
`;

export const Form = styled.View`
  margin: 30px 0px;
  padding: 15px;
  border-radius: 10px;
  gap: 10px;
`;

export const TextInput = styled(TextInputPaper).attrs({
  mode: 'outlined',
})``;

export const Button = styled(ButtonPaper).attrs({
  mode: 'contained',
  contentStyle: { height: 50 },
})``;
