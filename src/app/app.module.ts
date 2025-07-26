import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormsModule, ReactiveFormsModule,Validator } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { ForgotComponent } from './forgot/forgot.component';
import { EntryComponent } from './entry/entry.component';
import { IntakeComponent } from './intake/intake.component';
import { PdetailsComponent } from './pdetails/pdetails.component';
import { DashComponent } from './dash/dash.component';
import { PatientsetailsComponent } from './patientsetails/patientsetails.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ForgotComponent,
    EntryComponent,
    IntakeComponent,
    PdetailsComponent,
    DashComponent,
    PatientsetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [ DashboardComponent,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
