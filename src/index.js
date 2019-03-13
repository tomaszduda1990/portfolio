import './styles/main.scss';
import App from './scripts/App';

const app = new App(document.querySelectorAll('section'));
window.onload = () => {
  app.init();
};
