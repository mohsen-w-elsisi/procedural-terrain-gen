import { arrayOfLength } from "./utils";
import noise from "./noise";
import { NoiseMap } from "./types";

const randomSeed = Math.floor(Math.random() * 10000);

export default function makeNoiseMap(
  width: number,
  height: number,
  frequency: number
): NoiseMap {
  return arrayOfLength(width).map((_, x) =>
    arrayOfLength(height).map((_, y) =>
      noise(frequency * (x / width), frequency * (y / height), randomSeed)
    )
  );
}
