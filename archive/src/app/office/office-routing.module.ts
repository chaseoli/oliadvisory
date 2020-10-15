import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OfficeComponent } from './office.component';
import { OverviewComponent } from './overview/overview.component';
import { AccountsComponent } from './accounts/accounts.component';

const officeRoutes: Routes = [
    {
        path: '', component: OfficeComponent,
        children: [
            { path: '', component: OverviewComponent },
            { path: 'accounts', component: AccountsComponent }
        ]
    },

];

@NgModule({
    imports: [
        RouterModule.forChild(officeRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class OfficeRoutingModule { }
