import type { EventBusEventIds } from "../types";

export interface Registry {
  unregister: () => void;
}

export interface Callable {
  [key: string]: Function;
}

export interface Subscriber {
  [key: string]: Callable;
}

export interface IEventBus {
  dispatch<T>(event: EventBusEventIds, arg?: T): void;
  register(event: EventBusEventIds, callback: Function): Registry;
}

export class EventBus implements IEventBus {
  private readonly subscribers: Subscriber;
  private static nextId = 0;

  constructor() {
    this.subscribers = {};
  }

  public dispatch<T>(event: EventBusEventIds, arg?: T): void {
    const subscriber = this.subscribers[event];

    if (subscriber === undefined) {
      return;
    }

    Object.keys(subscriber).forEach((key) => subscriber[key](arg));
  }

  public register(event: EventBusEventIds, callback: Function): Registry {
    const id = this.getNextId();
    if (!this.subscribers[event]) this.subscribers[event] = {};

    this.subscribers[event][id] = callback;

    return {
      unregister: () => {
        delete this.subscribers[event][id];
        if (Object.keys(this.subscribers[event]).length === 0) {
          delete this.subscribers[event];
        }
      },
    };
  }

  private getNextId(): number {
    return EventBus.nextId++;
  }
}