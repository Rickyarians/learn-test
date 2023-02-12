import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={18} height={20} viewBox="0 0 18 20" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 0a1 1 0 011 1v1h6V1a1 1 0 012 0v1h1a3 3 0 013 3v1H0V5a3 3 0 013-3h1V1a1 1 0 011-1zM0 8v9a3 3 0 003 3h12a3 3 0 003-3V8H0z"
        fill="#2E59E5"
      />
    </Svg>
  );
}

export default SvgComponent;
