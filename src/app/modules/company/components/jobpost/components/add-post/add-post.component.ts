import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent implements OnInit {
  form: FormGroup

  constructor(private _fb: FormBuilder,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private Toast: NgToastService,
    private _dialogRef: MatDialogRef<AddPostComponent>) {

  }
  ngOnInit(): void {
    this.form = this._fb.group({
      jobtitle: ['',[Validators.required]],
      selectcategory:'',
      jobDescription:['',[Validators.required]],
      requirement1: "",
      requirement2: '',
      possitionSummary: '',
      add_closing_Date:['',[Validators.required]],
      çountry: ['',[Validators.required]],
      city: ['',[Validators.required]],


    })
  }
  onPostAdd(){

  }
}
