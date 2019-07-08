import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Noticia } from '../app.component';

@Component({
  selector: 'app-form-noticia',
  templateUrl: './form-noticia.component.html',
  styleUrls: ['./form-noticia.component.sass']
})
export class FormNoticiaComponent implements OnInit {

  //outpu es un decorador de typescrip, esto lo que hace es comunicar el componente(hijo) con el componente padre, any indicamos que escuche cualquier cosa

  @Output() escucharCreacionNuevaNoticia: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  crearNoticia () {
    // lo de HTMLInputElement es castear este tipo de datos
    const title = (<HTMLInputElement>document.getElementById("title"));
    // tb se puede castear poniendo (document.getElementById("title") as HTMLInputElement);
    console.log(title.value);

    const body = (<HTMLInputElement>document.getElementById("body"));
    console.log(body.value);

    const noticia:Noticia = {
      title: title.value,
      body: body.value
    };

    this.escucharCreacionNuevaNoticia.emit(noticia);
  }

}
