import makeOctaves from "./makeOctaves";
import renderNoiseMapToCanvas from "./renderNoiseMapToCanvas";
import "./style.css";

const CANVAS = document.querySelector("canvas")!;
const CANVAS_CTX = CANVAS.getContext("2d")!;

let w = CANVAS.width;
let h = CANVAS.height;

const SIZE = 4;

const LACONARITY = 2;
const PERSISTANCE = 0.5;

const octaves = makeOctaves(3, w, h, SIZE, LACONARITY, PERSISTANCE);

renderNoiseMapToCanvas(octaves[0], CANVAS_CTX);
