import { Injectable } from '@angular/core';
import { CaseDate } from './casedate.model';
import { Observable } from 'rxjs/Rx';
import { LoginService } from '../login.service';
import 'rxjs/add/operator/mergeMap';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class CaseDateService {

    constructor(private afAuth: AngularFireAuth, private afd: AngularFireDatabase, private _loginServ: LoginService) {

    }

    initializeNew(): CaseDate {
        return { nextDate: '', verdict: '' };
    }

    addCaseDate(cas: CaseDate, caseKey: string) {
        if (this.afAuth.auth.currentUser != null) {
            return this.afd.list('users/' + this.afAuth.auth.currentUser.uid + '/caseRelated/' + caseKey + '/caseDates').push(cas);
        }
    }

    updateCaseDate(cas: CaseDate, caseKey: string) {
        if (this.afAuth.auth.currentUser != null) {
            return this.afd.list('users/' + this.afAuth.auth.currentUser.uid + '/caseRelated/' + caseKey + '/caseDates').update(cas.$key, { nextDate: cas.nextDate, verdict: cas.verdict });
        }
    }

    getCaseDates(caseKey: string): Observable<CaseDate[]> {
        if (this.afAuth.auth.currentUser != null) {
            return this.afd.list('users/' + this.afAuth.auth.currentUser.uid + '/caseRelated/' + caseKey + '/caseDates');
        }
    }

    deleteCaseDate(cas: CaseDate, caseKey: string) {
        if (this.afAuth.auth.currentUser != null) {
            return this.afd.list('users/' + this.afAuth.auth.currentUser.uid + '/caseRelated/' + caseKey + '/caseDates').remove(cas.$key);
        }
    }

}