import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { StoreMovieService } from '../services/store-movie.service';
import { Observable } from 'rxjs';
import { Movie } from '../movie';
import { ApidataService } from '../apidata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  data: any;
  movies: Movie[] = [];

  constructor(
    private route: Router,
    private auth: AuthService,
    private movi: StoreMovieService,
    private apidata: ApidataService
  ) {}

  ngOnInit(): void {}

  showData() {
    // this.moviesData.movies().subscribe((res: any) => {
    //   console.log(res);
    //   this.data = res.movies;
    //   // let myMovie = 'Star Wars';
    //   // for (let i = 0; i < this.data.length; i++) {
    //   //   if (this.data[i].title == myMovie)
    //   //     console.log('Data is present : ', this.data[i]);
    //   // }
    //   console.log('Movies are now : ', this.movies.getMovies());
    // });
    // let allMovies = this.movi.getMovies();
    // this.data = allMovies;
    // console.log(this.data);
    // if (this.data != null) alert('All movies are listed');
    // else alert('Please try once again !!');
    this.apidata.getMovies().subscribe((response) => {
      console.log('data we got from api is ', response);
      this.movies = response;
    });
  }

  gotoMovieDetails(id: string): void {
    console.log('the id is : ', id);
    this.route.navigate(['/detail', id]);
  }
}
