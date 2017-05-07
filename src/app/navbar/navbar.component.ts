import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth,private afdb: AngularFireDatabase, private router: Router) {
    this.user = afAuth.authState;
  }

  signout() {
    this.afAuth.auth.signOut().then(onResolve => this.router.navigate(['/']));
  }

  // ngOnInit() {
  //   this.afAuth.auth.signInWithEmailAndPassword('saif633@gmail.com', 'past309#');
  // }

  // addDataToAdmins(){
  //   this.afdb.list('admins').$ref.ref.child('k6778654').set(true);
  // }

  // addDataToRules(){
  //   this.afdb.list('userRoles').$ref.ref.child('k6778654').child('role').set('10');
  // }

}
