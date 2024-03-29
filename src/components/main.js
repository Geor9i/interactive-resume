import { eventBus } from "../lib/eventBus.js";

export default class MainComponent {
    constructor() {
        this.eventSubscriberId = 'main';
        this.mainElement = document.querySelector(".wrapper .main");
        this.eventBus = eventBus;
        this.scroll();
        this.target = `#summary .name`;
    }


    scroll() {
        this.eventBus.subscribe(this.eventSubscriberId, 'mousemove', () => {
            console.log('here');
        }, {target: `img`})
    }
}