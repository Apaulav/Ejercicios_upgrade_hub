import { Component } from '@angular/core';

export interface Noticia {
  title: string,
  body: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'creadorrNoticias';

  anadirNoticia(noticia:Noticia) {
    this.noticia.push(noticia);
  

  }
}
