import { Component, OnInit, Input } from '@angular/core';
import { LawyerCase } from '../shared/models/lawyercase.model';
import { LawyerCaseService } from '../shared/models/lawyercase.service';

@Component({
  selector: 'app-lawyercase',
  templateUrl: './lawyercase.component.html',
  styleUrls: ['./lawyercase.component.css']
})
export class LawyercaseComponent implements OnInit {

  constructor(private lawyerCaseServ: LawyerCaseService) { }

  ngOnInit() {
  }

  @Input() lawyerCase: LawyerCase;
  @Input() addCase: boolean;
  msg: string;
  msg1: string;

  updateCase() {
    this.lawyerCaseServ.updateLawyerCase(this.lawyerCase)
      .then(onResolve => this.msg = "Updated Successfully")
      .catch(onReject => this.msg1 = onReject.message);
  }

  deleteCase() {
    this.lawyerCaseServ.deleteLawyerCase(this.lawyerCase)
    .then(onResolve => this.msg = "Deleted Successfully")
    .catch(onReject => this.msg1 = onReject.message);
  }

  addNew() {
    this.lawyerCaseServ.addLawyerCase(this.lawyerCase)
    .then(onResolve => this.msg = "Added Successfully")
    .catch(onReject => this.msg1 = onReject.message);
  }

}
