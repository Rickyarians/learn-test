import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        opacity={0.6}
        d="M13 5h8a1 1 0 110 2h-8V5zM9 17h12a1 1 0 110 2H9v-2zm10-6h2a1 1 0 110 2h-2v-2z"
        fill="#2E58E5"
      />
      <Path
        d="M2 6a1 1 0 001 1h6v1a1 1 0 002 0V4a1 1 0 10-2 0v1H3a1 1 0 00-1 1zm14 9a1 1 0 001-1v-3.988a1 1 0 10-2 0V11H3a1 1 0 100 2h12v1a1 1 0 001 1zM6 21a1 1 0 001-1v-4a1 1 0 10-2 0v1H3a1 1 0 100 2h2v1a1 1 0 001 1z"
        fill="#15243D"
      />
    </Svg>
  )
}

export default SvgComponent
