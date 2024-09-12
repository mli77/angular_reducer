import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addStatus, HttpStatus } from './array.reducer';
import { change, User } from './user.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  httpCodes$: Observable<HttpStatus[]>;

  statusCode: number;
  
  constructor(private userStore: Store<{ user: User }>,
              private httpCodeStore: Store<{ httpStatusCodes: HttpStatus[] }>) {
    this.httpCodes$ = httpCodeStore.select('httpStatusCodes');
  }

  onSubmit(form: NgForm) {
    this.userStore.dispatch(change({
      user: {
        firstName: form.value.firstName,
        lastName: form.value.lastName
      }
    }));
  }

  onAddCode() {
    this.httpCodeStore.dispatch(addStatus({
      httpStatus: {
        code: this.statusCode
      }
    }));
  }

}
