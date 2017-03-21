import {AbstractPublisher} from "./AbstractPublisher";

export class EventPublisher extends AbstractPublisher {
  constructor() {
    super();
  }

  instance() {
    return new EventPublisher();
  }

  public NotifyObservers() {
    for (let i = 0; i < this.observers.length; i++) {
      this.observers[i].ReceiveNotification("A general event for demo purposes.");
    }
  }

}