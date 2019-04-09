import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { EasyGoFilterComponent } from './easy-go-filter/easy-go-filter.component';
import { EasyGoService } from './easy-go.service'
import { HttpClientModule } from '@angular/common/http';
import { MessagesComponent } from './messages/messages.component'
import { MessageService } from './message.service';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

const appRoutes: Routes = [
  { path: '', component: HomeComponent }
 
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EasyGoFilterComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [
    EasyGoService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
