export class EventEmitter {
  constructor() {
    this.subscriptions = {

    };
  }

  subscribe(eventName, cb) {
    const subscription = {
      subscribed: true,
      cb,
    };

    if (!this.subscriptions.hasOwnProperty(eventName)) {
      this.subscriptions[eventName] = [];
    }

    this.subscriptions[eventName].push(subscription);

    return () => {
      subscription.subscribed = false;
    }
  }

  emit(eventName) {
    if (this.subscriptions.hasOwnProperty(eventName)) {
      this.subscriptions[eventName].forEach(subscription => {
        if (subscription.subscribed) {
          subscription.cb.call();
        }
      });
    }
  }

}