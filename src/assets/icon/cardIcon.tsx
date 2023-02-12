import * as React from "react"
import Svg, { SvgProps, Mask, Path, G } from "react-native-svg"

function CardICon(props: SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <Mask
        id="prefix__a"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={4}
        y={3}
        width={22}
        height={22}
      >
        <Path
          transform="matrix(-1 0 0 1 20 3.998)"
          fill="#C4C4C4"
          d="M0 0h16v16H0z"
        />
      </Mask>
      <G mask="url(#prefix__a)" fill="#2E59E5">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 10.998h16v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5zm14 1.5a.5.5 0 00-.5-.5h-5a.5.5 0 000 1h5a.5.5 0 00.5-.5zm0 2a.5.5 0 00-.5-.5h-5a.5.5 0 000 1h5a.5.5 0 00.5-.5zm-.5 1.5a.5.5 0 110 1h-5a.5.5 0 110-1h5zm-9-1.5a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm.784.182a.938.938 0 011.092.925v.768c0 .345-.28.625-.625.625h-2.5a.625.625 0 01-.625-.625v-.768c0-.58.52-1.02 1.091-.925l.27.045c.34.057.687.057 1.027 0l.27-.045z"
        />
        <Path d="M20 8.998a2 2 0 00-2-2H6a2 2 0 00-2 2v1h16v-1z" />
      </G>
    </Svg>
  )
}

export default CardICon