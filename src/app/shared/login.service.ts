import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User } from './user.model';

@Injectable()
export class LoginService {

    constructor(public af: AngularFireAuth) {
    }

    login(user: User) {
        return this.af.auth.signInWithEmailAndPassword(user.email, user.password);
    }

    logout() {
        return this.af.auth.signOut();
    }

    logingmail() {
        return this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    logingithub() {
        return this.af.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
    }

}