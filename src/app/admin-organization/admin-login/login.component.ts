import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { AdminAuthenticationService } from '../admin-authentication.service';

export interface PromptModel {
  title: string;
}
@Component({
  selector: 'app-admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class AdminLoginComponent extends DialogComponent<PromptModel, string> implements PromptModel {
  title: string;
  email: string;
  password: string;
  constructor(dialogService: DialogService,
    private authenticationService: AdminAuthenticationService,
    private router: Router) {
    super(dialogService);
  }

  login() {
    this.authenticationService.login(this.email, this.password)
    .subscribe(
    response => {
      confirm('signin sucessfully');
      this.authenticationService.isAuthenticated.next(true);
      this.router.navigate(['/admin/newRequest']);
    },
    error => {
      alert('login failled');
      // this.router.navigate(['/home']);
    }
    );
    this.close();
  }

  // ngOnInit() {
  //   this.authenticationService.logout();
  //   this.authenticationService.isAuthenticated.next(false);
  // }
}
