import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M.562 9.478L10.924.405a1.634 1.634 0 012.152 0L23.44 9.478c1.136.994.432 2.867-1.077 2.867h-1.643v8.383A3.27 3.27 0 0117.449 24h-1.635a1.635 1.635 0 01-1.634-1.636V18.48c0-.903-.732-1.636-1.635-1.636h-1.09c-.903 0-1.635.733-1.635 1.636v3.885c0 .904-.732 1.636-1.634 1.636H6.55a3.27 3.27 0 01-3.27-3.272v-8.384H1.638c-1.51 0-2.212-1.872-1.076-2.866z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgComponent;
