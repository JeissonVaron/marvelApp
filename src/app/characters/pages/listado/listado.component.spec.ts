import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListadoComponent } from './listado.component';
import { CharactersService } from '../../services/characters.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ResponseCharacters } from '../../interfaces/characters.interface';
import { of } from 'rxjs';
import { responseCharacters } from 'src/assets/moks/characters.mock';

const pageEvent: PageEvent = {
  previousPageIndex: 0,
  pageIndex: 0,
  pageSize: 0,
  length: 0,
};

describe('ListadoCharactersComponent', () => {
  let component: ListadoComponent;
  let fixture: ComponentFixture<ListadoComponent>;
  let service: CharactersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ListadoComponent],
      providers: [CharactersService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA], //Opcional
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(CharactersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getServerData returns event', () => {
    let characters: ResponseCharacters = responseCharacters;
    const spy = spyOn(service, 'getCharacters').and.returnValue(of(characters));
    const event = component.getServerData(pageEvent);
    expect(spy).toHaveBeenCalled();
    expect(event).toEqual(event);
  });
});
