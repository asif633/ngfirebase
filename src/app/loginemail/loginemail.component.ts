import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-loginemail',
  templateUrl: './loginemail.component.html',
  styleUrls: ['./loginemail.component.css']
})
export class LoginemailComponent implements OnInit {
  
  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  signout(){
    this.afAuth.auth.signOut();
  }

  ngOnInit() {
  }

}
