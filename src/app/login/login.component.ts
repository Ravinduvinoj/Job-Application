import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  form: FormGroup
  emailFormControl = new FormControl('', [Validators.required, Validators.email]); //check email validation using angular material components

  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private Toast: NgToastService,
  ) { }

  ngOnInit(): void {
    //get form data
    this.form = this.formbuilder.group({
      email: "",
      password: "",
      userRole: "company",
    });
  }

  //check email validation
  ValidateEmail = (email: any) => {
    var ValidRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(ValidRegex)) {
      return true;
    } else {
      return false;
    }
  }


  submit(): void {
    //getting raw value in the form
    let user = this.form.getRawValue()
    user.email = this.emailFormControl.value; //asign email compenent assigned value
    console.log(user);

    //check email & password is empty
    if (user.email == "" || user.password == "") {
      this.Toast.warning({ detail: "please  enter all the fields", summary: 'you have to fill all the fields and try again', duration: 4000, position: 'bottomRight' })

    } else if (!this.ValidateEmail(this.emailFormControl.value)) {//check login email is validation
      this.Toast.warning({ detail: "please  enter valid email", duration: 4000, position: 'bottomRight' })

    } else {
      this.http.post("http://localhost:5000/api/login", user, {//set login data to login api
        withCredentials: true
      }).subscribe(
        (res: any) => {
          //check role base
          if (res.userRole === "admin") {
            this.router.navigate(['/admin']);
          } else if (res.userRole === "company") {
            this.router.navigate(['/company']);
          }
        },
        (err) => {
          this.Toast.error({ detail: err.error.message, duration: 4000, position: 'bottomRight' })
        }
      )
    }
  }

}
