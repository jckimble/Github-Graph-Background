# Welcome to GitHub Graph Background 👋

[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
![build status](https://github.com/jckimble/github-graph-background/actions/workflows/release.yml/badge.svg?branch=master)
[![npm version](https://img.shields.io/npm/v/@jckimble/github-graph-background)](https://www.npmjs.com/package/@jckimble/github-graph-background)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/jckimble/Github-Graph-Background#readme)
[![License: MIT](https://img.shields.io/github/license/jckimble/github-graph-background)](https://github.com/jckimble/Github-Graph-Background/blob/master/LICENSE)

> A toy program for getting your GitHub Contributions and creating a background image from it with many themes.

## Usage

```sh
npx @jckimble/github-graph-background
```

## Options

> Github Token can be read from the GITHUB_TOKEN Environment Variable

| Option   | Description            | Default          |
| -------- | ---------------------- | ---------------- |
| --output | Image Output           | ./background.png |
| --width  | Image Width            | 1366             |
| --height | Image Height           | 768              |
| --margin | Spacing Between Blocks | 2                |
| --token  | GitHub Token           | N/A              |
| --theme  | Color Theme            | green            |

## Themes

> Special value of random picks a theme at random. Default theme is green.
> Current themes are: green, blue, red, rose, fullrandom and random along with their dark variants.
> Adding :dark after a theme name generates the dark version.

### Green (green and green:dark)

![green](https://github.com/jckimble/Github-Graph-Background/releases/latest/download/green.png)
![green:dark](https://github.com/jckimble/Github-Graph-Background/releases/latest/download/green.dark.png)

### Blue (blue and blue:dark)

![blue](https://github.com/jckimble/Github-Graph-Background/releases/latest/download/blue.png)
![blue:dark](https://github.com/jckimble/Github-Graph-Background/releases/latest/download/blue.dark.png)

### Red (red and red:dark)

![red](https://github.com/jckimble/Github-Graph-Background/releases/latest/download/red.png)
![red:dark](https://github.com/jckimble/Github-Graph-Background/releases/latest/download/red.dark.png)

### Rose (rose and rose:dark)

![rose](https://github.com/jckimble/Github-Graph-Background/releases/latest/download/rose.png)
![rose:dark](https://github.com/jckimble/Github-Graph-Background/releases/latest/download/rose.dark.png)

### Full Random (fullrandom and fullrandom:dark)

![fullrandom](https://github.com/jckimble/Github-Graph-Background/releases/latest/download/fullrandom.png)
![fullrandom:dark](https://github.com/jckimble/Github-Graph-Background/releases/latest/download/fullrandom.dark.png)

## From Source

### Install

```sh
git clone https://github.com/jckimble/github-graph-background
cd github-graph-background
npm install
```

### Usage

```sh
npm run start
```

### Run tests

```sh
npm run test
```

## Author

👤 **James C Kimble Jr**

- Website: https://jckimble.com
- Twitter: [@jckimble601](https://twitter.com/jckimble601)
- Github: [@jckimble](https://github.com/jckimble)
- LinkedIn: [@james-kimble-865092212](https://linkedin.com/in/james-kimble-865092212)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/jckimble/Github-Graph-Background/issues). You can also take a look at the [contributing guide](https://github.com/jckimble/Github-Graph-Background/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## Donations

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/jckimble)

## 📝 License

Copyright © 2023 [James C Kimble Jr](https://github.com/jckimble).

This project is [MIT](https://github.com/jckimble/Github-Graph-Background/blob/master/LICENSE) licensed.
