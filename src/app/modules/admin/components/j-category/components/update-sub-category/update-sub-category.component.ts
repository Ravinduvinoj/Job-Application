import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-sub-category',
  templateUrl: './update-sub-category.component.html',
  styleUrl: './update-sub-category.component.css'
})
export class UpdateSubCategoryComponent implements OnInit{

  form: FormGroup
  mainCategory: any[];
  selectedCategoryId: string | undefined;
  constructor(private _fb: FormBuilder,
    private matinput: MatInputModule,
    private Matform: MatFormFieldModule,
    private Formmod: FormsModule,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private Toast: NgToastService,
    private select: MatSelectModule,
    private _dialogRef: MatDialogRef<UpdateSubCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

      this.form = this._fb.group({
        jobsubcategory: ['', [Validators.required]],
        // Maincategory: ['', [Validators.required]]
        maincatID : ''
  
  
      })
      this.fetchCategories();
  }
  ngOnInit(): void {
    this.form.patchValue(this.data);
    this.fetchCategories()
  }
  onCategorySelectionChange(event: any): void {
    this.selectedCategoryId = event.value;
    console.log('Selected Category ID:', this.selectedCategoryId);

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

  onSubCategoryUpdate():void {
    let category = this.form.getRawValue()
    category.maincatID = this.selectedCategoryId
    
    const oldname = this.data.jobsubcategory

    
    console.log(oldname)
    console.log(category)
    // console.log( category)
    this.http.put<any>(`http://localhost:5000/api/update-sub-catgory/${oldname}` , category)
    .subscribe((response) => {

      this.snackBar.open(response.message, 'Close', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      });
      setTimeout(() => {
        window.location.href ='/admin/j-category';
        this._dialogRef.close();
       
      }, 1000);
    },
    (err) => {
      this.snackBar.open(err.message, 'Close', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      });
    }
  );
  }
}
