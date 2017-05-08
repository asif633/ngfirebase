import { Component, OnInit } from '@angular/core';
import { Case } from '../shared/models/case.model';

@Component({
  selector: 'app-case-container',
  templateUrl: './case-container.component.html',
  styleUrls: ['./case-container.component.css']
})
export class CaseContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedCase: Case;
  addBool: boolean;

  getSelectedCase(event) {
    this.selectedCase = event;
  }

  addOrUpdate(event) {
    this.addBool = event;
  }

}
