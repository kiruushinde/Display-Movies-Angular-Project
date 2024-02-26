import { Injectable } from '@angular/core';
import { MovieDataService } from './movie-data.service';

@Injectable({
  providedIn: 'root',
})
export class StoreMovieService {
  movieArray: any[] = [];

  constructor(private movie: MovieDataService) {
    this.getMovies();
  }

  // subscribe to the observable returned from movies();
  getMovies(): any[] {
    this.movie.movies().subscribe((m: any) => {
      this.movieArray = m.movies;
    });
    return this.movieArray;
  }

  getMovieById(id: string): any {
    console.log('these are movies under observation: ', this.movieArray);
    const movie = this.movieArray.find((movie) => movie.id === id);

    if (movie) {
      console.log('Movie present', movie);
      return movie;
    } else console.log('Movie not present');
  }
}
