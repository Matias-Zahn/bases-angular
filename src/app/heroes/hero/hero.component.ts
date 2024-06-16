import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'iroman';
  public age: number = 45;

  get capitalezName(): string {
    return this.name.toUpperCase();
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 22;
  }

  reset(): void {
    this.age = 45;

    this.name = 'iroman';
  }
}
