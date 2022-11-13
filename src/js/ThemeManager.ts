export enum Themes {
  dark = "dark",
  light = "light"
}

export class ThemeManager {
  private currentTheme: Themes = window.localStorage.getItem("theme") as Themes || Themes.dark;

  public setDarkMode() {
    this.currentTheme = Themes.dark;
    window.localStorage.setItem("theme", Themes.dark);
  }

  public setLightMode() {
    this.currentTheme = Themes.light;
    window.localStorage.setItem("theme", Themes.light);
  }

  public getTheme(): Themes {
    return this.currentTheme;
  }
}