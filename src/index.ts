import App from './App';
import updateModalView from './modal/modal';
import { createState } from './state';
import { getSubject } from './subject';

export default function init() {
  const body = document.body;
  body.innerHTML = `<div id="app"></div>`;

  const root = document.getElementById('app');
  root.appendChild(App());

  window.addEventListener('DOMContentLoaded', () => {
    createState();
    getSubject().subscribe(updateModalView);
  });
}

init();
