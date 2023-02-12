import * as React from "react"
import Svg, { SvgProps, Path, Rect } from "react-native-svg"

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      {...props}
      width={20}
      height={20}
    >
      <Path
        d="M11.92 2.698v-.206A1.92 1.92 0 0010 .572H2.143A1.571 1.571 0 00.576 2.254a.528.528 0 00-.005.064v8.555a2.27 2.27 0 002.27 2.27h8.73a1.92 1.92 0 001.921-1.92V4.586a1.92 1.92 0 00-1.571-1.889zM2.144 1.62H10c.482 0 .873.391.873.873v.175h-8.73a.524.524 0 010-1.048zm7.682 5.937h1.397a.524.524 0 110 1.047H9.825a.524.524 0 010-1.047z"
        fill="#fff"
      />
      <Rect
        x={7}
        y={7}
        width={8.428}
        height={8.428}
        rx={4.214}
        fill="#2E59E5"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.214 8.054a3.16 3.16 0 100 6.321 3.16 3.16 0 000-6.321zm.287 4.31a.287.287 0 01-.574 0v-.862h-.862a.287.287 0 110-.575h.862v-.862a.287.287 0 01.574 0v.862h.862a.287.287 0 110 .575h-.862v.862z"
        fill="#12BE6C"
      />
    </Svg>
  )
}

export default SvgComponent
