import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { ShowAuthedDirective } from './showauth.directive';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ShowAuthedDirective,
    NavbarComponent
  ],
  exports:[
    NavbarComponent,
    ShowAuthedDirective
  ]
})
export class SharedModule { }
