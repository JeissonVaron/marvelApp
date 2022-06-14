import { Component, Input } from '@angular/core';
import { Comic } from 'src/app/comics/interfaces/comics.interface';

@Component({
  selector: 'app-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrls: ['./comic-card.component.css'],
})
export class ComicCardComponent {
  @Input() comic!: Comic;
  constructor() {}
}
