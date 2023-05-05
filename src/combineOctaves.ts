import { NoiseMap } from "./types";
import { arrayOfLength } from "./utils";

export default function combineOxtaves(octaves: NoiseMap[]) {
  const height = octaves[0].length;
  const width = octaves[0][0].length;

  let combinedNoiseMap: NoiseMap = arrayOfLength(height).fill(
    arrayOfLength(width)
  );

  combinedNoiseMap = combinedNoiseMap.map((row, y) =>
    row.map(
      (_, x) =>
        octaves
          .map((octave) => octave[y][x]) // noise value from each octave
          .reduce((acc, cur) => acc + cur) - // get sum of all values
        0.5
    )
  );

  return combinedNoiseMap;
}
