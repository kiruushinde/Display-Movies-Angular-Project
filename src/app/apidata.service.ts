import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root',
})
export class ApidataService {
  private apiUrl: string = 'https://reactnative.dev/movies.json';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http
      .get<any>(this.apiUrl)
      .pipe(map((response) => response.movies));
  }

  getMovieById(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/${id}`);
  }
}
