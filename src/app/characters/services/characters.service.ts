import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseCharacters } from '../interfaces/characters.interface';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getCharacters(offset: number, limit: number): Observable<ResponseCharacters> {
    const params = new HttpParams()
      .set('apikey', '1ef63d1cac2dbca3f7fa1af8d957384d')
      .set('hash', '1bb39fdd7da2867569208ec3a6ac1e96')
      .set('limit', limit)
      .set('offset', offset)
      .set('ts', '1000');

    return this.http.get<ResponseCharacters>(`${this.baseUrl}/characters`, {
      params,
    });
  }
}
