import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Case } from './case.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CaseService {

    constructor(private af: AngularFire) { }
    
    addCase(cas: Case){
        this.af.database.list('cases').push(cas);
    }

    updateCase(cas: Case){
        this.af.database.list('cases').update(cas.$key, {caseName: cas.caseName, caseNo: cas.caseNo});
    }

    getCases(): Observable<Case[]>{
        return this.af.database.list('cases');
    }

    deleteCase(cas: Case){
        this.af.database.list('cases').remove(cas.$key);
    }

}