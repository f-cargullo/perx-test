import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { CanProceedGuard } from '@guards/index';
import { MiscService } from '@services/index';
import { DemoListResolver } from '@resolvers/index';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    CanProceedGuard,
    MiscService,
    DemoListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
