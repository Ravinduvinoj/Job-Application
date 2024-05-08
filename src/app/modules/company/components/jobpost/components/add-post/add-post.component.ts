import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { add_data } from '../../adddata';
import { event } from 'jquery';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent implements OnInit {
  form: FormGroup
  addver_data: add_data;
  mainCategory: any[];
  subCategory: any[];
  imageData: String;
  selectedCategoryId: string | undefined;
  selectedSubCategoryId: string | undefined;
  subcategoryName: string;
  constructor(
    private _fb: FormBuilder,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private Toast: NgToastService,
    private _dialogRef: MatDialogRef<AddPostComponent>) {

  }
  ngOnInit(): void {
    this.form = this._fb.group({
      jobtitle: ['', [Validators.required]],
      selectcategory: '',
      image : new FormControl(null),
      jobDescription: ['', [Validators.required]],
      requirement1: "",
      requirement2: '',
      possitionSummary: '',
      add_closing_Date: ['', [Validators.required]],
      çountry: ['', [Validators.required]],
      city: ['', [Validators.required]],


    })
    this.fetchCategories();
  }
  OnFileSelect($event: Event){
console.log('somthing slected')
  }



  public fetchCategories(): void {
    const apiUrl = 'http://localhost:5000/api/get-all-category'; // Update the API URL as per your backend route

    this.http.get<any[]>(apiUrl).subscribe(
      (data) => {
      
        this.mainCategory = data;
       
      },
      (error) => {
        console.error('Error fetching job category:', error);
      }
    );
  }
  onCategorySelectionChange(event: any): void {
    this.selectedCategoryId = event.value;
    console.log('Selected Category ID:', this.selectedCategoryId);
    const apiUrl = `http://localhost:5000/api/getselectedmaincategory/${this.selectedCategoryId}`; // Update the API URL as per your backend route

    this.http.get<any[]>(apiUrl).subscribe(
      (data) => {
        //this.SearchText
        this.subCategory = data;

      },
      (error) => {
        console.error('Error fetching job sub category:', error);
      }
    );

  }
  onSubCategorySelectionChange(event1: any): void {
    this.selectedSubCategoryId = event1.value;
    console.log('Selected sub Category ID:', this.selectedSubCategoryId);

  }
  
  onPostAdd() {

  }
}
