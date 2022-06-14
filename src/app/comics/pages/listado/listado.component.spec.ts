import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageEvent } from '@angular/material/paginator';
import { of } from 'rxjs';
import { responseComic } from 'src/assets/moks/characters.mock';
import { ResponseComic } from '../../interfaces/comics.interface';
import { ComicService } from '../../services/comic.service';

import { ListadoComponent } from './listado.component';

const pageEvent: PageEvent = {
  previousPageIndex: 0,
  pageIndex: 0,
  pageSize: 0,
  length: 0,
};

describe('ListadoComicsComponent', () => {
  let component: ListadoComponent;
  let fixture: ComponentFixture<ListadoComponent>;
  let service: ComicService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ListadoComponent],
      providers: [ComicService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA], //Opcional
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(ComicService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getServerData returns event', () => {
    let characters: ResponseComic = responseComic;
    const spy = spyOn(service, 'getComics').and.returnValue(of(characters));
    const event = component.getComics(pageEvent);
    expect(spy).toHaveBeenCalled();
    expect(event).toEqual(event);
  });
});
