import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={15} height={28} viewBox="0 0 15 28" fill="none" {...props}>
      <Path
        d="M.5 1.5V15c0 .825.675 1.5 1.5 1.5h3v10.725c0 .765 1.005 1.035 1.395.375l7.785-13.35A1.493 1.493 0 0012.89 12H9.5l3.735-9.975A1.491 1.491 0 0011.84 0H2C1.175 0 .5.675.5 1.5z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
