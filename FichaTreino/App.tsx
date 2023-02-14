import React from 'react';

import { ThemeContextProvider } from './src/context/ThemeContext';
import Stack from './src/navigation/main';

const App = (): JSX.Element => {
  return (
    <ThemeContextProvider>
      <Stack />
    </ThemeContextProvider>
  );
};

export default App;
