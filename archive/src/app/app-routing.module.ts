import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './not-found/not-found.component';
import { Routes } from '@angular/router/src/config';
import { RouterModule } from '@angular/router';

export const appRoutes: Routes = [
    // { path: 'public', component: PublicComponent },
    {
        path: 'private',
        loadChildren: 'app/private/private.module#PrivateModule'
    },
    {
        path: 'office',
        loadChildren: 'app/office/office.module#OfficeModule'
    },
    // { path: '',   redirectTo: '/some-path', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            // {
            //     enableTracing: true, // <-- debugging purposes only
            // }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
