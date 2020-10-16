import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficeComponent } from './office.component';
import { OverviewComponent } from './overview/overview.component';
import { AccountsComponent } from './accounts/accounts.component';
import { OfficeRoutingModule } from './office-routing.module';

import { CustomMaterialModule } from '../custom-material.module';

@NgModule({
    declarations: [
        OfficeComponent,
        OverviewComponent,
        AccountsComponent
    ],
    imports: [
        CommonModule,
        OfficeRoutingModule,
        CustomMaterialModule
    ],
    providers: [],
})
export class OfficeModule { }
