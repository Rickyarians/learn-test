declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<
    SvgProps & {
      fillSecondary?: string;
    }
  >;
  export default content;
}

declare type NestedNavigatorParams<ParamList> = {
  [K in keyof ParamList]: undefined extends ParamList[K]
    ? { screen: K; params?: ParamList[K] }
    : { screen: K; params: ParamList[K] };
}[keyof ParamList];

declare module 'react-native-keyboard-aware-scrollview';
declare module 'react-native-progress-bar-animated';
declare module 'react-native-get-sms-android';
