import noise from "./noise";
import { NoiseMap } from "./types";

export default function makeNoiseMap(
  width: number,
  height: number,
  frequency: number
): NoiseMap {
  return arrayOfLength(width).map((_, x) =>
    arrayOfLength(height).map((_, y) =>
      noise(frequency * (x / width), frequency * (y / height), 0.8)
    )
  );
}

function arrayOfLength(n: number) {
  return new Array(n).fill(0);
}
