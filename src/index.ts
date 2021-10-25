import App from './App';
import { createState } from './state';

export default function init() {
  const body = document.body;
  body.innerHTML = `<div id="app"></div>`;

  const root = document.getElementById('app');
  root.appendChild(App());

  window.addEventListener('DOMContentLoaded', () => {
    createState();
  });
}

init();
