import React from 'react';
import Icon from 'react-native-easy-icon';

import BaseTouchableOpacity from '../Base/BaseTouchableOpacity';

const AddRecordButton = (): JSX.Element => {
  return (
    <BaseTouchableOpacity>
      <Icon type="feather" name="plus" color="white" size={18} />
    </BaseTouchableOpacity>
  );
};

export default AddRecordButton;
