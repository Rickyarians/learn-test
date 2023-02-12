import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M9.99 0C4.47 0 0 4.48 0 10s4.47 10 9.99 10C15.52 20 20 15.52 20 10S15.52 0 9.99 0zM14 14a.994.994 0 01-1.41 0L9.3 10.71A1 1 0 019 10V6c0-.55.45-1 1-1s1 .45 1 1v3.59l3 3c.39.39.39 1.02 0 1.41z"
        fill="#2E59E5"
      />
    </Svg>
  );
}

export default SvgComponent;
