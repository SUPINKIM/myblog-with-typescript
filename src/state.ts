import { getSubject } from './subject';

let singleState: State | null = null;

export class State {
  private selected: number;

  constructor() {
    this.selected = -1;
  }
  selectCard(cardNumber: number): void {
    this.selected = cardNumber;
    this.notifyObserver();
  }
  getCardNumber(): number {
    return this.selected;
  }
  notifyObserver() {
    getSubject().notify();
  }
}

export function createState(): void {
  if (!singleState) {
    singleState = new State();
  }
}

export function getState(): State {
  if (!singleState) {
    createState();
  }
  return singleState;
}
