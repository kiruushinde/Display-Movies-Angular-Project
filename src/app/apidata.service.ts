import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root',
})
export class ApidataService {
  // define api url
  private apiUrl: string = 'https://reactnative.dev/movies.json';
  private moviesSubject = new BehaviorSubject<Movie[]>([]);

  constructor(private http: HttpClient) {
    this.fetchMovies();
  }

  fetchMovies(): void {
    this.http
      .get<any>(this.apiUrl)
      .pipe(map((response) => response.movies))
      .subscribe(
        (movies) => this.moviesSubject.next(movies),
        (error) => console.error('Error fetching movies:', error)
      );
  }

  getMovies(): Observable<Movie[]> {
    return this.moviesSubject.asObservable();
  }

  getMovieById(id: string): Observable<Movie | undefined> {
    return this.moviesSubject.pipe(
      map((movies) => movies.find((movie) => movie.id === id))
    );
  }
}
