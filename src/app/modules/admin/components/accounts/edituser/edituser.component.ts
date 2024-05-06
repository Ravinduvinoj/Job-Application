import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

import { AccountsComponent } from '../accounts.component';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrl: './edituser.component.css'
})
export class EdituserComponent implements OnInit {
  @Input() com: (AccountsComponent);
  form: FormGroup
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private ac:AccountsComponent,
    private cdr: ChangeDetectorRef,
    private _fb: FormBuilder,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private Toast: NgToastService,
 
    private _dialogRef: MatDialogRef<EdituserComponent>,
   
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.form = this._fb.group({
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
  ngOnInit(): void {
    this.form.patchValue(this.data)
    this.emailFormControl.patchValue(this.data.email)


  }
  onFormSubmit() {
    const userUpdateData = this.form.value;

    this.http.put<any>('http://localhost:5000/api/update-user/' + this.data.email, userUpdateData)
      .subscribe(
        (response) => {

          this.snackBar.open('User updated successfully', 'Close', {
            duration: 3000,
            verticalPosition: 'bottom',
            horizontalPosition: 'center'
          });


          this._dialogRef.close();
         
        },
        (error) => {
          this.snackBar.open('Failed to update user', 'Close', {
            duration: 3000,
            verticalPosition: 'bottom',
            horizontalPosition: 'center'
          });
          console.error('Error updating user:', error);
        }
      );
     this.updatetbl();
  }
  updatetbl(){
    this.ac.fetchUserAccounts;
  }

}

