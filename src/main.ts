import noise from "./noise";
import "./style.css";

const CANVAS = document.querySelector("canvas")!;
const CANVAS_CTX = CANVAS.getContext("2d")!;

let w = CANVAS.width;
let h = CANVAS.height;

let size = 10;

let noiseMap = new Array(w).fill(0).map((_, x) => {
  return new Array(h).fill(0).map((_, y) => {
    let n = noise(size * (x / w), size * (y / h), 0.8);

    return n;
  });
});

CANVAS_CTX.fillStyle = "white";
CANVAS_CTX.fill();

noiseMap.forEach((row, x) => {
  row.forEach((alpha, y) => {
    CANVAS_CTX.fillStyle = `rgba(0, 0, 0, ${alpha})`;
    CANVAS_CTX.fillRect(x, y, 1, 1);
  });
});
