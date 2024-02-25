import { Injectable } from '@angular/core';
import { MovieDataService } from './movie-data.service';

@Injectable({
  providedIn: 'root',
})
export class StoreMovieService {
  movieArray: any[] = [];

  constructor(private movie: MovieDataService) {
    this.showDataOfMovies();
  }

  showDataOfMovies() {
    this.movie.movies().subscribe((m: any) => {
      // console.log('Movies are ', m.movies);
      this.movieArray = m.movies;
    });
  }
}
