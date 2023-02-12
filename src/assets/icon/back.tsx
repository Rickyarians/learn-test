import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function Back(props: SvgProps) {
  return (
    <Svg width={23} height={23} viewBox="0 0 20 18" {...props}>
      <Path d="M18.75 7.502H3.925l4.538-5.45a1.252 1.252 0 00-1.925-1.6l-6.25 7.5c-.043.06-.08.122-.113.187 0 .063 0 .1-.087.163a1.25 1.25 0 00-.088.45c.001.154.03.306.088.45 0 .062 0 .1.087.162.033.065.07.128.112.188l6.25 7.5a1.25 1.25 0 00.963.45 1.25 1.25 0 00.963-2.05l-4.538-5.45H18.75a1.25 1.25 0 000-2.5z" />
    </Svg>
  );
}

export default Back;
