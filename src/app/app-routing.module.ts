import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
