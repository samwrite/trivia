import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { FormsModule }   from '@angular/forms';
import { ApiService } from './question.service';
import { HttpModule } from '@angular/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    DashboardComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
