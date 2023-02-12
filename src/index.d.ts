import { Colors } from 'types';

declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '@react-navigation/native' {
  export type ExtendedTheme = {
    dark: boolean;
    colors: Colors;
  };
  export function useTheme(): ExtendedTheme;
}
