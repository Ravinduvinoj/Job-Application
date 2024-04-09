import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { JCategoryComponent } from './admin/j-category/j-category.component';
import { AccountsComponent } from './admin/accounts/accounts.component';
import { JobapprovalComponent } from './admin/jobapproval/jobapproval.component';
import { SubscriptionComponent } from './admin/subscription/subscription.component';
import { EmpDashboardComponent } from './employee/emp-dashboard/emp-dashboard.component';
import { JoblistningsComponent } from './employee/joblistnings/joblistnings.component';
import { JobpostComponent } from './employee/jobpost/jobpost.component';
import { ScheduleComponent } from './employee/schedule/schedule.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
 {path: 'dashboard', component: DashboardComponent},
 {path: 'j-category', component: JCategoryComponent},
 {path: 'accounts', component: AccountsComponent},
 {path: 'jobapproval', component: JobapprovalComponent},
 {path: 'subscription', component: SubscriptionComponent},
 {path: 'emp-dashboard', component:EmpDashboardComponent},
 {path: 'joblistning', component: JoblistningsComponent},
 {path: 'jobpost', component: JobpostComponent},
 {path: 'schedule', component: ScheduleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
