import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ColorGameComponent } from './color-game/color-game.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { authGuard } from './auth.guard';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'loginpage',
    component: LoginpageComponent,
  },
  {
    path: 'color-game',
    component: ColorGameComponent,
    // canActivate: [authGuard],
  },
  {
    path: 'films', // url
    redirectTo: '/movies',
    pathMatch: 'full',
  },
  {
    path: 'movies', // url
    children: [
      // {
      //   path: '',
      //   component: MovieListComponent,
      // },
      {
        path: '',
        loadComponent: () =>
          import('./movie-list/movie-list.component').then(
            (c) => c.MovieListComponent
          ),
      }, // lazy load
      { path: 'add', component: AddMovieComponent, canActivate: [authGuard] },
      { path: 'edit/:id', component: EditMovieComponent },
      { path: ':id', component: MovieDetailsComponent },
    ],
  },
  {
    path: '**', // url
    component: PageNotFoundComponent,
  },
];
