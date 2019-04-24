import { createLi } from './helpers';

export default class {
  constructor(ul, projects) {
    this.ul = ul;
    this.projects = projects;
  }

  initializeProjects() {
    const fragment = document.createDocumentFragment();
    this.projects.forEach(item => fragment.appendChild(createLi(item)));
    this.ul.appendChild(fragment);
  }
}
