import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieDataService {
  constructor(private http: HttpClient) {}

  movieUrl = 'https://reactnative.dev/movies.json';

  movies() {
    let res = this.http.get(this.movieUrl);
    return res;
  }
}
