import { buildCanvas } from "./index";
import fs from "fs";
import { getThemes, getTheme } from "./theme";
import { assert } from "console";

const generateFakeContributions = () => {
  const levels = [
    "FOURTH_QUARTILE",
    "THIRD_QUARTILE",
    "SECOND_QUARTILE",
    "FIRST_QUARTILE",
    "NONE",
  ];
  return {
    weeks: Array.apply(null, Array(53)).map(() => {
      return {
        contributionDays: Array.apply(null, Array(7)).map(() => {
          return {
            contributionLevel: levels[Math.floor(Math.random() * 5)],
          };
        }),
      };
    }),
  };
};

test("nonexistant theme", () => {
  const bleach = getTheme("bleach").getColor("NONE");
  const green = getTheme("green").getColor("NONE");
  assert(
    green == bleach,
    "green should be the default for non-existant themes"
  );
});

test("test themes", async () => {
  fs.mkdirSync("./examples");
  const cal = generateFakeContributions();
  const themes = getThemes();
  for (let i = 0; i < themes.length; i++) {
    const canvas = buildCanvas(cal, 1366 / 4, 768 / 4, 0.5, themes[i]);
    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync("./examples/" + themes[i] + ".png", buffer);
    const canvas2 = buildCanvas(
      cal,
      1366 / 4,
      768 / 4,
      0.5,
      themes[i] + ":dark"
    );
    const buffer2 = canvas2.toBuffer("image/png");
    fs.writeFileSync("./examples/" + themes[i] + ":dark.png", buffer2);
  }
});
