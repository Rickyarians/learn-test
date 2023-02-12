import * as React from 'react';
import Svg, { Rect, Path, SvgProps } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={49} height={30} viewBox="0 0 49 30" fill="none" {...props}>
      <Rect width={49} height={30} rx={4} fill="#8DCBF1" />
      <Rect x={30.358} y={7.5} width={13.315} height={15.259} rx={4} fill="#fff" />
      <Path
        d="M10.652 2.328h27.696M5.326 6.724h10.652M5.326 11.12h19.44M5.326 15.517h19.44M5.326 19.914h19.44M5.326 24.31h10.652M18.642 6.724h6.125"
        stroke="#15243D"
        strokeOpacity={0.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default SvgComponent;
