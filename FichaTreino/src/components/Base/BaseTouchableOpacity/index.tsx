import React from 'react';

import { TouchableOpacity } from './styles';

interface ITouchableOpacityPros {
  children?: JSX.Element;
  onPress?: () => {};
}

const BaseTouchableOpacity = ({ children, onPress }: ITouchableOpacityPros): JSX.Element => {
  return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
};

export default BaseTouchableOpacity;
