export default class EventManager {
  constructor(eventTypes, eventElement, eventBus) {
    this.eventElement = eventElement;
    this.eventTypes = eventTypes;
    this.currentEvent = null;
    this.eventBus = eventBus;
    this.hasInitilized = false;
    this._init()
  }

  _init() {
    if (this.hasInitilized) throw new Error('Events already Initialized!');

    this.hasInitilized = true;
    this.eventTypes.forEach((event) => {
      const eventRef = this.eventElement.addEventListener(event, (e) => {
        this.currentEvent = event;
        const { parents, children } = this.getRelatives(e);
        this.eventBus.publish({ e, parents, children });

      });
    });
  }

  getRelatives(e) {
    let currentElement = e.target;
    const parents = [];
    const children = Array.from(e.target.children);
    while (currentElement !== document.body) {
      currentElement = currentElement?.parentElement;
      parents.push(currentElement);
    }
    return { parents, children }
  }

}