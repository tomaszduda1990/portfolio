import throttle from 'lodash/throttle';

export default class Scroll {
  constructor(app) {
    this.app = app;

    this.showPos = this.showPos.bind(this);
  }

  showPos(e) {
    const y = e.pageY;
    this.app.pos = y;
    console.log(this.app.pos);
  }

  setup() {
    window.addEventListener('scroll', throttle(this.showPos, 150));
  }
}
