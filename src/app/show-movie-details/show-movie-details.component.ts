import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreMovieService } from '../services/store-movie.service';

@Component({
  selector: 'app-show-movie-details',
  templateUrl: './show-movie-details.component.html',
  styleUrl: './show-movie-details.component.css',
})
export class ShowMovieDetailsComponent implements OnInit {
  movie: any;

  constructor(
    private route: ActivatedRoute,
    private movieService: StoreMovieService
  ) {}

  ngOnInit(): any {
    let id: any = this.route.snapshot.paramMap.get('id');
    // const newId = id.toString();
    this.movie = this.movieService.getMovieById(id);
    console.log(id, this.movie);
    document.title = 'BestMovies - Movie ' + id;
  }
}
