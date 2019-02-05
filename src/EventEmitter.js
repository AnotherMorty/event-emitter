export class EventEmitter {
  constructor() {
    this.subscriptions = {};
  }

  subscribe(eventName, cb) {
    this.subscriptions[eventName] = cb;
  }

  emit(eventName) {
    this.subscriptions[eventName].call();
  }

}