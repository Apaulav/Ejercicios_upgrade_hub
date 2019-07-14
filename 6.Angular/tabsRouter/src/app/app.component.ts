import { Component } from '@angular/core';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'tabsRouter';

  constructor( private test: UserService) {
    
    // this.test.users = [
    //   {name: 'Jesus'},
    //   {name: 'Julio'},
    //   {name: 'Marilyn'},
    //   {name: 'David'},
    //   {name: 'Akemi'},
    //   {name: 'Paula'},
    //   {name: 'Keyla'},
    // ];
    // console.log(this.test.users);
  }
}
