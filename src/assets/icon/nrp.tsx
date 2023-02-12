import * as React from 'react';
import Svg, { Rect, Path, SvgProps } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={49} height={30} fill="none" {...props}>
      <Rect width={49} height={30} rx={4} fill="#DDE4E9" />
      <Path
        d="M49 26.863a3.07 3.07 0 01-3.07 3.07H4a4 4 0 01-4-4v-2.14h6.752c.707 0 1.355.395 1.678 1.024a3.774 3.774 0 003.356 2.046H49z"
        fill="#ED473C"
      />
      <Rect
        x={33.984}
        y={1.535}
        width={13.315}
        height={15.259}
        rx={2}
        fill="#15243D"
        fillOpacity={0.2}
      />
      <Rect x={3.161} y={11.513} width={7.113} height={4.605} rx={2} fill="#F7D14E" />
      <Path
        d="M5.532 3.07h25.29M13.435 7.675h7.362M13.435 12.071h13.436M13.435 16.468h13.436M5.532 20.723h8.694M26.08 20.723h8.694M15.807 20.723H24.5M36.355 20.723h8.694"
        stroke="#15243D"
        strokeOpacity={0.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default SvgComponent;
