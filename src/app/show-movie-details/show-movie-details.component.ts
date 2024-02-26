import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreMovieService } from '../services/store-movie.service';
import { ApidataService } from '../apidata.service';
import { Observable } from 'rxjs';
import { Movie } from '../movie';

@Component({
  selector: 'app-show-movie-details',
  templateUrl: './show-movie-details.component.html',
  styleUrl: './show-movie-details.component.css',
})
export class ShowMovieDetailsComponent implements OnInit {
  movie: any;
  movies: any;

  constructor(
    private route: ActivatedRoute,
    private movieService: StoreMovieService,
    private apiMovie: ApidataService
  ) {}

  ngOnInit(): any {
    // let id: any = this.route.snapshot.paramMap.get('id');
    // // const newId = id.toString();
    // this.movie = this.movieService.getMovieById(id);
    // console.log(id, this.movie);
    // document.title = 'BestMovies - Movie ' + id;

    const id2: any = this.route.snapshot.paramMap.get('id');
    this.movies = this.movieService.getMovieById(id2);

    console.log('the current movie is : ', this.movies);
  }
}
