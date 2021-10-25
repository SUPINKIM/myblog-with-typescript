export default function App(): HTMLElement {
  const div = document.createElement('div');

  div.innerHTML =
    '<span>안녕하세요! 타입스크립트 세계에 오신 것을 환영합니다.</span>';

  return div;
}
