import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { UserRegistration } from '../authenticaton';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  user = new UserRegistration();
  constructor(private _fb: FormBuilder,
    private _authenticationService: AuthenticationService) {
    this.registrationForm = this._fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required],
      'confirmPassword': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  submitUser() {
    this._authenticationService.userRegistration(this.registrationForm.value)
      .subscribe(
      x => {
        confirm('Registration Successful');
        console.log(this.registrationForm.value.email);
      });

  }

}
