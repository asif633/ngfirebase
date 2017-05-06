import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verifyemail',
  template: '<p class="text-danger">Email is not verified from the email, please verify email first then login</p>',
  styles: ['']
})
export class VerifyemailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
