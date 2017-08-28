import { BussinessService } from './bussiness.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet/wallet.component';
import { CardComponent } from './card/card.component';
import { CardRequestComponent } from './card-request/card-request.component';
import { BussinessRouting } from './bussiness.routing';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { ApplycardComponent } from './applycard/applycard.component';
import { TempCardComponent } from './temp-card/temp-card.component';


@NgModule({
  imports: [
    CommonModule,
    BussinessRouting
  ],
  declarations: [
    WalletComponent,
    CardComponent,
    CardRequestComponent,
    AccountComponent,
    HomeComponent,
    ApplycardComponent,
    TempCardComponent],
  exports: [
    WalletComponent,
    CardComponent,
    CardRequestComponent
  ],
  providers:[BussinessService]
})
export class BussinessModule { }
