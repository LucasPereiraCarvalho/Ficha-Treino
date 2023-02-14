import React, { useCallback, useContext, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';
import {
  Provider as PaperProvider,
  MD3DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  configureFonts,
  Button,
} from 'react-native-paper';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import colors from '../styles/colors';

const fontConfig = {
  fontFamily: 'Poppins-Medium',
};

const darkcolors = colors.colors;

const lightTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors,
  fonts: configureFonts({ config: fontConfig }),
};

const darkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  darkcolors,
  fonts: configureFonts({ config: fontConfig }),
};

export type Theme = typeof lightTheme;

export type ThemeType = 'light' | 'dark';

export interface ThemeContextValue {
  theme: Theme;
  themeType: ThemeType;
  isDarkTheme: boolean;
  toggleThemeType: () => void;
  setThemeType: React.Dispatch<React.SetStateAction<ThemeType>>;
}

export const ThemeContext = React.createContext<ThemeContextValue>({
  theme: lightTheme,
  themeType: 'light',
  isDarkTheme: false,
  setThemeType: () => {},
  toggleThemeType: () => {},
});

export const useTheme = (): ThemeContextValue => useContext(ThemeContext);

export interface ThemeContextProviderProps {
  children: React.ReactNode;
}

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps): JSX.Element => {
  const colorScheme = useColorScheme();
  const [themeType, setThemeType] = useState<ThemeType>(colorScheme === 'dark' ? 'dark' : 'light');

  const toggleThemeType = useCallback(() => {
    setThemeType((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const isDarkTheme = useMemo(() => themeType === 'dark', [themeType]);

  const theme = useMemo(() => (isDarkTheme ? darkTheme : lightTheme), [isDarkTheme]);

  return (
    <NavigationContainer theme={theme}>
      <PaperProvider theme={theme}>
        <ThemeContext.Provider
          value={{
            theme,
            themeType,
            isDarkTheme,
            setThemeType,
            toggleThemeType,
          }}
        >
          {children}
          <Button onPress={toggleThemeType}>Toggle</Button>
        </ThemeContext.Provider>
      </PaperProvider>
    </NavigationContainer>
  );
};
