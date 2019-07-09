import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.sass']
})
export class ItemsComponent {

  public changed: boolean = false;

  @Input() title: string = null;
  @Input() body: string = null;


  constructor() { }

  clickar() {

    if (this.changed==true) {
      this.changed=false;
      
    }
    else {
      this.changed=true;
    }
  }
}
