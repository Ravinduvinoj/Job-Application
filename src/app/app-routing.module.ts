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
import { AdminComponent } from './modules/admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CompanyComponent } from './modules/company/company.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostProfileComponent } from './modules/company/components/jobpost/components/post-profile/post-profile.component';
import { ApprovalProfileComponent } from './modules/admin/components/jobapproval/components/approval-profile/approval-profile.component';
import { PendingBoxComponent } from './modules/admin/components/jobapproval/components/pending-box/pending-box.component';
import { PlanComponent } from './modules/company/components/plan/plan.component';
import { ViewListningsComponent } from './modules/company/components/joblistnings/components/view-listnings/view-listnings.component';




const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: 'admin', component: AdminComponent, children: [
      { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'j-category', component: JCategoryComponent },
      { path: 'accounts', component: AccountsComponent },
      {
        path: 'jobapproval', component: JobapprovalComponent, children: [
          { path: "post-profile", component: ApprovalProfileComponent },
          { path: "pending", component: PendingBoxComponent }

        ]
      },
      { path: 'subscription', component: SubscriptionComponent },

    ]
  },
  {
    path: 'company', component: CompanyComponent, children: [
      { path: '', redirectTo: '/company/emp-dashboard', pathMatch: 'full' },
      { path: 'emp-dashboard', component: EmpDashboardComponent },
      { path: 'joblistnings', component: JoblistningsComponent,children:[
        {path:'view-listning',component:ViewListningsComponent}
      ] },
      {
        path: 'jobpost', component: JobpostComponent, children: [
          { path: 'post-profile', component: PostProfileComponent },
        ]
      },
      { path: 'schedule', component: ScheduleComponent },
      { path: 'plans', component: PlanComponent }]
  },
  { path: '**', component: NotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
