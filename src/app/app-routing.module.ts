import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JCategoryComponent } from './j-category/j-category.component';
import { AccountsComponent } from './admin/accounts/accounts.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
 {path: 'dashboard', component: DashboardComponent},
 {path: 'j-category', component: JCategoryComponent},
 {path: 'accounts', component: AccountsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
