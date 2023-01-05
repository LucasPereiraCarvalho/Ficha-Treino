import styled from 'styled-components/native';

import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

export const TouchableOpacity = styled.TouchableOpacity`
  padding: 15px;
  margin-right: 15px;
  border-radius: 30px;
  background-color: ${colors.pastelblack};
`;

export const Text = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.fontFamily.bold};
  line-height: 20px;
`;
