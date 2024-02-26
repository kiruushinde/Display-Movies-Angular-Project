import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApidataService } from '../apidata.service';
import { Observable } from 'rxjs';
import { Movie } from '../movie';

@Component({
  selector: 'app-show-movie-details',
  templateUrl: './show-movie-details.component.html',
  styleUrl: './show-movie-details.component.css',
})
export class ShowMovieDetailsComponent implements OnInit {
  movie$: Observable<Movie | undefined> | undefined;

  constructor(
    private route: ActivatedRoute,
    private apiMovie: ApidataService
  ) {}

  ngOnInit(): any {
    // let id: any = this.route.snapshot.paramMap.get('id');
    // // const newId = id.toString();
    // this.movie = this.movieService.getMovieById(id);
    // console.log(id, this.movie);
    // document.title = 'BestMovies - Movie ' + id;

    const id2: any = this.route.snapshot.paramMap.get('id');

    if (id2) {
      this.movie$ = this.apiMovie.getMovieById(id2);
    }
    console.log('displaying movie details : ', this.movie$);
    // this is observable, you need to subscribe it and when you go in view templatet there you can async it..
  }
}
