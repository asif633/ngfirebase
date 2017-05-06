import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signedup',
  template: '<p class="text-success">Signed up successfully, check your email address to verify the email. Then sign in.</p>',
  styles: ['']
})
export class SignedupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
