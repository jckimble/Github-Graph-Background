import { createCanvas } from "canvas";
import { getTheme } from "./theme";
import "./themes";
import fs from "fs";
import {
  Command,
  CommanderError,
  InvalidOptionArgumentError,
  Option,
} from "commander";
import { getContributions } from "./github";
const packageJson = require("../package.json");

export const buildCanvas = (
  contributions: any,
  width: number,
  height: number,
  margin: number,
  themeName: string
) => {
  const weeks = contributions.weeks;
  const border = width % weeks.length;
  const cube = (width - border) / weeks.length - margin * 2;
  const centerStart = height / 2 - ((cube + margin * 2) * 7) / 2;

  const theme = getTheme(themeName);

  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");
  context.fillStyle = theme.getColor("background");
  context.fillRect(0, 0, width, height);

  let left = border / 2 + margin;
  for (let w = 0; w < weeks.length; w++) {
    let top = centerStart;
    let days = weeks[w].contributionDays;
    for (let d = 0; d < days.length; d++) {
      context.fillStyle = theme.getColor(days[d].contributionLevel);
      context.fillRect(left, top, cube, cube);
      top += cube + margin * 2;
    }
    left += cube + margin * 2;
  }

  return canvas;
};

const parseNumber = (val: string): number => {
  const regex = new RegExp(/^\d+$/);
  if (regex.test(val)) {
    const num = parseInt(val);
    if (num >= 0) {
      return num;
    }
  }
  throw new InvalidOptionArgumentError("Input Must Be Number");
};

const program = new Command();
program
  .name("github-graph-background")
  .version(packageJson.version)
  .description(packageJson.description)
  .addOption(
    new Option("-t, --token <token>", "GitHub Token")
      .env("GITHUB_TOKEN")
      .makeOptionMandatory(true)
  )
  .addOption(
    new Option("-w, --width <width>", "Image Width")
      .default(1366)
      .argParser<number>(parseNumber)
  )
  .addOption(
    new Option("-h, --height <height>", "Image Height")
      .default(768)
      .argParser<number>(parseNumber)
  )
  .addOption(
    new Option("-m, --margin <margin>", "Spacing Between Blocks")
      .default(2)
      .argParser<number>(parseNumber)
  )
  .option("-o, --output <output>", "Image Output", "./background.png")
  .option("-t, --theme <theme>", "Color Theme", "green")
  .action(async (options: any) => {
    try {
      const cal = await getContributions(options.token);
      const canvas = buildCanvas(
        cal,
        options.width,
        options.height,
        options.margin,
        options.theme
      );
      const buffer = canvas.toBuffer("image/png");
      fs.writeFileSync(options.output, buffer);
    } catch (error: any) {
      throw new CommanderError(
        2,
        "runtime.error",
        "Unable to create background"
      );
    }
  });

if (process.env.JEST_WORKER_ID == undefined) {
  program.parse(process.argv);
}
