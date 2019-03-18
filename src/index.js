import './styles/main.scss';
import App from './scripts/App';

const arrToSpan = arr => {
  const newArr = [];
  while (arr.length) {
    const textArr = arr.splice(0, 6);
    newArr.push(textArr);
  }
  return newArr.map(text => {
    const span = document.createElement('span');
    span.textContent = text.join(' ');
    span.textContent += ' ';
    return span;
  });
};
const textToSpan = p => {
  const fragment = document.createDocumentFragment();
  const array = arrToSpan(p.textContent.split(' '));
  p.innerText = '';
  array.forEach(el => {
    fragment.appendChild(el);
  });
  p.appendChild(fragment);
};
const app = new App(document.querySelectorAll('section'));
window.onload = () => {
  app.init();
  const arr = document.querySelectorAll('.about_me__card p');
  arr.forEach(textToSpan);
};

const div = document.querySelector('.about_me__card--active');
div.addEventListener('click', function(e) {
  e.target.classList.toggle('about_me__card--active');
});
