import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CaseDateService } from '../shared/models/casedate.service';
import { Observable } from 'rxjs/Rx';
import { CaseDate } from '../shared/models/casedate.model';
import { LawyerCase } from '../shared/models/lawyercase.model';

@Component({
  selector: 'app-lawyercasedate-datatable',
  templateUrl: './lawyercasedate-datatable.component.html',
  styleUrls: ['./lawyercasedate-datatable.component.css']
})
export class LawyercasedateDatatableComponent implements OnInit {

  constructor(private lawyerCaseServ: CaseDateService) { }

  ngOnInit() {
    if (this.lawyerCase != null) {
      this.lawyercasedates = this.lawyerCaseServ.getCaseDates(this.lawyerCase.$key);
    }
  }

  ngOnChanges(){
    if (this.lawyerCase != null) {
      this.lawyercasedates = this.lawyerCaseServ.getCaseDates(this.lawyerCase.$key);
    }
  }

  lawyercasedates: Observable<CaseDate[]>;

  @Output() selectCaseDate = new EventEmitter<CaseDate>();
  @Output() add = new EventEmitter<boolean>();
  @Input() lawyerCase: LawyerCase;

  selectedLawyerCase(product: CaseDate) {
    this.selectCaseDate.emit(product);
    this.add.emit(false);
  }

  initializeNew() {
    this.selectCaseDate.emit(this.lawyerCaseServ.initializeNew());
    this.add.emit(true);
  }

}
