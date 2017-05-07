import { Component, OnInit } from '@angular/core';
import { LawyerCase } from '../shared/models/lawyercase.model';
import { CaseDate } from '../shared/models/casedate.model';

@Component({
  selector: 'app-lawyercase-container',
  templateUrl: './lawyercase-container.component.html',
  styleUrls: ['./lawyercase-container.component.css']
})
export class LawyercaseContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.selectedLawyerCase = null;
  }

  selectedLawyerCase: LawyerCase;
  addBool: boolean;

  getSelectedLawyerCase(event){
    this.selectedLawyerCase = event;
  }

  addOrUpdate(event){
    this.addBool = event;
  }
  
  selectedCaseDate: CaseDate;
  addCaseBool: boolean;

  getSelectedCaseDate(event){
    this.selectedCaseDate = event;
  }

  addOrUpdateDate(event){
    this.addCaseBool = event;
  }
  
}
