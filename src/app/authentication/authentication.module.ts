import { SharedModule } from './../shared/shared.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthenticationRouting } from './authentication.routing';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

import { AuthenticationService } from "./authentication.service";
import { HttpModule} from '@angular/http';


@NgModule({
  imports: [
    CommonModule,
    AuthenticationRouting,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SharedModule
  ],
  declarations: [
    RegistrationComponent,
    LoginComponent
  ],
  exports: [
    RegistrationComponent,
    LoginComponent
  ],
  providers:[
    AuthenticationService
  ],
})
export class AuthenticationModule { }
