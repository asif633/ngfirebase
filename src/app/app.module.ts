import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { LoginService } from './shared/login.service';
import { AuthGuard } from './shared/authguard.service';
import { CaseService } from './shared/models/case.service';

export const fireConfig = {
    apiKey: "AIzaSyDQ9XNiF58GMGJ-FDTO75jn7DJ5t0XtbI0",
    authDomain: "bongish-food.firebaseapp.com",
    databaseURL: "https://bongish-food.firebaseio.com",
    projectId: "bongish-food",
    storageBucket: "bongish-food.appspot.com",
    messagingSenderId: "12665371470"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(fireConfig, myFirebaseAuthConfig),
  ],
  providers: [LoginService, AuthGuard,CaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
