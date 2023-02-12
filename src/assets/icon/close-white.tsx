import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function CloseWhite(props: SvgProps) {
  return (
    <Svg width={17} height={17} viewBox="0 0 14 14" fill="none" {...props}>
      <Path
        d="M8.41 7l4.3-4.29a1.004 1.004 0 10-1.42-1.42L7 5.59l-4.29-4.3a1.004 1.004 0 00-1.42 1.42L5.59 7l-4.3 4.29a1 1 0 000 1.42.998.998 0 001.42 0L7 8.41l4.29 4.3a.998.998 0 001.42 0 .997.997 0 00.219-1.095.998.998 0 00-.22-.325L8.41 7z"
        fill="#fff"
      />
    </Svg>
  );
}

export default CloseWhite
