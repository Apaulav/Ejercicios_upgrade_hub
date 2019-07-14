import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.sass']
})
export class BooksComponent implements OnInit {
  // trabajando con el services
  constructor( private user$: UserService) { 
    // console.log(this.user$.users);
    
  }

  ngOnInit() {
    // trabajando con el services
    // this.user$.users[3].name = 'TEST';
  }

}
