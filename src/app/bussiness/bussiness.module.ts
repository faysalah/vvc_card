import { BussinessService } from './bussiness.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet/wallet.component';
import { CardComponent } from './card/card.component';
import { CardRequestComponent } from './card-request/card-request.component';
import { BussinessRouting } from './bussiness.routing';

import { HomeComponent } from './home/home.component';
import { ApplycardComponent } from './applycard/applycard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { InfoComponent } from './info/info.component';

@NgModule({
  imports: [
    CommonModule,
    BussinessRouting,
    FormsModule,
    ReactiveFormsModule,
    BootstrapModalModule
  ],
  declarations: [
    WalletComponent,
    CardComponent,
    CardRequestComponent,
    HomeComponent,
    ApplycardComponent,
    InfoComponent],
  exports: [
    WalletComponent,
    CardComponent,
    CardRequestComponent
  ],
  providers: [BussinessService]
})
export class BussinessModule { }
