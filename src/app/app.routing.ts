import { RouterModule } from '@angular/router';
import {NotFoundComponent} from './notfound.component';

export const routing = RouterModule.forRoot([
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'not-found',component: NotFoundComponent},
    {path:'**',redirectTo:'not-found'}
]);
