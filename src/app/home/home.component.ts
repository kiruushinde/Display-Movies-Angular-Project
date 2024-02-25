import { Component } from '@angular/core';
import { MovieDataService } from '../services/movie-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  data: any;

  loginData: any = localStorage.getItem('logInUsers');

  constructor(private moviesData: MovieDataService) {
    // console.log(localStorage.getItem('logInUsers'));
  }

  showData() {
    this.moviesData.movies().subscribe((res: any) => {
      console.log(res);
      this.data = res.movies;

      console.log(this.data);

      let myMovie = 'Star Wars';

      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].title == myMovie)
          console.log('Data is present : ', this.data[i]);
      }
    });

    alert('All movies are listed');
  }
  gotoMovieDetails(name: string) {}
}
