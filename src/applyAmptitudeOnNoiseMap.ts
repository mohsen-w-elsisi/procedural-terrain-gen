import { NoiseMap } from "./types";

export default function applyAmptitudeOnNoiseMap(
  noiseMap: NoiseMap,
  amptitude: number
): NoiseMap {
  return noiseMap.map((row) => row.map((v) => v * amptitude));
}
