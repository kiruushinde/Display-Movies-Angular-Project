import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingupComponent } from './singup/singup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ShowMovieDetailsComponent } from './show-movie-details/show-movie-details.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', title: 'BestMovies - Register', component: SingupComponent },
  { path: 'login', title: 'BestMovies - Login', component: LoginComponent },
  {
    path: 'home',
    title: 'BestMovies - Home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'detail/:id',
    component: ShowMovieDetailsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
