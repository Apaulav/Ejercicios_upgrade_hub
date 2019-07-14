import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FilmsComponent } from './pages/films/films.component';
import { DiscsComponent } from './pages/discs/discs.component';
import { GamesComponent } from './pages/games/games.component';
import { FilmComponent } from './pages/films/film/film.component';

const routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'films', component: FilmsComponent
  },
  {
    path: 'films/:id', component: FilmComponent
  },
  {
    path: 'discs', component: DiscsComponent
  },
  {
    path: 'games', component: GamesComponent
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
