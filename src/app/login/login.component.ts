import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
form: FormGroup

emailFormControl = new FormControl('', [Validators.required, Validators.email]);


constructor(
  private formbuilder: FormBuilder,
  private http: HttpClient,
  private router: Router,
  private snackBar: MatSnackBar,
  private Toast : NgToastService,
) {

}
  ngOnInit(): void {
    this.form = this.formbuilder.group({
      email: "",
      password: "",
      userRole: "company",
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
    user.email = this.emailFormControl.value;
    console.log(user);

    if(user.email==""|| user.password ==""){
      // this.snackBar.open("please  enter all the fields", 'Close',{
      //   duration:3000,
      //   verticalPosition: 'bottom',
      //   horizontalPosition: 'center'
      // })
      this.Toast.warning({detail:"please  enter all the fields",summary: 'you have to fill all the fields and try again', duration:4000 ,position:'bottomRight'})
    }else if(!this.ValidateEmail(this.emailFormControl.value)){
      // this.snackBar.open("please  enter valid email", 'Close',{
      //   duration:3000,
      //   verticalPosition: 'bottom',
      //   horizontalPosition: 'center'
      // })
      this.Toast.warning({detail:"please  enter valid email", duration:4000 ,position:'bottomRight'})
      
    }else {
      this.http.post("http://localhost:5000/api/login", user,{
        withCredentials: true
      }).subscribe(
        (res : any)=> {
          if (res.userRole === "admin") {
            this.router.navigate(['/admin/dashboard']);
          } else if (res.userRole === "company") {
            this.router.navigate(['/company/emp-dashboard']);
          }
        },
        (err) =>{
        //   this.snackBar.open(err.error.message,'Close',{
        //   duration:3000,
        //   verticalPosition: 'bottom',
        //   horizontalPosition: 'center'
        // })

        this.Toast.error({detail: err.error.message, duration:4000 ,position:'bottomRight'})
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