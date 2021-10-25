import { State, getState } from '../state';
import './nav.css';

interface navInfo {
  title: string;
  color: string;
}

const titles: navInfo[] = [
  { title: 'WHO I AM', color: '#d1c4e9' },
  { title: 'CAREERS', color: '#1e88e5' },
  { title: 'PROTFOLIO', color: '#a5d6a7' },
  { title: 'WHAT I LIKE', color: '#ff8a50' },
  { title: 'WHAT I WILL DO', color: '#ffa726' },
];

function handleOnClickNavigation(event: Event) {
  const id: string = (event.target as Element)?.id.replace('nav-', '') ?? '';
  if (id) {
    const stateInstance: State = getState();
    stateInstance.selectCard(+id);
  }
}

export default function renderNavigation(): HTMLElement {
  const container = document.createElement('div');
  container.className = 'nav-list-container';
  container.addEventListener('click', handleOnClickNavigation);

  const template = (info: navInfo, index: number): string => {
    return `
    <div class="nav-item-container" id="nav-${index}" style="background-color:${info.color}">
      <span class="nav-title">${info.title}<span>
    </div>`;
  };

  titles.forEach((info, index) => {
    container.innerHTML += template(info, index);
  });

  return container;
}
