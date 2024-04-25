import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { error } from 'console';
import { SharedService } from '../shared.service';
import { NgToastService } from 'ng-angular-popup';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);


  pending: any;

  form: FormGroup

  constructor(
    private shared: SharedService,
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar,
    private Toast: NgToastService,
    private FormField: MatFormFieldModule,
    private Input: MatInputModule,
  ) {

  }
  ngOnInit(): void {
    this.form = this.formbuilder.group({
      company: "",
      contact: "",
      email: "",
      password: "",
      con_password: "",
      companyurl: "",
      userRole: "company",
      city: "",
      address: ""


    })


  }

  ValidateEmail = (email: any) => {

    var ValidRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(ValidRegex)) {
      return true;
    } else {
      return false;
    }
  }

  checkpass = (pass: any, con_pass: any) => {
    if (pass == con_pass) {
      return true;
    } else {
      return false;
    }
  }

  submit(): void {
    let user = this.form.getRawValue()
    user.email = this.emailFormControl.value;
    console.log(user);


    if (user.company == "" || user.contact == "" || this.emailFormControl.value == "" || user.contact=='' || user.city=='' || user.address=='' || user.password == "" || user.con_password == "") {
      this.snackBar.open("please  enter all the fields", 'Close', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      })
    } else if (!this.ValidateEmail(this.emailFormControl.value)) {
      this.snackBar.open("please  enter valid email", 'Close', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      })


    } else if (!this.checkpass(user.password, user.con_password)) {
      this.snackBar.open("Your password does not match", 'Close', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      })
    } else {
      this.http.post("http://localhost:5000/api/temp-register", user, {
        withCredentials: true
      })
        .subscribe(() => {
          this.Toast.success({ detail: "Thank you!!!", summary: 'Your registration is sent please wait for admin approve', duration: 9000, position: 'botomCenter' })
          this.router.navigate(['/']);

          // swal('Hello world!')

        },
          (err) => {
            this.snackBar.open(err.error.message, 'Close', {
              duration: 3000,
              verticalPosition: 'bottom',
              horizontalPosition: 'center'
            })
          })
    }
  }

}
