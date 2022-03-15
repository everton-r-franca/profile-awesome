import color from "./color.js";

const color1 = color.rand();
const color2 = color.rgb2hsl(color.hex2rgb(color1));

document.getElementById("color1").style.backgroundColor = color1;

const r = color2[0] >= 180 ? color2[0] - 180 : color2[0] + 180;
const g = color2[1];
const b = color2[2];

console.log("fundo", color1, [r, g, b]);

document.getElementById("color2").style.color = color.hsl2rgb([r, g, b]);

function teste() {
  return true;
}

export default teste;
