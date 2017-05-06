import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signedup',
  template: `
  <div class="container">
    <p class="text-success mt-5 ml-5">Signed up successfully. Check your email to verify your email address and then sign in.</p>
  </div>`,
  styles: ['']
})
export class SignedupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
