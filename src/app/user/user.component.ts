import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from '../user.reducer';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  user$: Observable<User>;

  constructor(private userStore: Store<{ user: User }>) {
    this.user$ = userStore.select('user');
  }

}
