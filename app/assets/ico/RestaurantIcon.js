import React from "react";
import { Svg, Path, Rect, Circle } from "react-native-svg";

export default function RestaurantIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Rect x={1} y={15} width={22} height={2} rx={1} fill="#65BCBF" />
      <Path d="M4 16C5 5 19 5 20 16" stroke="#65BCBF" strokeWidth={2} />
      <Circle cx={12} cy={5.5} r={1.5} fill="#65BCBF" />
    </Svg>
  );
}
