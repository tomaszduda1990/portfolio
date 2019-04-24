export const works = [
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
export const createLi = project => {
  const li = document.createElement('li');
  li.classList.add('project');
  li.textContent = project.title;
  return li;
};
