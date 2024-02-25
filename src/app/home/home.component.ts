import { Component } from '@angular/core';
import { MovieDataService } from '../services/movie-data.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { StoreMovieService } from '../services/store-movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  data: any;

  loginData: any = localStorage.getItem('logInUsers');

  constructor(
    private moviesData: MovieDataService,
    private route: Router,
    private auth: AuthService,
    private movies: StoreMovieService
  ) {
    // console.log(localStorage.getItem('logInUsers'));
    // this.gotoMovieDetails();
  }

  showData() {
    this.moviesData.movies().subscribe((res: any) => {
      console.log(res);
      this.data = res.movies;

      // let myMovie = 'Star Wars';
      // for (let i = 0; i < this.data.length; i++) {
      //   if (this.data[i].title == myMovie)
      //     console.log('Data is present : ', this.data[i]);
      // }

      console.log('Movies are : ', this.movies.movieArray);
    });

    alert('All movies are listed');
  }
  gotoMovieDetails() {
    this.route.navigateByUrl('detail');
  }
  logoutUser() {
    this.auth.logout();
  }
}
