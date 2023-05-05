import makeNoiseMap from "./makeNoiseMap";
import renderNoiseMapToCanvas from "./renderNoiseMapToCanvas";
import "./style.css";

const CANVAS = document.querySelector("canvas")!;
const CANVAS_CTX = CANVAS.getContext("2d")!;

let w = CANVAS.width;
let h = CANVAS.height;
let size = 10;

let noiseMap = makeNoiseMap(w, h, size);

renderNoiseMapToCanvas(noiseMap, CANVAS_CTX)

