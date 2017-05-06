import { Injectable } from '@angular/core';
import { Case } from './case.model';
import { Observable } from 'rxjs/Rx';
import { LoginService } from '../login.service';
import 'rxjs/add/operator/mergeMap';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CaseService {
    
    private uid: string;

    constructor(private af: AngularFireAuth, private afd: AngularFireDatabase, private _loginServ: LoginService) {
        this.af.authState.subscribe(auth => {
            if(auth!=undefined && auth !=null)
                this.uid = auth.uid;
            }
            );
     }
    
    addCase(cas: Case){
        let k = this.afd.list('cases').$ref.ref.push().key;
        console.log(k);
        this.afd.list('cases').$ref.ref.child(k).set(cas);
        console.log(this.uid);
        let ref = this.afd.list('usercases').$ref.ref.child(this.uid).child(k).set(true);
        //ref.ref.child(k).set(true);
        //ref.set(k);
    }

    updateCase(cas: Case){
        this.afd.list('cases').update(cas.$key, {caseName: cas.caseName, caseNo: cas.caseNo});
    }

    getCases(): Observable<Case[]>{
        return this.afd.list('cases');
    }

    getCasesOfUser(): Case[]{
        let cases:Case[]=[];
        if(this.uid !=undefined || this.uid !=null){
            this.afd.list('usercases/'+this.uid)
                .forEach(res => res.forEach(
                    res => 
                    {
                        console.log(res.$key);
                        this.afd.object(`cases/`+ res.$key).subscribe(res=> {
                            console.log(res);
                            cases.push(res);
                        })
                    }    
                ));
        }
        return cases;
    }

    getUserCases(): Observable<Case[]>{
        if(this.uid !=undefined || this.uid !=null){
           return  this.afd.list('usercases/'+this.uid)
            .map(res => res.map(res => res.$key))
            .map(lspc => lspc.map(lessonKey => this.afd.object('cases/' + lessonKey)) )
            .mergeMap(fbojs => Observable.combineLatest(fbojs) )
        }
    }

    deleteCase(cas: Case){
        this.afd.list('cases').remove(cas.$key);
    }

}