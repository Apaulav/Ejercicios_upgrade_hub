import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.sass']
})
export class NoticiaComponent implements OnInit {

  @Input() noticias: string;
  constructor() { }

  ngOnInit() {
  }

}
