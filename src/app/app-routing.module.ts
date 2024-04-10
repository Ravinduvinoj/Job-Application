import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/admin/components/dashboard/dashboard.component';
import { JCategoryComponent } from './modules/admin/components/j-category/j-category.component';
import { AccountsComponent } from './modules/admin/components/accounts/accounts.component';
import { JobapprovalComponent } from './modules/admin/components/jobapproval/jobapproval.component';
import { SubscriptionComponent } from './modules/admin/components/subscription/subscription.component';
import { EmpDashboardComponent } from './modules/company/components/emp-dashboard/emp-dashboard.component';
import { JoblistningsComponent } from './modules/company/components/joblistnings/joblistnings.component';
import { JobpostComponent } from './modules/company/components/jobpost/jobpost.component';
import { ScheduleComponent } from './modules/company/components/schedule/schedule.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {path : 'login' , component : LoginComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'j-category', component: JCategoryComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'jobapproval', component: JobapprovalComponent },
  { path: 'subscription', component: SubscriptionComponent },
  { path: 'emp-dashboard', component: EmpDashboardComponent },
  { path: 'joblistnings', component: JoblistningsComponent },
  { path: 'jobpost', component: JobpostComponent },
  { path: 'schedule', component: ScheduleComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
