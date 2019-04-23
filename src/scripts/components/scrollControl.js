import throttle from 'lodash/throttle';

export default class Scroll {
  constructor(app) {
    this.app = app;
    this.currentPage = 1;
    this.showPageHandler = this.showPageHandler.bind(this);
  }

  showPageHandler(e) {
    this.app.pos = e.pageY;
    const sectionsHeights = [].slice
      .call(document.querySelectorAll('section'))
      .map(item => item.offsetTop - 150);
    this.pageControl(sectionsHeights, this.app.pos);
  }

  pageControl(boundries, pos) {
    // console.log(boundries, pos);
    if (pos > boundries[0] && pos < boundries[1] && this.currentPage !== 1) {
      console.log('PAGE 1');
      this.currentPage = 1;
    } else if (pos > boundries[1] && pos < boundries[2] && this.currentPage !== 2) {
      console.log('PAGE 2');
      this.currentPage = 2;
    } else if (pos > boundries[2] && pos < boundries[3] && this.currentPage !== 3) {
      console.log('PAGE 3');
      this.currentPage = 3;
    } else if (pos > boundries[3] && pos < boundries[4] && this.currentPage !== 4) {
      console.log('PAGE 4');
      this.currentPage = 4;
    } else if (pos > boundries[4] && this.currentPage !== 5) {
      console.log('PAGE 5');
      this.currentPage = 5;
    }
  }

  setup() {
    window.addEventListener('scroll', throttle(this.showPageHandler, 150));
  }
}
