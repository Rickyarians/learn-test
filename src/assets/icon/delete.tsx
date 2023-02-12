import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={15} height={16} viewBox="0 0 13 14" fill="none" {...props}>
      <Path
        d="M12.833 3a.667.667 0 01-.588.662l-.078.005h-.564l-.82 8.346a1.833 1.833 0 01-1.825 1.654H4.042a1.834 1.834 0 01-1.825-1.654l-.82-8.346H.833a.667.667 0 010-1.334h3.334a2.333 2.333 0 114.666 0h3.334a.667.667 0 01.666.667zM8 5.167a.5.5 0 00-.495.432l-.005.068v4.666l.005.068a.5.5 0 00.99 0l.005-.068V5.667l-.005-.068A.5.5 0 008 5.167zm-3 0a.5.5 0 00-.495.432l-.005.068v4.666l.005.068a.5.5 0 00.99 0l.005-.068V5.667l-.005-.068A.5.5 0 005 5.167zm1.5-3.834a1 1 0 00-1 1h2a1 1 0 00-1-1z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
