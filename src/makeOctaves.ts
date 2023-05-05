import applyAmptitudeOnNoiseMap from "./applyAmptitudeOnNoiseMap";
import makeNoiseMap from "./makeNoiseMap";
import { NoiseMap } from "./types";
import { arrayOfLength } from "./utils";

export default function makeOctaves(
  n: number,
  width: number,
  height: number,
  size: number,
  laconarity: number,
  persistance: number
): NoiseMap[] {
  return arrayOfLength(n).map((_, i) =>
    applyAmptitudeOnNoiseMap(
      makeNoiseMap(width, height, size * Math.pow(laconarity, i)),
      Math.pow(persistance, i)
    )
  );
}
