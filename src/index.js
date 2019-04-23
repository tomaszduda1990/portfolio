import './styles/main.scss';
import App from './scripts/App';

// =========================== about me text animation
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

//  ==============================   infinite scroll projects
// -- creating arr with projects

const projects = [
  {
    title: 'Calculator',
    live: '#',
    code: '#'
  },
  {
    title: 'Quiz app',
    live: '#',
    code: '#'
  },
  {
    title: 'Test Project',
    live: '#',
    code: '#'
  },
  {
    title: 'Hamburger App',
    live: '#',
    code: '#'
  },
  {
    title: 'PSD to HTML',
    live: '#',
    code: '#'
  }
];

// events

window.onload = () => {
  app.init();
  const arr = document.querySelectorAll('.about_me__card p');
  arr.forEach(textToSpan);
};

// scrolling ul event
// projectList.addEventListener('scroll', scrollHandler);

// test event
const div = document.querySelector('.about_me__card--active');
div.addEventListener('click', function(e) {
  e.target.classList.toggle('about_me__card--active');
});
