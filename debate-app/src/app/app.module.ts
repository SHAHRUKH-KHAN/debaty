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

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    RedAlertComponent,
    GreenAlertComponent
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
