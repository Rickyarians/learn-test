import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function ArrowRight(props: SvgProps) {
  return (
    <Svg
      width={17}
      height={14}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.203.2a1.054 1.054 0 011.445.2l4.646 6a.975.975 0 010 1.2l-4.646 6c-.342.442-.989.531-1.445.2a.98.98 0 01-.206-1.4L13.403 8H1.533C.962 8 .5 7.552.5 7s.462-1 1.032-1h11.871L9.997 1.6a.98.98 0 01.206-1.4z"
        fill="#fff"
      />
    </Svg>
  )
}

export default ArrowRight
