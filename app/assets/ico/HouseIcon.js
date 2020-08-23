import React from "react";
import { Svg, Path } from "react-native-svg";

export default function HouseIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M14.5 15h-5v4h-4V8.8L12 4l6.5 4.8V19h-4v-4z"
        stroke="#65BCBF"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
}
