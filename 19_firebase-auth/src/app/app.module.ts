import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { ErrorsModule } from './errors/errors.module';
import { WelcomeModule } from './welcome/welcome.module';
import { HomeModule } from './home/home.module';
import { SignInModule } from './users/signin/signin.module';
import { SignUpModule } from './users/signup/signup.module';
import { AnonymousModule } from './users/signin/anonymous/anonymous.module';
import { EmailModule } from './users/signin/email/email.module';
import { PhoneModule } from './users/signin/phone/phone.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    LoadingBarModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    ErrorsModule,
    WelcomeModule,
    HomeModule,
    SignInModule,
    SignUpModule,
    AnonymousModule,
    EmailModule,
    PhoneModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
