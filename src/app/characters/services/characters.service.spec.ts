import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CharactersService } from './characters.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ResponseCharacters } from '../interfaces/characters.interface';
import { responseCharacters } from 'src/assets/moks/characters.mock';
import { environment } from 'src/environments/environment';

let characters: ResponseCharacters = responseCharacters;
const baseUrl: String = environment.baseUrl;
describe('CharactersService', () => {
  let service: CharactersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CharactersService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    service = TestBed.inject(CharactersService);
  });

  beforeEach(() => {
    service = TestBed.inject(CharactersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('return data of the marvel characters and the method must be get', () => {
    service.getCharacters(9, 20).subscribe((response: ResponseCharacters) => {
      expect(response).toEqual(characters);
    });

    const req = httpMock.expectOne(`${baseUrl}/characters?apikey=1ef63d1cac2dbca3f7fa1af8d957384d&hash=1bb39fdd7da2867569208ec3a6ac1e96&limit=20&offset=9&ts=1000`);
    expect(req.request.method).toBe('GET');
    req.flush(characters);
  });
});
