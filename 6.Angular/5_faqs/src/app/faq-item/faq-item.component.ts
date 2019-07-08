import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-faq-item',
  templateUrl: './faq-item.component.html',
  styleUrls: ['./faq-item.component.sass']
})
export class FaqItemComponent {

  //VARIABLES
  //si la variable se va a pintar en el html sería publica, si es para hacer un calculo en el ts, private
  //variable que se usara en el html en el ngIf
  public opened: boolean = false;
  
  //Input
  @Input() title: string = "Error: Falta título"; //Después del = se puede poner null, pero si lo ponemos así saldrá este texto por defecto
  @Input() body: string = "Error: Falta descripción";


  //CONSTRUCTOR
  constructor() { }

  //METRODOS PRIVADOS

  //METODOS PUBLICOS
  public changeState() {
    if(this.opened == true) {
      this.opened = false;
    }
    else {
      this.opened = true;
    }

    //version corta del if anterior
    //this.opened = !this.opened;
    
  }


}
