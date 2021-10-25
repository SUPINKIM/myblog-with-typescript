import App from './App';

export default function init() {
  const body = document.body;
  body.innerHTML = `<div id="app"></div>`;

  const root = document.getElementById('app');
  root.appendChild(App());
}

init();
