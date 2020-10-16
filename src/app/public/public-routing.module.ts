import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareersComponent } from './careers/careers.component';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { PublicComponent } from './public.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { AccountingComponent } from './accounting/accounting.component';
import { TechnologyComponent } from './technology/technology.component';
import { CreativeComponent } from './creative/creative.component';
import { NowComponent } from './now/now.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { TeamComponent } from './team/team.component';

const publicRoutes: Routes = [
    {
        path: '', component: PublicComponent,
        children: [
            // { path: '', component: ComingSoonComponent },
            { path: '', component: LandingComponent },
            { path: 'careers', component: ComingSoonComponent },
            { path: 'login', component: RegisterComponent },
            { path: 'accounting', component: AccountingComponent },
            { path: 'technology', component: TechnologyComponent },
            { path: 'creative', component: CreativeComponent },
            { path: 'team', component: TeamComponent },
            { path: 'now', component: NowComponent },
            { path: 'terms', component: TermsComponent },
            { path: 'privacy', component:  PrivacyComponent},
            { path: 'rsvp', component:  RsvpComponent},
            { path: 'unsubscribe/:emailHash/:mailingList/:all', component: UnsubscribeComponent },
            { path: 'unsubscribe/:emailHash/:mailingList', component: UnsubscribeComponent },
            { path: 'soon', component: ComingSoonComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(publicRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PublicRoutingModule { }
