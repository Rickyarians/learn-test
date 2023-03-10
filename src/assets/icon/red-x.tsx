import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={20} height={20} fill="none" {...props}>
      <Path
        d="M10 20c5.47 0 10-4.54 10-10C20 4.53 15.46 0 9.99 0 4.53 0 0 4.53 0 10c0 5.46 4.54 10 10 10zm-3.46-5.726a.818.818 0 01-.57-1.392l2.873-2.872-2.872-2.873a.827.827 0 01-.236-.568c0-.451.363-.804.804-.804A.74.74 0 017.108 6L9.99 8.873l2.912-2.883a.752.752 0 01.559-.245c.441 0 .804.363.804.804a.784.784 0 01-.236.578l-2.882 2.883 2.873 2.863a.808.808 0 01.235.578.82.82 0 01-.814.823.842.842 0 01-.578-.245L9.99 11.157l-2.853 2.872a.829.829 0 01-.598.245z"
        fill="#ED473B"
      />
    </Svg>
  );
}

export default SvgComponent;
