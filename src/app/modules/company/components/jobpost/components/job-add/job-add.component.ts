import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-job-add',
  templateUrl: './job-add.component.html',
  styleUrl: './job-add.component.css'
})
export class JobAddComponent implements OnInit{
  form: FormGroup
  constructor(private formbuilder: FormBuilder,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private Toast: NgToastService,
    private _dialogRef: MatDialogRef<JobAddComponent>) {

      this.form = this.formbuilder.group({
        company: ['',[Validators.required]],
        contact: ['', [Validators.required, Validators.pattern("^((\\+94-?)|0)?[0-9]{9}$")]],
        email: "",
        password: [''],
        con_password: [''],
        companyurl: ['',[Validators.required]],
        userRole: "company",
        city: ['',Validators.required],
        address: ['',Validators.required]
      })
  }

  ngOnInit(): void {
    
  }


  onPostSubmit():void {
    
  }
}
