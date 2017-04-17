import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { RedAlertComponent } from './assingment1/app.component.redAlert';
import { GreenAlertComponent } from './assingment1/app.component.greenAlert';
import { Assignment2Component } from './assignment2/assignment2.component';
import { SimpleIfComponent } from './simple-if/simple-if.component';
import { SimpleStyleComponent } from './simple-style/simple-style.component';
import { SimpleNgFor } from './assignment3/simpleNgFor.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    RedAlertComponent,
    GreenAlertComponent,
    Assignment2Component,
    SimpleIfComponent,
    SimpleStyleComponent,
    SimpleNgFor
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
