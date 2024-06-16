import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroesList: string[] = [
    'Spiderman',
    'Iroman',
    'Hulk',
    'Capitan America',
    'Ghost Raider',
  ];

  public deletedHeroe: string = '';

  removeLastHeroe(): void {
    const deletedHeroe = this.heroesList.pop();
    this.deletedHeroe = deletedHeroe || '';
  }
}
