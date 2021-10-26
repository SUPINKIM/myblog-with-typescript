import { navInfo } from './nav/nav';

export function createNavView(info: navInfo, index: number): string {
  return `
    <div class="nav-item-container" id="nav-${index}" style="background-color:${info.color}">
      <span class="nav-title">${info.title}<span>
    </div>`;
}

export function createModalView(content: string): string {
  return `
    <div class="modal-content-container">
        <span class="modal-contents">${content}</span>
        <button id="return-button" class="btn modal-button">돌아가기</button>
    <div>`;
}
