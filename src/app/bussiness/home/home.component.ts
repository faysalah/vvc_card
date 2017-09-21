import { Component, OnInit } from '@angular/core';
import { DialogService } from 'ng2-bootstrap-modal';
import { LoginComponent} from '../../authentication/login/login.component';
import { RegistrationComponent} from '../../authentication/registration/registration.component';
import { AdminLoginComponent} from '../../admin-organization/admin-login/login.component';
import { AdminRegistrationComponent } from '../../admin-organization/admin-registration/registration.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private dialogService: DialogService) { }
  promptMessage: String = '';
  onLogin() {
    this.dialogService.addDialog(LoginComponent, {
      title: 'User Login',
    });
    // .subscribe((message) => {
    //   // We get dialog result
    //   // this.promptMessage = message;
    // });
  }

  onRegistration() {
    this.dialogService.addDialog(RegistrationComponent, {
      title: 'User Registration',
    });
    // .subscribe((message) => {
    //   // We get dialog result
    //   // this.promptMessage = message;
    // });
  }

  onAdminLogin() {
    this.dialogService.addDialog(AdminLoginComponent, {
      title: 'Organization Admin Login',
    });
    // .subscribe((message) => {
    //   // We get dialog result
    //   // this.promptMessage = message;
    // });
  }

  onAdminRegistration() {
    this.dialogService.addDialog(AdminRegistrationComponent, {
      title: 'Organization Admin Registration',
    });
    // .subscribe((message) => {
    //   // We get dialog result
    //   // this.promptMessage = message;
    // });
  }
}
