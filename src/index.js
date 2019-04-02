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

const projects = [
  {
    name: 'Calculator',
    code: '#',
    live: '#'
  },
  {
    name: 'Quiz app',
    code: '#',
    live: '#'
  },
  {
    name: 'HTML 2 PSD',
    code: '#',
    live: '#'
  },
  {
    name: 'Hamburger App React',
    code: '#',
    live: '#'
  }
];
const createLi = el => {
  const li = document.createElement('li');
  const button = document.createElement('button');
  const links = document.createElement('div');
  const code = document.createElement('a');
  const live = document.createElement('a');
  // prepare li
  li.classList.add('projects__item');
  // prepare button
  button.classList.add('button');
  button.textContent = el.name;
  // prepare single project
  links.classList.add('project');
  code.setAttribute('href', el.code);
  code.setAttribute('target', '_blank');
  code.classList.add('project__link');
  live.setAttribute('href', el.live);
  live.setAttribute('target', '_blank');
  live.classList.add('project__link');

  // appending elements to each other
  links.appendChild(code);
  links.appendChild(live);
  li.appendChild(button);
  li.appendChild(links);
  return li;
};
const appendFragment = (projectsList, element) => {
  const frag = document.createDocumentFragment();
  projectsList.map(createLi).forEach(el => frag.appendChild(el));
  element.appendChild(frag);
};
const insertBeforeFragment = (projectsList, element) => {
  const first = element.firstElementChild;
  const frag = document.createDocumentFragment();
  projectsList.map(createLi).forEach(el => frag.appendChild(el));
  element.insertBefore(frag, first);
};
// events
const projectList = document.querySelector('.projects__list ul');
console.log(projectList);
window.onload = () => {
  app.init();
  const arr = document.querySelectorAll('.about_me__card p');
  arr.forEach(textToSpan);

  // testing adding li elements to ul onload

  appendFragment(projects, projectList);
  insertBeforeFragment(projects, projectList);
};

// test event
const div = document.querySelector('.about_me__card--active');
div.addEventListener('click', function(e) {
  e.target.classList.toggle('about_me__card--active');
});
