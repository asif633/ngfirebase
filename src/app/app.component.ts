import { Component } from '@angular/core';
import { LoginService } from './shared/login.service';
import { CaseService } from './shared/models/case.service';
import { Observable } from 'rxjs/Observable';
import { Case } from './shared/models/case.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    constructor(private logServ: LoginService, private caseServ: CaseService){
      //this.logServ.login({email: 'asif633@gmail.com', password: 'past309#'}).then(auth=> console.log(auth.uid));
    }
    
    cases: Observable<Case[]>;

    ngOnInit(){
      this.cases = this.caseServ.getCases();
      this.caseServ.addCase({caseNo: '2S', caseName: 'SecondCase'});
    }
}
