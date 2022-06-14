import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseComic } from '../interfaces/comics.interface';

@Injectable({
  providedIn: 'root'
})
export class ComicService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getComics(offset: number, limit: number): Observable<ResponseComic> {
    const params = new HttpParams()
      .set('offset', offset)
      .set('limit', limit)
      .set('ts', '1000')
      .set('apikey', '1ef63d1cac2dbca3f7fa1af8d957384d')
      .set('hash', '1bb39fdd7da2867569208ec3a6ac1e96');

    return this.http.get<ResponseComic>(`${this.baseUrl}/comics`, {
      params,
    });
  }
}
