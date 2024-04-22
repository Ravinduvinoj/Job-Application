import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './modules/sidenav/sidenav.component';
import { DashboardComponent } from './modules/admin/components/dashboard/dashboard.component';
import { JCategoryComponent } from './modules/admin/components/j-category/j-category.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { AccountsComponent } from './modules/admin/components/accounts/accounts.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ScheduleComponent } from './modules/company/components/schedule/schedule.component';
import { JobpostComponent } from './modules/company/components/jobpost/jobpost.component';
import { SubscriptionComponent } from './modules/admin/components/subscription/subscription.component';
import { JobapprovalComponent } from './modules/admin/components/jobapproval/jobapproval.component';
import { JoblistningsComponent } from './modules/company/components/joblistnings/joblistnings.component';
import { LoginComponent } from './login/login.component';
import { LoginnavComponent } from './loginnav/loginnav.component';
import { RegisterComponent } from './register/register.component';;
import { EmpDashboardComponent } from './modules/company/components/emp-dashboard/emp-dashboard.component';
import { BodyComponent } from './modules/body/body.component';
import { AdminComponent } from './modules/admin/admin.component';
import { CompanyComponent } from './modules/company/company.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { provideHttpClient, withFetch } from "@angular/common/http";
import { NgToastModule } from 'ng-angular-popup';
import { HomeComponent } from './home/home.component';
import { AccountbodyComponent } from './modules/admin/components/accounts/accountbody/accountbody.component';
import {DataTablesModule} from 'angular-datatables';
import {MatDialogModule} from '@angular/material/dialog'
import {MatInputModule} from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MessageComponent } from './modules/admin/components/accounts/message/message.component';








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
    JoblistningsComponent,
    LoginComponent,
    LoginnavComponent,
    RegisterComponent,
    EmpDashboardComponent,
    AdminComponent,
    CompanyComponent,
    HomeComponent,
    AccountbodyComponent,
    MessageComponent,
    
  
    



  ],
  imports: [
    NgToastModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    DataTablesModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    
    
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
