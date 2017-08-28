import { ApplycardComponent } from './applycard/applycard.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { CardComponent } from './card/card.component';
import { CardRequestComponent } from './card-request/card-request.component';
import { WalletComponent } from './wallet/wallet.component';
import { RouterModule } from '@angular/router';


export const BussinessRouting = RouterModule.forChild([
    {path:'wallet', component: WalletComponent},
    {path:'home', component: HomeComponent},
    {path:'card-request', component: CardRequestComponent},
    {path:'card', component: CardComponent},
    {path:'apply-card', component: ApplycardComponent},
    {path:'account', component: AccountComponent}
]);
