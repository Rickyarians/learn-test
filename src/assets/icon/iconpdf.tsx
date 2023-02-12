import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={13}
      height={16}
      viewBox="0 0 13 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 2v12a2 2 0 002 2h9a2 2 0 002-2V3.828a2 2 0 00-.586-1.414L10.586.586A2 2 0 009.172 0H2a2 2 0 00-2 2zm2 1.75A.75.75 0 012.75 3h3.5a.75.75 0 010 1.5h-3.5A.75.75 0 012 3.75zm0 3A.75.75 0 012.75 6h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 012 6.75zm0 3A.75.75 0 012.75 9h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 012 9.75zM2.75 12a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5z"
        fill="#318C34"
      />
    </Svg>
  )
}

export default SvgComponent
