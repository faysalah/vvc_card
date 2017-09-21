import { Component } from '@angular/core';
import { DialogService } from 'ng2-bootstrap-modal';
import { LoginComponent } from './authentication/login/login.component';

@Component({
  selector: 'app-root',
  template: `<app-navbar>
            </app-navbar>
            <router-outlet>
            </router-outlet>`,
  styles: []
})
export class AppComponent { }
