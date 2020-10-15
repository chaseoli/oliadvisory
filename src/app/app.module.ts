// Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { PublicModule } from './public/public.module';
import { CustomMaterialModule } from './custom-material.module';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './not-found/not-found.component';

// Services
import { FirebaseService } from './shared/firebase.service';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PublicModule,
    CustomMaterialModule,
    HttpClientModule,
    AppRoutingModule // <-- Important: AppRoutingModule must come last https://angular.io/guide/router#module-import-order-matters
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
