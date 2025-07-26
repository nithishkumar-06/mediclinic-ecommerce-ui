import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { abcGuard } from './abc.guard';
import { ForgotComponent } from './forgot/forgot.component';
import { EntryComponent } from './entry/entry.component';
import { IntakeComponent } from './intake/intake.component';
import { PdetailsComponent } from './pdetails/pdetails.component';
import { entryGuard } from './entry.guard';
import { DashComponent } from './dash/dash.component';
import { PatientsetailsComponent } from './patientsetails/patientsetails.component';

const routes: Routes = [
  {path : '', component : LoginComponent},
  {path : 'login', component : LoginComponent},
  {path : 'register' , component : RegisterComponent},
  {path : 'dashboard' , component : DashboardComponent},
  {path : 'forgot' , component : ForgotComponent},
  {path : 'entry' , component : EntryComponent, canActivate : [abcGuard]},
  {path : 'intake', component : IntakeComponent},
  {path : 'pdetails',component : PdetailsComponent, canActivate : [entryGuard]},
  {path : 'dash', component : DashComponent, canActivate : [abcGuard]},
  {path : 'patient', component : PatientsetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
