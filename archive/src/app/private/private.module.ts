import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';
import { PrivateRoutingModule } from './private-routing.module';
import { CustomMaterialModule } from '../custom-material.module';

@NgModule({
    declarations: [
        PrivateComponent,
        ProfileComponent,
        AccountComponent,
    ],
    imports: [
        CommonModule,
        PrivateRoutingModule,
        CustomMaterialModule
    ],
    providers: [],
})
export class PrivateModule { }
