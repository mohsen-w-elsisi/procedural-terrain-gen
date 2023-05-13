import { NoiseMap } from "./types";

const colorMap = [
  {
    max: 0.45,
    color: "blue",
  },
  {
    max: 0.48,
    color: "beige",
  },
  {
    max: 0.65,
    color: "green",
  },
  {
    max: 0.75,
    color: "grey",
  },
  {
    max: 1,
    color: "white",
  },
];

export default function renderNoiseMapToCanvas(
  noiseMap: NoiseMap,
  canvasCtx: CanvasRenderingContext2D
) {
  noiseMap.forEach((row, x) => {
    row.forEach((alpha, y) => {
      canvasCtx.fillStyle = pickValueColor(alpha);
      canvasCtx.fillRect(x, y, 1, 1);
    });
  });
}

function pickValueColor(noiseValue: number) {
  for (const color of colorMap) {
    if (noiseValue < color.max) return color.color;
  }
}
