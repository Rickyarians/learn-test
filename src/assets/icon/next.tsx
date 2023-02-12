import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={16} height={14} viewBox="0 0 16 14" fill={props.fill} {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.703.2a1.054 1.054 0 011.445.2l4.646 6a.975.975 0 010 1.2l-4.646 6c-.342.442-.989.531-1.445.2a.98.98 0 01-.206-1.4L12.903 8H1.033C.462 8 0 7.552 0 7s.462-1 1.032-1h11.871L9.497 1.6A.98.98 0 019.703.2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgComponent;
