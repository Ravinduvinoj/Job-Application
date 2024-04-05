import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JCategoryComponent } from './j-category/j-category.component';
import { AccountsComponent } from './admin/accounts/accounts.component';
import { JobapprovalComponent } from './admin/jobapproval/jobapproval.component';
import{ PaymentComponent } from './admin/payment/payment.component';
import { SubscriptionComponent } from './admin/subscription/subscription.component';

let usertype = 'admin';
if(usertype=='admin'){
  
}
const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
 {path: 'dashboard', component: DashboardComponent},
 {path: 'j-category', component: JCategoryComponent},
 {path: 'accounts', component: AccountsComponent},
 {path: 'jobapproval', component: JobapprovalComponent},
 {path: 'payment', component: PaymentComponent},
 {path: 'subscriptions', component: SubscriptionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
