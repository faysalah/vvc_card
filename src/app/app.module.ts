import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { NotFoundComponent } from './notfound.component';

import { AuthenticationModule } from './authentication/authentication.module';
import { BussinessModule } from './bussiness/bussiness.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AuthenticationModule,
    BussinessModule,
    SharedModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
