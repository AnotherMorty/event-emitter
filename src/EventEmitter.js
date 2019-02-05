export class EventEmitter {
  constructor() {
    this.subscriptions = {};
  }

  subscribe(eventName, cb) {
    this.subscriptions[eventName] = cb;
    return () => {
      delete this.subscriptions[eventName];
    }
  }

  emit(eventName) {
    if (this.subscriptions.hasOwnProperty(eventName)) {
      this.subscriptions[eventName].call();
    }
  }

}