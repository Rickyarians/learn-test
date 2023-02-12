import * as React from "react"
import Svg, { Rect, Mask, Path, G } from "react-native-svg"

function ArrowRightBlock(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={24} height={24} rx={8} fill="#D2DBF9" />
      <Mask
        id="prefix__a"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={4}
        y={4}
        width={24}
        height={24}
      >
        <Path fill="#C4C4C4" d="M4 4h16v16H4z" />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 20a8 8 0 100-16 8 8 0 000 16zm1.665-10.748a.838.838 0 00-1.13-.063.718.718 0 00-.066 1.06l.95 1.001H8.8c-.442 0-.8.336-.8.75s.358.75.8.75h4.618l-.95 1.002a.718.718 0 00.067 1.058.838.838 0 001.13-.062l2.133-2.25a.715.715 0 000-.996l-2.133-2.25z"
          fill="#2E59E5"
        />
      </G>
    </Svg>
  )
}

export default ArrowRightBlock
