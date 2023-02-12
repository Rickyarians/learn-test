import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"

function LogOut(props: SvgProps) {
  return (
    <Svg
      width={16}
      height={16}
      fill="none"
      {...props}
    >
      <G clipPath="url(#prefix__clip0)" fill="#fff">
        <Path d="M2.667 0A2.667 2.667 0 000 2.667v10.667A2.667 2.667 0 002.667 16H7.11a.889.889 0 000-1.778H2.667a.889.889 0 01-.89-.888V2.667a.889.889 0 01.89-.89H7.11a.889.889 0 100-1.777H2.667z" />
        <Path d="M10.927 3.817a.889.889 0 011.257 0l3.556 3.555a.889.889 0 010 1.257l-3.556 3.556a.889.889 0 01-1.257-1.257l2.039-2.038H6.222a.889.889 0 110-1.778h6.744l-2.039-2.038a.889.889 0 010-1.257z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h16v16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default LogOut
