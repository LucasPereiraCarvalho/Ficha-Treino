import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border-radius: 12px;
  background-color: ${colors.background};
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
`;

export const Text = styled.Text`
  text-align: center;
  margin: 10px;
`;
