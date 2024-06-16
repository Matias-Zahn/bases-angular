import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>{{ contador }}</h3>

    <button (click)="incrementBy(+1)">+1</button>
    <button (click)="reset(10)">Reset</button>
    <button (click)="incrementBy(-1)">-1</button>
  `,
})
export class CounterComponent {
  constructor() {}

  public title: string = 'Hola Papus';
  public contador: number = 10;

  incrementBy(value: number): void {
    this.contador += value;
  }

  reset(value: number): void {
    this.contador = value;
  }
}
