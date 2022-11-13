import { EventBus } from "./EventBus";
import { ThemeManager } from "./ThemeManager";

declare global {
  interface Window {
    APP: App;
  }
}

class App {
  private static _instance: App | null = null;

  private eventBus: EventBus | undefined;
  private themeManager: ThemeManager | undefined;

  public static getInstance() {
    if (!App._instance) {
      App._instance = new App();
    }

    return App._instance;
  }

  public getEventBus() {
    if (!this.eventBus) this.eventBus = new EventBus();
    return this.eventBus;
  }

  public getThemeManager() {
    if (!this.themeManager) this.themeManager = new ThemeManager();
    return this.themeManager;
  }
}

export const app = new App();