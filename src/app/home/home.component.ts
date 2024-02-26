import { Component } from '@angular/core';
import { Movie } from '../movie';
import { ApidataService } from '../apidata.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // movies: Movie[] = [];
  movies$: Observable<Movie[]> | undefined;

  constructor(private apidata: ApidataService) {}

  showMovieNames() {
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

    // this.apidata.getMovies().subscribe((response) => {
    //   console.log('data we got from api is ', response);
    //   this.movies$ = response;
    // });

    this.movies$ = this.apidata.getMovies();
    console.log('The list of movies is : ', this.movies$);
  }

  /*
  
  // if you want to use below method, then add (click)="gotoMovieDetails(d.id)" to the button, there I have used another way which directly navigates to the desired route...
  gotoMovieDetails(id: string): void {
    console.log('the id is : ', id);
    this.route.navigate(['/detail', id]);
  }
  */
}
