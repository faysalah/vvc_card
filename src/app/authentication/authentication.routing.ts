
import { RouterModule } from '@angular/router';

import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

export const AuthenticationRouting = RouterModule.forChild([
    {path:'login', component: LoginComponent},
    {path:'registration', component: RegistrationComponent}

]);
