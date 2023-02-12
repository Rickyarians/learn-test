import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={26} height={28} viewBox="0 0 26 28" fill="none" {...props}>
      <Path
        d="M21.18 14.25A1.493 1.493 0 0019.89 12h-2.805l3.42 3.42.675-1.17zm.24-12.075A1.503 1.503 0 0020.07 0H9c-.825 0-1.5.675-1.5 1.5v.915l9.195 9.195 4.725-9.435zm3.24 21.645L3.18 2.34a1.496 1.496 0 10-2.115 2.115l6.435 6.45V15c0 .825.675 1.5 1.5 1.5h3v10.725c0 .765 1.005 1.035 1.395.375l3.975-6.825 5.16 5.16c.585.585 1.53.585 2.115 0 .6-.585.6-1.53.015-2.115z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
