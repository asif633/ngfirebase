import { Component, OnInit, Input } from '@angular/core';
import { CaseService } from '../shared/models/case.service';
import { Case } from '../shared/models/case.model';

@Component({
  selector: 'app-case-form',
  templateUrl: './case-form.component.html',
  styleUrls: ['./case-form.component.css']
})
export class CaseFormComponent implements OnInit {

  constructor(private lawyerCaseServ: CaseService) { }

  ngOnInit() {
  }

  @Input() lawyerCase: Case;
  @Input() addCase: boolean;
  msg: string;
  msg1: string;

  updateCase() {
    this.lawyerCaseServ.updateCase(this.lawyerCase)
      .then(onResolve => this.msg = "Updated Successfully")
      .catch(onReject => this.msg1 = onReject.message);
  }

  deleteCase() {
    this.lawyerCaseServ.deleteCase(this.lawyerCase)
    .then(onResolve => this.msg = "Deleted Successfully")
    .catch(onReject => this.msg1 = onReject.message);
  }

  addNew() {
    this.lawyerCaseServ.addCase(this.lawyerCase)
    .then(onResolve => this.msg = "Added Successfully")
    .catch(onReject => this.msg1 = onReject.message);
  }

}
