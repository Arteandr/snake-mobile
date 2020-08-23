import React from "react";
import { Svg, Path } from "react-native-svg";

export default function MoneyIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M7 6a4 4 0 01-4 4m4 8a4 4 0 00-4-4m14 4a4 4 0 014-4m0-4a4 4 0 01-4-4M3 6h18v12H3V6z"
        stroke="#65BCBF"
        strokeWidth={2}
      />
    </Svg>
  );
}
