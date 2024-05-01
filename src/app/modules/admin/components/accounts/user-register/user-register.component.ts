import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent {
  form: FormGroup
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  constructor(private formbuilder: FormBuilder,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private Toast: NgToastService,
    private _dialogRef: MatDialogRef<UserRegisterComponent>) {

      this.form = this.formbuilder.group({
        company: ['',[Validators.required]],
        contact: ['', [Validators.required, Validators.pattern("^((\\+94-?)|0)?[0-9]{9}$")]],
        email: "",
        password: [
          '',
          [
            Validators.required,
            Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
          ]
        ],
        con_password: [
          '',
          [
            Validators.required,
            Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
          ]
        ],
        companyurl: ['',[Validators.required]],
        userRole: "company",
        city: ['',Validators.required],
        address: ['',Validators.required]
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

  onCompanySubmit(){
    let user = this.form.getRawValue()
    user.email = this.emailFormControl.value;

    console.log(user);
    if (user.company == "" || user.contact == "" || this.emailFormControl.value == "" || user.contact == '' || user.city == '' || user.address == '' || user.password == "" || user.con_password== "" || user.companyurl == "") {
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


    }else if(!this.form.valid) {
      this.snackBar.open("please enter valid details", 'Close', {
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
      this.http.post("http://localhost:5000/api/direct-register", user, {
        withCredentials: true
      })
        .subscribe(() => {
          this.Toast.success({ detail: "Thank you!!!", summary: 'Your registration successfully and sent the email ', duration: 9000, position: 'botomCenter' }),
         
          this._dialogRef.close();
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

