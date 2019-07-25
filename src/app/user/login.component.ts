import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styles: [
    `
      em {
        float: right;
        color: #E0E90;
        padding-left: 10px;
      }
    `
  ]
})
export class LoginComponent {
  loginInvalid: boolean = false;
  constructor(private authService: AuthService, private router: Router) {}
  login(loginFormValues) {
    this.authService
      .loginUser(loginFormValues.userName, loginFormValues.password)
      .subscribe(response => {
        if (!response) {
          this.loginInvalid = true;
        } else {
          this.router.navigate(['events']);
        }
      });
    this.router.navigate(['events']);
  }
}
