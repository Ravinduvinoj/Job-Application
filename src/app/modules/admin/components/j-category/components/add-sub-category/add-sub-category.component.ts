import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrl: './add-sub-category.component.css'
})

export class AddSubCategoryComponent implements OnInit{
  form: FormGroup
  mainCategory: any[];
  selectedCategoryId: string | undefined;
  subcategoryName: string;
  constructor(private _fb: FormBuilder,
    private matinput:MatInputModule,
    private Matform: MatFormFieldModule,
    private Formmod : FormsModule,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private Toast: NgToastService,
    private select:MatSelectModule,
    private _dialogRef: MatDialogRef<AddSubCategoryComponent>) {

  }
 

  ngOnInit(): void {
    this.form = this._fb.group({
      SubCategory: ['', [Validators.required]],
      Maincategory:""


    })
    this.fetchCategories();
  }
  public fetchCategories(): void {
    const apiUrl = 'http://localhost:5000/api/get-all-category'; // Update the API URL as per your backend route

    this.http.get<any[]>(apiUrl).subscribe(
      (data) => {
        //this.SearchText
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
    // You can perform additional actions based on the selected category ID
  }

  onSubCategoryAdd(){

  }
}
