import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function KeyIcon(props: SvgProps) {
  return (
    <Svg
      width={23}
      height={23}
      fill="none"
      {...props}
    >
      <Path
        d="M3.667 19.666L9 14.333m2.667-2.667L9 14.333m-2.667 2.666L9 19.666m0-5.333l2.667 2.666M15 13a4.667 4.667 0 110-9.333 4.667 4.667 0 010 9.333z"
        stroke="#ED473B"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default KeyIcon

