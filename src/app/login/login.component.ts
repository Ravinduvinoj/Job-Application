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
    const user = this.form.getRawValue();
    user.email = this.emailFormControl.value;
    console.log(user);

    if (!user.email || !user.password) {
      this.Toast.warning({ detail: "Please enter all the fields", summary: 'You have to fill all the fields and try again', duration: 4000, position: 'bottomRight' });
    } else if (!this.ValidateEmail(user.email)) {
      this.Toast.warning({ detail: "Please enter a valid email", duration: 4000, position: 'bottomRight' });
    } else {
      this.http.post("http://localhost:5000/api/login", user, { withCredentials: true })
        .subscribe(
          (res: any) => {
            if (res.userRole === "admin" || res.userRole === "company") {
              localStorage.setItem('authToken', res.token);
              console.log('Login successful, token stored');
              this.router.navigate([`/${res.userRole}`]);
            }
          },
          (err) => {
            this.Toast.error({ detail: err.error.message, duration: 4000, position: 'bottomRight' });
          }
        );
    }
  }

}
