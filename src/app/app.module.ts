import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth, AngularFireAuthProvider } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { LoginService } from './shared/login.service';
import { AuthGuard } from './shared/authguard.service';
import { CaseService } from './shared/models/case.service';
import { ClientService } from './shared/models/client.service';
import { SignupComponent } from './loginemail/signup/signup.component';
import { SigninComponent } from './loginemail/signin/signin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginemailComponent } from './loginemail/loginemail.component';
import { routes } from './app.routes';
import * as firebase from 'firebase/app';
import { CaseContainerComponent } from './case-container/case-container.component';
import { ClientContainerComponent } from './client-container/client-container.component';
import { VerifyemailComponent } from './loginemail/verifyemail.component';
import { SignedupComponent } from './loginemail/signedup.component';

export const fireConfig = {
    apiKey: "AIzaSyDQ9XNiF58GMGJ-FDTO75jn7DJ5t0XtbI0",
    authDomain: "bongish-food.firebaseapp.com",
    databaseURL: "https://bongish-food.firebaseio.com",
    projectId: "bongish-food",
    storageBucket: "bongish-food.appspot.com",
    messagingSenderId: "12665371470"
};

const myFirebaseAuthConfig = {
  provider: AngularFireAuthProvider,
  method: firebase.auth.EmailAuthProvider
};

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    NavbarComponent,
    LoginemailComponent,
    CaseContainerComponent,
    ClientContainerComponent,
    VerifyemailComponent,
    SignedupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(fireConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    routes,
  ],
  providers: [LoginService, AuthGuard,CaseService,ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
