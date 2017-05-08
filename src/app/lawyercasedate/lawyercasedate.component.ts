import { Component, OnInit, Input } from '@angular/core';
import { CaseDate } from '../shared/models/casedate.model';
import { CaseDateService } from '../shared/models/casedate.service';
import { LawyerCase } from '../shared/models/lawyercase.model';

@Component({
  selector: 'app-lawyercasedate',
  templateUrl: './lawyercasedate.component.html',
  styleUrls: ['./lawyercasedate.component.css']
})
export class LawyercasedateComponent implements OnInit {

  constructor(private caseDateServ: CaseDateService) { }

  ngOnInit() {
  }

  @Input() caseDate: CaseDate;
  @Input() lawyerCase: LawyerCase;
  @Input() newCaseDate: boolean;
  msg: string;
  msg1: string;

  updateCase() {
    this.caseDateServ.updateCaseDate(this.caseDate, this.lawyerCase.$key)
      .then(onResolve => this.msg = "Updated Successfully")
      .catch(onReject => this.msg1 = onReject.message);
  }

  deleteCase() {
    this.caseDateServ.deleteCaseDate(this.caseDate, this.lawyerCase.$key)
    .then(onResolve => this.msg = "Deleted Successfully")
    .catch(onReject => this.msg1 = onReject.message);
  }

  addNew() {
    this.caseDateServ.addCaseDate(this.caseDate, this.lawyerCase.$key)
    .then(onResolve => this.msg = "Added Successfully")
    .catch(onReject => this.msg1 = onReject.message);
  }

}
