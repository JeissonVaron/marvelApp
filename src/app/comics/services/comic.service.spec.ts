import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComicService } from './comic.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { responseComic } from 'src/assets/moks/characters.mock';
import { environment } from 'src/environments/environment';
import { ResponseComic } from '../interfaces/comics.interface';

const comics: ResponseComic = responseComic;
const baseUrl: String = environment.baseUrl;

describe('ComicService', () => {
  let service: ComicService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ComicService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    service = TestBed.inject(ComicService);
  });

  beforeEach(() => {
    service = TestBed.inject(ComicService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('return data of the marvel comics and the method must be get', () => {
    service.getComics(9, 20).subscribe((response: ResponseComic) => {
      expect(response).toEqual(comics);
    });

    const req = httpMock.expectOne(`${baseUrl}/comics?offset=9&limit=20&ts=1000&apikey=1ef63d1cac2dbca3f7fa1af8d957384d&hash=1bb39fdd7da2867569208ec3a6ac1e96`);
    expect(req.request.method).toBe('GET');
    req.flush(comics);
  });
});
