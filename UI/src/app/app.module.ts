import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpModule} from '@angular/http';
import {HttpService} from './services/http.service';
import { EmailfilterPipe } from './services/emailfilter.pipe';

import { LastnamefilterPipe } from './services/lastnamefilter.pipe';
import { FirstnamefilterPipe } from './services/firstnamefilter.pipe';
import { CompanyfilterPipe } from './services/companyfilter.pipe';
import { CityfilterPipe } from './services/cityfilter.pipe';
import { StatefilterPipe } from './services/statefilter.pipe';
import { ZipcodefilterPipe } from './services/zipcodefilter.pipe';
import { OrderModule } from 'ngx-order-pipe';


@NgModule({
  declarations: [
    AppComponent,
    EmailfilterPipe,
    
    LastnamefilterPipe,
    FirstnamefilterPipe,
    CompanyfilterPipe,
    CityfilterPipe,
    StatefilterPipe,
    ZipcodefilterPipe,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    
    NgxPaginationModule,
    OrderModule
    
    
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }