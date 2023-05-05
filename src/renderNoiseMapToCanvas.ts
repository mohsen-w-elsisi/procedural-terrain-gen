import { NoiseMap } from "./types";

export default function renderNoiseMapToCanvas(
  noiseMap: NoiseMap,
  canvasCtx: CanvasRenderingContext2D
) {
  noiseMap.forEach((row, x) => {
    row.forEach((alpha, y) => {
      canvasCtx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
      canvasCtx.fillRect(x, y, 1, 1);
    });
  });
}
