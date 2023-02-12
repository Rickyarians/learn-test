import * as React from "react"
import Svg, { SvgProps, Rect, Path } from "react-native-svg"

function TimeBlue(props: SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={24} height={24} rx={8} fill="#D2DBF9" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.333 5.333A.667.667 0 0110 6v.667h4V6a.666.666 0 111.333 0v.667H16a2 2 0 012 2v.667H6v-.667a2 2 0 012-2h.667V6a.667.667 0 01.666-.667zM6 10.668v6a2 2 0 002 2h8a2 2 0 002-2v-6H6z"
        fill="#2E59E5"
      />
    </Svg>
  )
}

export default TimeBlue
