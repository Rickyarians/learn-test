import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M14.222 2.222H1.778A1.778 1.778 0 000 4v4h16V4a1.778 1.778 0 00-1.778-1.778z"
          fill="#DC1F26"
        />
        <Path
          d="M16 12a1.778 1.778 0 01-1.778 1.778H1.778A1.778 1.778 0 010 12V8h16v4z"
          fill="#EEE"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h16v16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
