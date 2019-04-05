import './styles/main.scss';
import debounce from 'lodash/debounce';
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
const projectList = document.querySelector('.projects__list ul');
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
const insertBeforeFragment = (projectsList, element, init) => {
  const first = element.firstElementChild;
  const frag = document.createDocumentFragment();
  projectsList.map(createLi).forEach(el => frag.appendChild(el));
  element.insertBefore(frag, first);
  if (init) {
    element.scrollTop = first.offsetTop - 50;
  }
};
const deleteTopLi = el => {
  const deleteRate = projects.length * 3;
  const startingValue = el.children.length - 1;

  for (let i = startingValue; i > deleteRate; i--) {
    el.removeChild(el.firstChild);
  }
};
const deleteBottomLi = el => {
  const deleteRate = projects.length;
  for (let i = 0; i < deleteRate; i++) {
    el.removeChild(el.lastChild);
  }
};
const activeClassControl = el => {
  const listItems = el.querySelectorAll('li');
  const center = el.getBoundingClientRect().height / 2;
  listItems.forEach(element => {
    const elCenter =
      element.getBoundingClientRect().top - element.getBoundingClientRect().height / 2;
    const topBorderActive = center + element.getBoundingClientRect().height / 3;
    const bottomBorderActive = center - element.getBoundingClientRect().height / 3;
    if (elCenter < topBorderActive && elCenter > bottomBorderActive) {
      element.classList.add('projects__item--active');
    } else {
      element.classList.remove('projects__item--active');
    }
  });
};
const scrollingProjects = e => {
  const endOfList = e.target.lastChild.getBoundingClientRect().bottom;
  if (e.target.scrollTop + 400 > endOfList) {
    appendFragment(projects, projectList);
    e.target.children.length > 12 ? deleteTopLi(e.target) : null;
  } else if (e.target.scrollTop - 400 <= 0) {
    insertBeforeFragment(projects, projectList);
    e.target.children.length > 12 ? deleteBottomLi(e.target) : null;
  }
  activeClassControl(e.target);
};
const scrollHandler = debounce(scrollingProjects, 50);

// events

window.onload = () => {
  app.init();
  const arr = document.querySelectorAll('.about_me__card p');
  arr.forEach(textToSpan);

  // testing adding li elements to ul onload

  appendFragment(projects, projectList);
  appendFragment(projects, projectList);
  insertBeforeFragment(projects, projectList, true);
};

// scrolling ul event
projectList.addEventListener('scroll', scrollHandler);

// test event
const div = document.querySelector('.about_me__card--active');
div.addEventListener('click', function(e) {
  e.target.classList.toggle('about_me__card--active');
});
