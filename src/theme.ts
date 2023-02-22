export interface ThemeFuncs {
  dark?: ThemeFuncs;
  getColor: (key: string) => string;
}

export interface Theme {
  FOURTH_QUARTILE: string;
  THIRD_QUARTILE: string;
  SECOND_QUARTILE: string;
  FIRST_QUARTILE: string;
  NONE: string;
  background?: string;

  dark?: Theme;
}

export class ThemeClass implements ThemeFuncs {
  theme: Theme;
  dark: ThemeFuncs | undefined;
  isDark: boolean;

  constructor(theme: Theme, isDark: boolean = false) {
    this.theme = theme;
    this.isDark = isDark;
    if (theme.dark != undefined) this.dark = new ThemeClass(theme.dark, true);
  }

  getColor(key: string): string {
    switch (key) {
      case "FOURTH_QUARTILE":
        return this.theme.FOURTH_QUARTILE;
      case "THIRD_QUARTILE":
        return this.theme.THIRD_QUARTILE;
      case "SECOND_QUARTILE":
        return this.theme.SECOND_QUARTILE;
      case "FIRST_QUARTILE":
        return this.theme.FIRST_QUARTILE;
      case "NONE":
        return this.theme.NONE;
      case "background":
      default:
        return this.theme.background || this.isDark ? "#0f0f0f" : "#edebf0";
    }
  }
}

interface ThemeList {
  [key: string]: ThemeFuncs | (() => ThemeFuncs);
}

const themes: ThemeList = {};

export const registerTheme = (
  name: string,
  theme: (() => ThemeFuncs) | ThemeFuncs | Theme
) => {
  if (typeof theme == "object" && !("getColor" in theme)) {
    themes[name] = new ThemeClass(theme);
  } else {
    themes[name] = theme;
  }
};

export const getThemes = () => {
  return Object.keys(themes);
};

export const getTheme = (themeName: string): ThemeFuncs => {
  const isDark = themeName.endsWith(":dark");
  themeName = themeName.replace(":dark", "");
  let theme: ThemeFuncs | (() => ThemeFuncs) = themes[themeName];
  if (theme == undefined) {
    theme = themes["green"];
  }
  if (typeof theme == "function") {
    let tfn = theme();
    return isDark ? tfn.dark || tfn : tfn;
  }
  return isDark ? theme.dark || theme : theme;
};
