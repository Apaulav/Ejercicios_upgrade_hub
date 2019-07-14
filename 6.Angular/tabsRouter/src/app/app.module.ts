import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { PicturesComponent } from './pages/home/pictures/pictures.component';
import { VideosComponent } from './pages/home/videos/videos.component';
import { BooksComponent } from './pages/home/books/books.component';
import { MusicComponent } from './pages/home/music/music.component';
import {MatTabsModule} from '@angular/material'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import { UserService } from './core/services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PicturesComponent,
    VideosComponent,
    BooksComponent,
    MusicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatSlideToggleModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
