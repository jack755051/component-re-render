import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlatformComponent } from './app/pages/platform/platform.component';
import { HomeComponent } from './app/pages/home/home.component';
import { ResumeInputComponent } from './app/pages/resume-input/resume-input.component';
import { IncrementComponent } from './app/pages/increment/increment.component';
import { BannerComponent } from './app/pages/banner/banner.component';
import { LoginComponent } from './app/pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PlatformComponent,
    HomeComponent,
    ResumeInputComponent,
    IncrementComponent,
    BannerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
