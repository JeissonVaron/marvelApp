import { Component, OnInit } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';
import { CharactersService } from '../../services/characters.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  characters: Array<Character> = [];

  pageEvent?: PageEvent;
  length: number = 0;
  pageIndex: number = 0;
  pageSize: number = 20;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(private charactersServices: CharactersService) {}

  ngOnInit(): void {
    this.getServerData();
  }

  public getServerData(event?: PageEvent) {
    let offset = 0;
    let limit = this.pageSize;
    if (event) {
      offset = event.pageIndex * this.pageSize;
      limit = event.pageSize;
    }
    this.charactersServices
      .getCharacters(offset, limit)
      .subscribe((response) => {
        this.characters = response.data.results;
        this.pageSize = response.data.count;
        this.pageIndex = this.pageIndex;
        this.length = response.data.total;
        
      });
    return event;
  }
}
