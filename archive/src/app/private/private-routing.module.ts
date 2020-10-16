import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';

const privateRoutes: Routes = [
    {
        path: '', component: PrivateComponent,
        children: [
            { path: '', component: ProfileComponent },
            { path: 'account', component: AccountComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(privateRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PrivateRoutingModule { }
