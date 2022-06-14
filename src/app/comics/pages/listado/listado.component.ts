import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Comic } from '../../interfaces/comics.interface';
import { ComicService } from '../../services/comic.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  comics: Array<Comic> = [];
  pageEvent?: PageEvent;
  length: number = 0;
  pageIndex: number = 0;
  pageSize: number = 20;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(private comicService: ComicService) {}

  ngOnInit(): void {
    this.getComics();
  }

  getComics(event?: PageEvent) {
    let offset = 0;
    let limit = this.pageSize;
    if (event) {
      offset = event.pageIndex * this.pageSize;
      limit = event.pageSize;
    }
    this.comicService.getComics(offset, limit).subscribe((response) => {
      this.comics = response.data.results;
      this.pageSize = response.data.count;
      this.pageIndex = this.pageIndex;
      this.length = response.data.total;
    });
    return event;
  }
}
