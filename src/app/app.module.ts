import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './modules/admin/components/dashboard/dashboard.component';
import { JCategoryComponent } from './modules/admin/components/j-category/j-category.component';
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
import { DataTablesModule } from 'angular-datatables';
import { MatDialogModule } from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MessageComponent } from './modules/admin/components/accounts/message/message.component';
import { EdituserComponent } from './modules/admin/components/accounts/edituser/edituser.component';
import { UserRegisterComponent } from './modules/admin/components/accounts/user-register/user-register.component';
import { SearchUserPipe } from './modules/admin/components/accounts/search-user.pipe';
import { NewCategoryComponent } from './modules/admin/components/j-category/components/new-category/new-category.component';
import { AddSubCategoryComponent } from './modules/admin/components/j-category/components/add-sub-category/add-sub-category.component';
import { DeletecategoryComponent } from './modules/admin/components/j-category/components/deletecategory/deletecategory.component';
import { UpdateCategoryComponent } from './modules/admin/components/j-category/components/update-category/update-category.component';
import { MatSelectModule } from '@angular/material/select';
import { UpdateSubCategoryComponent } from './modules/admin/components/j-category/components/update-sub-category/update-sub-category.component';
import { AddPostComponent } from './modules/company/components/jobpost/components/add-post/add-post.component';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { SidenavComponent } from './modules/sidenav/sidenav.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { PostProfileComponent } from './modules/company/components/jobpost/components/post-profile/post-profile.component';
import { AddDeleteComponent } from './modules/company/components/jobpost/components/add-delete/add-delete.component';
import { ApprovalProfileComponent } from './modules/admin/components/jobapproval/components/approval-profile/approval-profile.component';
import { RemoveApprovalComponent } from './modules/admin/components/jobapproval/components/remove-approval/remove-approval.component';
import { PendingBoxComponent } from './modules/admin/components/jobapproval/components/pending-box/pending-box.component';
import {MatMenuModule} from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { PlanComponent } from './modules/company/components/plan/plan.component';


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
    EdituserComponent,
    UserRegisterComponent,
    SearchUserPipe,
    NewCategoryComponent,
    AddSubCategoryComponent,
    DeletecategoryComponent,
    UpdateCategoryComponent,
    UpdateSubCategoryComponent,
    AddPostComponent,
    NotFoundComponent,
    PostProfileComponent,
    AddDeleteComponent,
    ApprovalProfileComponent,
    RemoveApprovalComponent,
    PendingBoxComponent,
    PlanComponent,







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
    MatSelectModule,
    MatSelectCountryModule.forRoot('de'),
    MatTabsModule,
    MatDatepickerModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule,

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
