import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgToastService } from 'ng-angular-popup';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]); //email validation
  form: FormGroup

  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar,
    private Toast: NgToastService,
  ) {
    //get forms data
    this.form = this.formbuilder.group({
      company: ['', [Validators.required]],
      contact: ['', [Validators.required, Validators.pattern("^((\\+94-?)|0)?[0-9]{9}$")]],
      email: "",
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('(?=.*[a-z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
        ]
      ],
      con_password: [
        '',
        [
          Validators.required,
          Validators.pattern('(?=.*[a-z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
        ]
      ],
      companyurl: ['', [Validators.required]],
      userRole: "company",
      city: ['', Validators.required],
      address: ['', Validators.required]
    })
  }
  ngOnInit(): void { }

  //check email validation again
  ValidateEmail = (email: any) => {
    var ValidRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(ValidRegex)) {
      return true;
    } else {
      return false;
    }
  }

  //check confim pass equality
  checkpass = (pass: any, con_pass: any) => {
    if (pass == con_pass) {
      return true;
    } else {
      return false;
    }
  }

  // submit form data with validate data
  submit(): void {
    let user = this.form.getRawValue()
    user.email = this.emailFormControl.value;
    if (user.company == "" || user.contact == "" || this.emailFormControl.value == "" || user.contact == '' || user.city == '' || user.address == '' || user.password == "" || user.con_password == "" || user.companyurl == "") {
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


    } else if (!this.form.valid) {
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
      this.http.post("http://localhost:5000/api/temp-register", user, {
        withCredentials: true
      })
        .subscribe(() => {
          this.Toast.success({ detail: "Thank you!!!", summary: 'Your registration is sent please wait for admin approve', duration: 9000, position: 'botomCenter' })
          this.router.navigate(['/']);
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
