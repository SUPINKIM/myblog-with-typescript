let singleState = null;

export class State {
  private selected: number;
  constructor() {
    this.selected = -1;
  }
  selectCard(cardNumber: number): void {
    this.selected = cardNumber;
  }
  getCardNumber(): number {
    return this.selected;
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
