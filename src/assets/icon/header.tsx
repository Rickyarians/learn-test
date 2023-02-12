import * as React from 'react';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={widthPercentageToDP(100)} height={289} viewBox="0 0 372 289" fill="none" {...props}>
      <Circle opacity={0.05} cx={314.5} cy={78.5} r={153.5} fill="#2E58E5" />
      <Circle opacity={0.15} cx={337} cy={114} r={167.5} stroke="#2E58E5" />
      <Path
        opacity={0.05}
        d="M49.664 44.794c.019-2.31 2.53-3.732 4.521-2.561l23.14 13.612c1.99 1.171 1.967 4.058-.042 5.196L53.924 74.275c-2.01 1.138-4.497-.326-4.478-2.635l.218-26.846zM158.959 230.544c1.966-1.211 4.506.16 4.572 2.468l1.039 36.332c.067 2.308-2.391 3.823-4.423 2.726l-31.984-17.266c-2.032-1.097-2.115-3.982-.149-5.194l30.945-19.066zM30.919 191.9c1.966-1.212 4.506.16 4.573 2.468l.659 23.049c.066 2.309-2.392 3.823-4.424 2.726l-20.29-10.954c-2.033-1.097-2.115-3.982-.15-5.194L30.92 191.9z"
        fill="#2E58E5"
      />
    </Svg>
  );
}

export default SvgComponent;
