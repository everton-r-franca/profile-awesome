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
  if (Array.isArray(props[0])) {
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

export default extractProps;
