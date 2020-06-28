import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { FirebaseAuthService } from './firebase-auth.service';

import { NewContactPage } from './new-contact/new-contact.page';
import { Tab2aPage } from './tab2a/tab2a.page';

@NgModule({
  declarations: [
    AppComponent, 
    // ReactiveFormsModule, 
    Tab2aPage, NewContactPage
  ],
  entryComponents: [
    Tab2aPage, NewContactPage  // , ReactiveFormsModule
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
   ReactiveFormsModule, HttpClientModule,  
  AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
],
  providers: [
    FirebaseAuthService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

/* 

*/