import color from "./color.js";

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

function allProps() {
  let _props = {
    target: "profile-awesome",
    patternId: "",
    patternAlt: "",
    theme: "dark",
    relation: "complementary",
    contrast: 5,
    type: "auto",
  };
  return _props;
}
function noProps(props) {
  if (props.length === 0) {
    return allProps();
  }
  return false;
}
function propsTarget(props) {
  let _props = allProps();
  if (props.length === 1 && typeof props[0] === "string") {
    _props.target = props[0];
    return _props;
  }
  return false;
}

function propsObject(props) {
  let _props = allProps();
  if (props.length === 1 && typeof props[0] === "object") {
    for (let key in props[0]) {
      _props[key] = props[0][key];
    }
    return _props;
  }
  return false;
}

function propsTargetObject(props) {
  let _props = allProps();
  if (
    props.length === 2 &&
    typeof props[0] === "string" &&
    typeof props[1] === "object"
  ) {
    for (let key in props[1]) {
      _props[key] = props[1][key];
    }
    _props.target = props[0];
    return _props;
  }
  return false;
}

function extractProps(props) {
  if (Array.isArray(props)) {
    console.error(
      "Invalid constructor params. Using the default props. Fix it, please."
    );
    return allProps();
  }
  const _props =
    noProps(props) ||
    propsTarget(props) ||
    propsObject(props) ||
    propsTargetObject(props);

  if (!_props) {
    console.error(
      "Invalid constructor params, using the default props. Fix it, please."
    );
    return allProps();
  }
  return _props;
}

function ProfileAwesome(...props) {
  const _props = extractProps(props);
  console.log(_props);

  return {
    run: () => profileAwesome(_props),
  };
}

const images = ProfileAwesome(5, 5);

export default ProfileAwesome;
