import React from 'react';

import BaseTouchableOpacity from '../BaseTouchableOpacity';
import { Text } from './styles';

interface IButtonProps {
  text?: string;
  onPress: () => {};
}

const Button = ({ text, onPress }: IButtonProps): JSX.Element => {
  return (
    <BaseTouchableOpacity onPress={onPress}>
      <Text>{text}</Text>
    </BaseTouchableOpacity>
  );
};

export default Button;
