import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CaseService } from '../shared/models/case.service';
import { Observable } from 'rxjs/Observable';
import { Case } from '../shared/models/case.model';

@Component({
  selector: 'app-case-datatable',
  templateUrl: './case-datatable.component.html',
  styleUrls: ['./case-datatable.component.css']
})
export class CaseDatatableComponent implements OnInit {

  constructor(private lawyerCaseServ: CaseService) { }

  ngOnInit() {
    this.lawyercases = this.lawyerCaseServ.getCases();
  }

  lawyercases: Observable<Case[]>;

  @Output() selectCase = new EventEmitter<Case>();
  @Output() add = new EventEmitter<boolean>();

  selectedCase(product: Case) {
    this.selectCase.emit(product);
    this.add.emit(false);
  }

  initializeNew() {
    this.selectCase.emit(this.lawyerCaseServ.initializeNew());
    this.add.emit(true);
  }


}
