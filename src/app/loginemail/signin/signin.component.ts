import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../shared/login.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private logServ: LoginService, private router: Router, private afAuth: AngularFireAuth) { 
    this.user = afAuth.authState;
  }

  user: Observable<firebase.User>;

  ngOnInit() {
  }

  email: string;
  password: string;
  msg: string;
  msg1: string;

  signin() {
    this.logServ.login({ email: this.email, password: this.password })
      .then(resolve => this.user.subscribe(user => {
        if(!user.emailVerified){
          this.router.navigate(['emailverify'])    
        }
      }))
      .then(resolve => this.router.navigate(['case']))
      .catch(error => this.msg = error.message);
  }

  signInUsingGmail() {
    this.logServ.logingmail()
      .then(resolve => this.router.navigate(['case']))
      .catch(error => this.msg1 = error.message);
  }

  signInUsingGithub() {
    this.logServ.logingithub()
      .then(resolve => this.router.navigate(['case']))
      .catch(error => this.msg1 = error.message);
  }

}
