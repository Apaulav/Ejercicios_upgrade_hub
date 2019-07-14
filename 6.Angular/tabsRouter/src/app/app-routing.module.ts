import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BooksComponent } from './pages/home/books/books.component';
import { VideosComponent } from './pages/home/videos/videos.component';
import { MusicComponent } from './pages/home/music/music.component';
import { PicturesComponent } from './pages/home/pictures/pictures.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch:'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '', redirectTo: '/home/books', pathMatch:'full'
      },
      {
        path: 'books', component: BooksComponent
      },
      {
        path: 'videos', component: VideosComponent
      },
      {
        path: 'music', component: MusicComponent
      },
      {
        path: 'pictures', component: PicturesComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
