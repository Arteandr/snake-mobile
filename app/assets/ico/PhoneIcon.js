import React from "react";
import { Svg, Rect, Circle } from "react-native-svg";

export default function PhoneIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Rect
        x={6}
        y={3}
        width={12}
        height={18}
        rx={2}
        stroke="#65BCBF"
        strokeWidth={2}
      />
      <Circle cx={12} cy={17.5} r={1.5} fill="#65BCBF" />
    </Svg>
  );
}
