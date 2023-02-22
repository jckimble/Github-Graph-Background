import { registerTheme, getThemes, getTheme, ThemeFuncs } from "../theme";

class FullRandom implements ThemeFuncs {
  dark: ThemeFuncs = {
    getColor: (key: string): string => {
      const themes = getThemes();
      const themeName = themes[Math.floor(Math.random() * themes.length)];
      const theme = getTheme(themeName);
      return theme.dark?.getColor(key) || theme.getColor(key);
    },
  };

  getColor(key: string): string {
    const themes = getThemes();
    const themeName = themes[Math.floor(Math.random() * themes.length)];
    return getTheme(themeName).getColor(key);
  }
}

class Random implements ThemeFuncs {
  dark: ThemeFuncs | undefined;
  theme: ThemeFuncs;

  constructor() {
    const themes = getThemes();
    const themeName = themes[Math.floor(Math.random() * themes.length)];
    this.theme = getTheme(themeName);
    this.dark = this.theme.dark;
  }

  getColor(key: string): string {
    return this.theme.getColor(key);
  }
}

registerTheme("fullrandom", new FullRandom());

registerTheme("random", () => new Random());
