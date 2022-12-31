import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import GymRecord from './src/screens/GymRecord';
import { ThemeContextProvider } from './src/context/ThemeContext';

const Stack = createStackNavigator();

const App = (): JSX.Element => {
  return (
    <ThemeContextProvider>
      <Stack.Navigator>
        <Stack.Screen name="GymRecord" component={GymRecord} />
      </Stack.Navigator>
    </ThemeContextProvider>
  );
};

export default App;
