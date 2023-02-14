import styled from 'styled-components/native';
import { Text, TextInput as TextInputPaper } from 'react-native-paper';

import fonts from '../../styles/fonts';

export const Title = styled(Text)`
  font-size: ${fonts.title};
  font-family: ${fonts.fontFamily.regular};
`;

export const Form = styled.View`
  margin: 30px 0px;
  gap: 20px;
`;

export const TextInput = styled(TextInputPaper).attrs({
  mode: 'outlined',
  outlineStyle: {
    borderRadius: 10,
    borderColor: 'white',
  },
  textColor: 'black',
})`
  border-radius: 30px;
`;
