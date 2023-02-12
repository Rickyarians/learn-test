import * as React from 'react';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Svg, { Path, SvgProps } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={heightPercentageToDP(3)}
      height={heightPercentageToDP(3)}
      viewBox="0 0 14 13"
      fill="none"
      {...props}>
      <Path
        d="M8.414 1.666L9.634 3h2.7v8H1.667V3h2.7l1.22-1.334h2.827zM9 .333H5L3.78 1.666H1.667C.933 1.666.333 2.266.333 3v8c0 .733.6 1.333 1.334 1.333h10.666c.734 0 1.334-.6 1.334-1.333V3c0-.734-.6-1.334-1.333-1.334H10.22L9 .333zM7 5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0-1.334a3.335 3.335 0 000 6.667 3.335 3.335 0 000-6.667z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
