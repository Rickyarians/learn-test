import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0a8 8 0 100 16A8 8 0 008 0zm3.468 6.647a.726.726 0 10-1.117-.93L7.223 9.467 5.605 7.85a.727.727 0 00-1.028 1.029l2.182 2.182a.726.726 0 001.072-.05l3.637-4.363z"
        fill="#318C34"
      />
    </Svg>
  );
}

export default SvgComponent;
