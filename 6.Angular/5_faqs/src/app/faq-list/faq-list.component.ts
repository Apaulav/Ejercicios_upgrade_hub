import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class FaqListComponent implements OnInit {
  //Array para pasar datos al html
  public faqs: Faq[] = [
    {
      title: "nkgjfnkgrnkgdrngkrengre",
      body: "nrjnkgndrkjdnkjgdr"
    },
    {
      title: "pwuxsklfhla",
      body: "maldoahwmrj"
    },
    {
      title: "lorem ipsum",
      body: "nkfdsaywñq"
    },
    {
      title: "::::::::::",
      body: ":::hdkisbs:::::"
    },
    {
      title: "nkgjfnkgrnkgdrngkrengre",
      body: "nrjnkgndrkjdnkjgdr"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

//define un tipo de objeto que se llama Faq que contiene dos elementos, siempre crees un objeto tenemos que definir un interface por seguridad, se debería crear en un nuevo componente que tenga todas las interfaces y se exportan con un export y un import en el componente que se vaya a usar
interface Faq {
  title: string;
  body: string;
}
