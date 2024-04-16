import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
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
      email: "",
      password: "",
      usertype: "company",
    });
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

    if(user.email==""|| user.password ==""){
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
      
    }else {
      this.http.post("http://localhost:5000/api/login", user,{
        withCredentials: true
      }).subscribe(
        (res : any)=> {
          if (res.usertype === "admin") {
            this.router.navigate(['/admin/dashboard']);
          } else if (res.usertype === "company") {
            this.router.navigate(['/company/emp-dashboard']);
          }
        },
        (err) =>{
          this.snackBar.open(err.error.message,'Close',{
          duration:3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center'
        })
        }
      )
    }
  }
  
}
// {
//   if (res.usertype === "admin") {
//     this.router.navigate(['/admin/dashboard']);
//   }
//   else if (res.usertype === "company") {
//     this.router.navigate(['/company/emp-dashboard']);
//   }
// }