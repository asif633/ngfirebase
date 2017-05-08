import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Rx';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: Observable<firebase.User>;

  constructor(private af: AngularFireAuth, private router: Router) {
    this.user = af.authState;
  }

  ngOnInit() {
  }

  email: string;
  password: string;
  msg: string;

  signup() {
    this.af.auth.createUserWithEmailAndPassword(this.email, this.password).then(
      res => {
        this.user.subscribe(user => {
          if (user != undefined && user != null) {
            user.sendEmailVerification().then(
              resolve => {
                this.af.auth.signOut();
                location.reload();
                this.router.navigate(['signedup']);
              }
            );
          }
        });
      }
    )
      .catch(error => this.msg = error.message);
  }

  ngOnDestroy() {
    if (this.user != null) {
      this.user.subscribe().unsubscribe();
    }
  }

}
