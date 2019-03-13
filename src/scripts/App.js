import Scroll from './components/scrollControl';

export default class App {
  constructor(sections) {
    this.sections = sections;
    this.pos = 0;
    this.scroll = new Scroll(this);
  }

  init() {
    this.scroll.setup();
  }
}
