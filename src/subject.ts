let subject: Subject | null = null;

type FunctionArray = Function[];

class Subject {
  private callback: FunctionArray;

  constructor() {
    this.callback = [];
  }
  subscribe(addFn: Function): void {
    this.callback.push(addFn);
    this.callback = [...new Set(this.callback)];
  }
  unsubscribe(removeFn: Function): void {
    this.callback = this.callback.filter((fn) => fn !== removeFn);
  }
  notify() {
    this.callback.forEach((fn) => {
      fn();
    });
  }
}

export function createSubject(): void {
  if (subject) return;
  subject = new Subject();
}

export function getSubject(): Subject {
  if (!subject) createSubject();
  return subject;
}
