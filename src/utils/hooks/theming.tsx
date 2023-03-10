import * as React from 'react';
import { useColorScheme } from 'react-native-appearance';

import { darkColors, defaultColors } from 'app/themes';
import { Colors } from 'types';

export interface Theme {
  isDark: boolean;
  colors: Colors;
  setScheme: (val: 'dark' | 'light') => void;
}

export const ThemeContext = React.createContext<Theme>({
  isDark: false,
  colors: defaultColors,
  setScheme: () => {},
});

export const ThemeProvider: React.FC<{}> = props => {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = React.useState<boolean>(colorScheme === 'dark');

  React.useEffect(() => {
    setIsDark(colorScheme === 'dark');
  }, [colorScheme]);

  const defaultTheme: Theme = {
    isDark,
    colors: isDark ? darkColors : defaultColors,
    setScheme: scheme => setIsDark(scheme === 'dark'),
  };

  return <ThemeContext.Provider value={defaultTheme}>{props.children}</ThemeContext.Provider>;
};

export const useTheme = () => React.useContext(ThemeContext);
