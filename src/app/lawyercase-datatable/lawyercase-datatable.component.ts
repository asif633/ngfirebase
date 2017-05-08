import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LawyerCaseService } from '../shared/models/lawyercase.service';
import { LawyerCase } from '../shared/models/lawyercase.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-lawyercase-datatable',
  templateUrl: './lawyercase-datatable.component.html',
  styleUrls: ['./lawyercase-datatable.component.css']
})
export class LawyercaseDatatableComponent implements OnInit {

  constructor(private lawyerCaseServ: LawyerCaseService) { }

  ngOnInit() {
    this.lawyercases = this.lawyerCaseServ.getLawyerCases();
  }

  lawyercases: Observable<LawyerCase[]>;

  @Output() selectLawyerCase = new EventEmitter<LawyerCase>();
  @Output() add = new EventEmitter<boolean>();

  selectedLawyerCase(product: LawyerCase) {
    this.selectLawyerCase.emit(product);
    this.add.emit(false);
  }

  initializeNew() {
    this.selectLawyerCase.emit(this.lawyerCaseServ.initializeNew());
    this.add.emit(true);
  }

}
