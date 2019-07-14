import { Injectable } from '@angular/core';

@Injectable()

export class UserService {

  // public users: any[];
  private

  constructor() { 

    }

    getUser (index) {
      return this.users[index];
  }
}
