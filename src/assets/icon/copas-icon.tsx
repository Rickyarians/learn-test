import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CopasIcon(props) {
  return (
    <Svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4 3H3a2 2 0 00-2 2v9a2 2 0 002 2h6a2 2 0 002-2H6a2 2 0 01-2-2V3z"
        fill="#2E59E5"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 1.857c0-.492.21-.965.586-1.313A2.08 2.08 0 017 0h6c.53 0 1.04.196 1.414.544.375.348.586.82.586 1.313v9.286c0 .492-.21.965-.586 1.313A2.081 2.081 0 0113 13H7a2.08 2.08 0 01-1.414-.544A1.792 1.792 0 015 11.143V1.857zM6 3.25c0-.256.224-.464.5-.464h6c.276 0 .5.208.5.464s-.224.464-.5.464h-6c-.276 0-.5-.208-.5-.464zm.5 2.321c-.276 0-.5.208-.5.465 0 .256.224.464.5.464h6c.276 0 .5-.208.5-.464 0-.257-.224-.465-.5-.465h-6z"
        fill="#2E59E5"
      />
    </Svg>
  )
}

export default CopasIcon
