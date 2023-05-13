import combineOxtaves from "./combineOctaves";
import makeOctaves from "./makeOctaves";
import renderNoiseMapToCanvas from "./renderNoiseMapToCanvas";
import "./style.css";

const CANVAS = document.querySelector("canvas")!;
const CANVAS_CTX = CANVAS.getContext("2d")!;

let w = CANVAS.width;
let h = CANVAS.height;

const SIZE = 6;

const LACONARITY = 1.9;
const PERSISTANCE = 0.5;

const octaves = makeOctaves(4, w, h, SIZE, LACONARITY, PERSISTANCE);

const finalNoiseMap = combineOxtaves(octaves);

renderNoiseMapToCanvas(finalNoiseMap, CANVAS_CTX);
