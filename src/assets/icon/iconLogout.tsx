import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function IconLogOut(props: any) {
  return (
    <Svg
      width={50}
      height={50}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={24.5} cy={25} r={24.5} fill="#2E58E5" />
      <Path
        d="M19 15.5a3 3 0 00-3 3v12a3 3 0 003 3h5a1 1 0 000-2h-5a1 1 0 01-1-1v-12a1 1 0 011-1h5a1 1 0 000-2h-5z"
        fill="#fff"
      />
      <Path
        d="M28.293 19.793a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414l2.293-2.293H23a1 1 0 010-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
        fill="#fff"
      />
    </Svg>
  )
}

export default IconLogOut
