import { Component } from '@angular/core';
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

  constructor(
    private route: Router,
    private auth: AuthService,
    private movi: StoreMovieService
  ) {}

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

    let allMovies = this.movi.getMovies();
    this.data = allMovies;
    console.log(this.data);
    if (this.data != null) alert('All movies are listed');
    else alert('Please try once again !!');
  }

  gotoMovieDetails(id: string): void {
    console.log('the id is : ', id);
    this.route.navigate(['/detail', id]);
  }
}
