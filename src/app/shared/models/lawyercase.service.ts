import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { LoginService } from '../login.service';
import 'rxjs/add/operator/mergeMap';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { LawyerCase } from './lawyercase.model';

@Injectable()
export class LawyerCaseService {

    //user: Observable<firebase.User>;
    uid: Observable<string>;

    constructor(private afAuth: AngularFireAuth, private afd: AngularFireDatabase, private _loginServ: LoginService) {
        //this.user = afAuth.authState;
        //this.uid = this.user.switchMap(user => user.uid);
    }

    initializeNew(): LawyerCase {
        return { name: '', no: ''};
    }

    addLawyerCase(cas: LawyerCase) {
        if (this.afAuth.auth.currentUser != null) {
            return this.afd.list('users/' + this.afAuth.auth.currentUser.uid + '/cases').push(cas);
        }
    }

    updateLawyerCase(cas: LawyerCase) {
        if (this.afAuth.auth.currentUser != null) {
            return this.afd.list('users/' + this.afAuth.auth.currentUser.uid + '/cases').update(cas.$key, { name: cas.name, no: cas.no });
        }
    }

    getLawyerCases(): Observable<LawyerCase[]> {
        if (this.afAuth.auth.currentUser != null) {
            return this.afd.list('users/' + this.afAuth.auth.currentUser.uid + '/cases');
        }
    }

    deleteLawyerCase(cas: LawyerCase) {
        if (this.afAuth.auth.currentUser != null) {
            return this.afd.list('users/' + this.afAuth.auth.currentUser.uid + '/cases').remove(cas.$key);
        }
    }

}