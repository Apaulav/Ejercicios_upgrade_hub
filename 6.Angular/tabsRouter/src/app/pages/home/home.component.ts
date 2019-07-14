import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatSlideToggleChange } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  private tabs = ['pictures','books','music','videos'];

  public selectedIndex;

  constructor(private router: Router) { 
    this.router.events.subscribe( event => {
      

      // Coger el ultimo evento
      if(event instanceof NavigationEnd) {
        console.log(event);

        // Si no lo encuentra devuelve -1 si lo encuentra devuelve 1
        const index = this.tabs.findIndex(( tab ) => {
          return event.urlAfterRedirects.indexOf(tab) !== -1;
        });

        this.selectedIndex = index;
        console.log(index);
      }
    })
  }

  ngOnInit() {

    console.log(this.tabs);
  }
  //funcion para el botón de videos es el array 3 y navegas a home/videos
  goToVideos() {
    this.selectedIndex = 3;
    this.router.navigate(['/home/videos']);
  }

  changeTab($event) {
    console.log($event);
    //Navegas a los hijos
    this.router.navigate(['/home/' + this.tabs[$event.index]]);
  }

  hidePictures($event: MatSlideToggleChange) {
    console.log($event);
    const indexOfPictures = this.tabs.indexOf('pictures');

    if ($event.checked) {
      if(indexOfPictures === -1) {
        this.tabs.push('pictures');
      }
    }
    else{
      //const indexOfPictures = this.tabs.indexOf('pictures');
      this.tabs.splice(indexOfPictures, 1);
      console.log(this.tabs);
      this.changeTab({index: 0});
    }
  }
}
