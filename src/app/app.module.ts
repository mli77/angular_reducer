import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { userReducer } from './user.reducer';
import { httpStatusReducer } from './array.reducer';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { HttpStatusComponent } from './http-status/http-status.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HttpStatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      user: userReducer,
      httpStatusCodes: httpStatusReducer
    }, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
