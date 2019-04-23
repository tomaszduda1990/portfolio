import throttle from 'lodash/throttle';

export default class Scroll {
  constructor(app) {
    this.app = app;
    this.showPageHandler = this.showPageHandler.bind(this);
  }

  showPageHandler(e) {
    this.app.pos = e.pageY;
    const sectionsHeights = [].slice
      .call(document.querySelectorAll('section'))
      .map(item => item.offsetTop);
    this.pageControl(sectionsHeights, this.app.pos);
  }

  pageControl(boundries, pos) {
    if (pos > boundries[0] - 100 && pos < boundries[1] - 100) {
      console.log('PAGE 1');
    } else if (pos > boundries[1] - 100 && pos < boundries[2] - 100) {
      console.log('PAGE 2');
    } else if (pos > boundries[2] - 100 && pos < boundries[3] - 100) {
      console.log('PAGE 3');
    } else if (pos > boundries[3] - 100 && pos < boundries[4] - 100) {
      console.log('PAGE 4');
    } else if (pos > boundries[4] - 100 && pos < boundries[5] - 100) {
      console.log('PAGE 5');
    }
  }

  setup() {
    window.addEventListener('scroll', throttle(this.showPageHandler, 150));
  }
}
