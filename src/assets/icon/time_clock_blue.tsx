import * as React from "react"
import Svg, { SvgProps, Rect, Path } from "react-native-svg"

function TimeClockBlue(props: SvgProps) {
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
        d="M12 5.333a6.667 6.667 0 110 13.334 6.667 6.667 0 010-13.334zm-.667 3.334a.667.667 0 00-.667.667v3.333a.667.667 0 00.667.667H14A.666.666 0 1014 12h-2V9.334a.667.667 0 00-.667-.667z"
        fill="#2E59E5"
      />
    </Svg>
  )
}

export default TimeClockBlue
