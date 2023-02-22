import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import GymRecord from './../../screens/GymRecord';
import CreateExercise from './../../screens/CreateExercise';

export type MainStackParams = {
  GymRecord: undefined;
  CreateExercise: {
    selectedRecordId: string;
  };
};

export default function Stack(): JSX.Element {
  const Stack = createStackNavigator<MainStackParams>();

  return (
    <Stack.Navigator initialRouteName="GymRecord" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GymRecord" component={GymRecord} />
      <Stack.Screen name="CreateExercise" component={CreateExercise} />
    </Stack.Navigator>
  );
}
