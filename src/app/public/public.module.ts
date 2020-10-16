import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomMaterialModule } from '../custom-material.module';

import { PhonePipe } from '../shared/pipes/phone.pipe';

import { StyleService } from './shared/style.service';
import { DocumentService } from '../shared/document.service';
import { WindowService } from '../shared/window.service';

import { ReCaptchaVisibleDirective } from './shared/recaptcha/recaptcha-visible.directive';
import { ReCaptchaInvisibleDirective } from './shared/recaptcha/recaptcha-invisible.directive';

import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { PublicComponent } from './public.component';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { CareersComponent } from './careers/careers.component';
import { AccountingComponent } from './accounting/accounting.component';
import { TechnologyComponent } from './technology/technology.component';
import { CreativeComponent } from './creative/creative.component';
import { NowComponent } from './now/now.component';
import { ParticleComponent } from './shared/particle/particle.component';
import { BouncingMouseComponent } from './shared/bouncing-mouse/bouncing-mouse.component';
import { GetStartedDialogComponent } from './shared/get-started-dialog/get-started-dialog.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { SubmitMessageDialogComponent } from './shared/submit-message/submit-message.component';
import { TeamDialogComponent } from './team/team-dialog/team-dialog.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TeamComponent } from './team/team.component';

@NgModule({
    declarations: [
        ComingSoonComponent,
        PublicComponent,
        LandingComponent,
        RegisterComponent,
        CareersComponent,
        PhonePipe,
        AccountingComponent,
        TechnologyComponent,
        CreativeComponent,
        NowComponent,
        ParticleComponent,
        ReCaptchaInvisibleDirective,
        ReCaptchaVisibleDirective,
        GetStartedDialogComponent,
        SubmitMessageDialogComponent,
        TeamDialogComponent,
        TeamComponent,
        TermsComponent,
        PrivacyComponent,
        BouncingMouseComponent,
        UnsubscribeComponent,
        RsvpComponent
    ],
    entryComponents: [
        GetStartedDialogComponent,
        SubmitMessageDialogComponent,
        TeamDialogComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        CustomMaterialModule,
        FormsModule,
        PublicRoutingModule,
        FontAwesomeModule
    ],
    providers: [
        StyleService,
        DocumentService,
        WindowService
    ]
})
export class PublicModule { }
