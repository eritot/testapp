import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './main-page/main-page.component';
import { FormPageComponent } from './form-page/form-page.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    FormPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
