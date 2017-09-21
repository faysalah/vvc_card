import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';

export interface PromptModel {
  title: string;
}
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent extends DialogComponent<PromptModel, string> implements PromptModel {
  title: string;
  email: string;
  password: string;
  cpassword: string;
  constructor(dialogService: DialogService, ) {
    super(dialogService);
  }

  registration() {
    console.log(this.email + ' ' + this.password + ' ' + this.cpassword);
    this.close();
  }

  // ngOnInit() {
  //   this.authenticationService.logout();
  //   this.authenticationService.isAuthenticated.next(false);
  // }

  // login(form: NgForm) {
  //   console.log(form);
  //   this.authenticationService.login(form.value.email, form.value.password)
  //     .subscribe(
  //     response => {
  //       confirm('signin sucessfully');
  //       this.authenticationService.isAuthenticated.next(true);
  //       this.router.navigate(['/wallet']);
  //     },
  //     error => {
  //       alert('login failled');
  //       this.router.navigate(['/home']);
  //     }
  //     );
  // }
}
