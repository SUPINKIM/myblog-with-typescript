import { getState } from '../state';
import { createModalView } from '../template';
import './modal.css';

const contents = [
  '안녕하세요. 프론트엔드 개발자 김수빈입니다.',
  '(주)파프리카스토리 근무\n 카카오 FE플랫폼 팀 소속 인턴 근무\n',
  'Team28 블로그 구현 프로젝트',
  '산책하기, 아메리카노, Dance🎵💃',
  '앱 개발도 하고 싶고,, \n g웹 풀스택 개발도 능력만 된다면..?',
];

function onHandleClickReturnButton(event) {
  const root: HTMLElement = document.getElementById('app');
  const target: HTMLElement = event.target;
  if (
    target?.id === 'return-button' ||
    target?.className === 'modal-background'
  ) {
    removeModal(root);
  }
}

function renderModal(parent: HTMLElement): void {
  const index: number = getState().getCardNumber();
  const modalContainer: HTMLElement = document.createElement('div');
  modalContainer.className = 'modal-background';
  modalContainer.innerHTML = createModalView(contents[index]);
  modalContainer.addEventListener('click', onHandleClickReturnButton);

  parent.appendChild(modalContainer);
}

function removeModal(parent: HTMLElement): void {
  const modalContainer: HTMLElement | null =
    document.querySelector('.modal-background');
  if (!modalContainer) return;
  parent.removeChild(modalContainer);
}

export default function updateModalView(): void {
  const root: HTMLElement = document.getElementById('app');
  removeModal(root);
  renderModal(root);
}
