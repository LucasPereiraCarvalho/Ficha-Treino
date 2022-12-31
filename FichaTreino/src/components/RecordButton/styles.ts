import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const TouchableOpacity = styled.TouchableOpacity<{ isActive: boolean }>`
  padding: 15px;
  margin-right: 15px;
  border-radius: 30px;
  background-color: ${(props) => (props.isActive ? colors.pastelblack : colors.background)};
`;

export const Text = styled.Text<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? colors.white : colors.black)};
  font-family: ${fonts.fontFamily.bold};
  line-height: 20px;
`;
