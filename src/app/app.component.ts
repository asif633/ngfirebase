import { Component } from '@angular/core';
import { LoginService } from './shared/login.service';
import { CaseService } from './shared/models/case.service';
import { Observable } from 'rxjs/Observable';
import { Case } from './shared/models/case.model';
import { Client } from './shared/models/client.model';
import { ClientService } from './shared/models/client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private logServ: LoginService, private caseServ: CaseService, private clServ: ClientService) {
  }

  cases: Observable<Case[]>;
  userCases: Observable<Case[]>;
  casesUser: Case[];
  clients: Observable<Client[]>;

  ngOnInit() {
    this.cases = this.caseServ.getCases();
  }

  addCase() {
    this.caseServ.addCase({ caseNo: '1S', caseName: 'SecondCase' });
  }

  getCasesOfUser() {
    this.casesUser = this.caseServ.getCasesOfUser();
  }
    
  getUserCases() {
    this.userCases = this.caseServ.getUserCases();
  }

  addClient() {
    this.clServ.addClient({ clId: '1c', name: 'SecondCleu' });
  }

  getClients() {
    this.clients = this.clServ.getClients();
  }

  updateCase(key) {
    this.caseServ.updateCase({ caseNo: '1S', caseName: 'UpdatedSecondCase', $key: key })
  }

  updateClient(key) {
    this.clServ.updateClient({ clId: '1cu', name: 'UpdatedSecondCl', $key: key })
  }

  loginA() {
    this.logServ.login({ email: 'asif633@gmail.com', password: 'past309#' }).then(auth => console.log(auth.uid));
    //this.clients = this.clServ.getClients();
  }

  logoutA() {
    this.logServ.logout().then(onfulfil => {
      this.clients = null;
      this.casesUser = null;
    }
    );

  }

  loginS() {
    this.logServ.login({ email: 'saif633@gmail.com', password: 'past309#' }).then(auth => console.log(auth.uid));
  }

  logoutS() {
    this.logServ.logout().then(onfulfil => {
      this.clients = null;
      this.casesUser = null;
    }
    );
  }

}
