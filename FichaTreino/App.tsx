import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import GymRecord from './src/screens/GymRecord';

interface IbackgroundStyle {
  backgroundColor: any;
}

const App = (): JSX.Element => {
  const isDarkMode: boolean = useColorScheme() === 'dark';

  const backgroundStyle: IbackgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar />
      <GymRecord />
    </SafeAreaView>
  );
};

export default App;
