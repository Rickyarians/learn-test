import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={18} height={10} viewBox="0 0 18 10" fill="none" {...props}>
      <Path
        d="M1 1l8 8 8-8"
        stroke="#2E59E5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
