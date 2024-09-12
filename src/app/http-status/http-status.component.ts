import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpStatus } from '../array.reducer';

import { User } from '../user.reducer';

@Component({
  selector: 'app-http-status',
  templateUrl: './http-status.component.html',
  styleUrls: ['./http-status.component.css']
})
export class HttpStatusComponent {

  httpStatuses$: Observable<HttpStatus[]>;

  constructor(private httpStatusStore: Store<{ httpStatusCodes: HttpStatus[] }>) {
    this.httpStatuses$ = httpStatusStore.select('httpStatusCodes');
  }

}
