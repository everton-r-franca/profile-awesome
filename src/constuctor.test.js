import constructor from "./constructor.js";

function ProfileAwesome(...props) {
  const _props = constructor(props);
  return _props;
}

test("Valid constructor without Props", () => {
  expect(ProfileAwesome()).toEqual({
    target: "profile-awesome",
    patternId: "",
    patternAlt: "",
    theme: "dark",
    relation: "complementary",
    contrast: 5,
    type: "auto",
  });
});

test("Valid constructor with a Target", () => {
  expect(ProfileAwesome("target")).toEqual({
    target: "target",
    patternId: "",
    patternAlt: "",
    theme: "dark",
    relation: "complementary",
    contrast: 5,
    type: "auto",
  });
});

test("Valid constructor with a Object", () => {
  expect(
    ProfileAwesome({ target: "target", theme: "theme", type: "type" })
  ).toEqual({
    target: "target",
    patternId: "",
    patternAlt: "",
    theme: "theme",
    relation: "complementary",
    contrast: 5,
    type: "type",
  });
});

test("Valid constructor with a String and a Object", () => {
  expect(ProfileAwesome("target", { type: "text" })).toEqual({
    target: "target",
    patternId: "",
    patternAlt: "",
    theme: "dark",
    relation: "complementary",
    contrast: 5,
    type: "text",
  });
});

test("Invalid constructor with a empty array", () => {
  expect(ProfileAwesome([])).toEqual({
    target: "profile-awesome",
    patternId: "",
    patternAlt: "",
    theme: "dark",
    relation: "complementary",
    contrast: 5,
    type: "auto",
  });
});

test("Invalid constructor with array", () => {
  expect(ProfileAwesome(["target", { type: "text" }])).toEqual({
    target: "profile-awesome",
    patternId: "",
    patternAlt: "",
    theme: "dark",
    relation: "complementary",
    contrast: 5,
    type: "auto",
  });
});

test("Invalid constructor with number", () => {
  expect(ProfileAwesome(5)).toEqual({
    target: "profile-awesome",
    patternId: "",
    patternAlt: "",
    theme: "dark",
    relation: "complementary",
    contrast: 5,
    type: "auto",
  });
});

test("Invalid constructor with two numbers", () => {
  expect(ProfileAwesome(5, 5)).toEqual({
    target: "profile-awesome",
    patternId: "",
    patternAlt: "",
    theme: "dark",
    relation: "complementary",
    contrast: 5,
    type: "auto",
  });
});

test("Invalid constructor with empty class", () => {
  expect(ProfileAwesome({})).toEqual({
    target: "profile-awesome",
    patternId: "",
    patternAlt: "",
    theme: "dark",
    relation: "complementary",
    contrast: 5,
    type: "auto",
  });
});
