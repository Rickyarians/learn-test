import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={20} height={24} viewBox="0 0 20 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 3.938C0 1.763 2.015 0 4.5 0h9C15.985 0 18 1.763 18 3.938v7.874h-7.5c-1.657 0-3 1.176-3 2.626V21h-3C2.015 21 0 19.237 0 17.062V3.938zm3-.985c-.621 0-1.125.44-1.125.985 0 .543.504.984 1.125.984h12c.621 0 1.125-.44 1.125-.984s-.504-.985-1.125-.985H3zm.375 4.922c0-.544.504-.984 1.125-.984h9c.621 0 1.125.44 1.125.984s-.504.984-1.125.984h-9c-.621 0-1.125-.44-1.125-.984zM9 15.5a2 2 0 012-2h6.5a2 2 0 012 2V22a2 2 0 01-2 2H11a2 2 0 01-2-2v-6.5zm1.929-.071a.985.985 0 011.392 0l2.625 2.625a.984.984 0 01.288.696v2.625a.984.984 0 11-1.968 0v-2.217l-2.337-2.337a.985.985 0 010-1.392z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgComponent;
