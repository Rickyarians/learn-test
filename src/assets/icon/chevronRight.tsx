import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ChevronRight(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9 6l6 6-6 6"
        stroke="#2E59E5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ChevronRight
