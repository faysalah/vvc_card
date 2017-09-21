import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

export interface PromptModel {
  title: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent extends DialogComponent<PromptModel, string> implements PromptModel {
  title: string;
  email: string;
  password: string;
  constructor(dialogService: DialogService,
    private authenticationService: AuthenticationService,
    private router: Router) {
    super(dialogService);
  }

  login() {
    this.authenticationService.login(this.email, this.password)
    .subscribe(
    response => {
      confirm('signin sucessfully');
      this.authenticationService.isAuthenticated.next(true);
      this.router.navigate(['/wallet']);
    },
    error => {
      alert('login failled');
      this.router.navigate(['/home']);
    }
    );
    this.close();
  }

  // ngOnInit() {
  //   this.authenticationService.logout();
  //   this.authenticationService.isAuthenticated.next(false);
  // }
}
