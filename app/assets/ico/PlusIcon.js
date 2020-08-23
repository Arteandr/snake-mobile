import React from "react";
import { Svg, Path } from "react-native-svg";

export default function PlusIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path d="M11 4a1 1 0 112 0v16a1 1 0 11-2 0V4z" fill="#fff" />
      <Path d="M4 13a1 1 0 110-2h16a1 1 0 110 2H4z" fill="#fff" />
    </Svg>
  );
}
