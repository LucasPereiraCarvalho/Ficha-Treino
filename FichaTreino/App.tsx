import React from 'react';
import { GymRecordContextProvider } from './src/context/GymRecordContext';

import { ThemeContextProvider } from './src/context/ThemeContext';
import Stack from './src/navigation/main';

const App = (): JSX.Element => {
  return (
    <ThemeContextProvider>
      <GymRecordContextProvider>
        <Stack />
      </GymRecordContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
