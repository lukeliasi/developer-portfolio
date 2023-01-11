import { EventBus } from "./EventBus";

declare global {
  interface Window {
    APP: App;
  }
}

class App {
  private static _instance: App | null = null;

  private eventBus: EventBus | undefined;

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
}

export const app = new App();