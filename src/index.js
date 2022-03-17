import color from "./color.js";
import constructor from "./constructor.js";
const color1 = color.rand();
const color2 = color.rgb2hsl(color.hex2rgb(color1));

document.getElementById("color1").style.backgroundColor = color1;

const r = color2[0] >= 180 ? color2[0] - 180 : color2[0] + 180;
const g = color2[1];
const b = color2[2];

console.log("fundo", color1, [r, g, b]);

document.getElementById("color2").style.color = color.hsl2rgb([r, g, b]);

const colors = {
  theme: "dark", // or light (dark = color1 dark, color2 light)
  relation: "complementary", // or Tone,
  contrast: 5, // min contrast between two colors
};

function profileAwesome(props) {
  let _props = {
    target: "profile-awesome",
    patternId: "",
    patternAlt: "",
    theme: "dark",
    relation: "complementary",
    contrast: 5,
    type: "auto",
  };
  for (let key in props) {
    _props[key] = props[key];
  }
  return new Promise((resolve, reject) => {
    const HTMLCollectionImages = document.getElementsByClassName(_props.target);
    const images = [];
    for (let image of HTMLCollectionImages) {
      images.push({
        id: image.id.replace(_props.patternId, ""),
      });
    }
    resolve(HTMLCollectionImages);
  });
}

function ProfileAwesome(...props) {
  console.log(props);
  const _props = constructor(props);
  console.log(_props);

  return {
    run: () => profileAwesome(_props),
  };
}

const images = ProfileAwesome(["teste", { type: "text" }]);

export default ProfileAwesome;
