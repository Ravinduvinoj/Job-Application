import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BodyComponent } from './body/body.component';
import { DashboardComponent } from './common/dashboard/dashboard.component';
import { JCategoryComponent } from './admin/j-category/j-category.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccountsComponent } from './admin/accounts/accounts.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ScheduleComponent } from './employee/schedule/schedule.component';
import { JobpostComponent } from './employee/jobpost/jobpost.component';
import { SubscriptionComponent } from './admin/subscription/subscription.component';
import { JobapprovalComponent } from './admin/jobapproval/jobapproval.component';
import { SearchComponent } from './common/search/search.component';
import { JoblistningsComponent } from './employee/joblistnings/joblistnings.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    BodyComponent,
    DashboardComponent,
    JCategoryComponent,
    NavbarComponent,
    AccountsComponent,
    ScheduleComponent,
    JobpostComponent,
    SubscriptionComponent,
    JobapprovalComponent,
    SearchComponent,
    JoblistningsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
