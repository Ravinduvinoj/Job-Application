import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { error } from 'console';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  form: FormGroup

  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {

  }
  ngOnInit(): void {
    this.form = this.formbuilder.group({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      usertype: "company",
    })
  }
  ValidateEmail = (email: any)=>{

    var ValidRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(ValidRegex)){
      return true;
    }else{
      return false;
    }
  }

  submit(): void {
    let user = this.form.getRawValue()
    console.log(user);

    if(user.firstname ==""||user.lastname==""|| user.email==""|| user.password ==""){
      this.snackBar.open("please  enter all the fields", 'Close',{
        duration:3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      })
    }else if(!this.ValidateEmail(user.email)){
      this.snackBar.open("please  enter valid email", 'Close',{
        duration:3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      })
      
    } else{
      this.http.post("http://localhost:5000/api/register", user,{
        withCredentials: true
      })
      .subscribe(()=> this.router.navigate(['/company/emp-dashboard']),(err)=>{
        this.snackBar.open(err.error.message,'Close',{
          duration:3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center'
        })
      })
    }
  }

}
