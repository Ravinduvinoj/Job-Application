import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrl: './update-category.component.css'
})
export class UpdateCategoryComponent implements OnInit {



  form: FormGroup

  constructor(private _fb: FormBuilder,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private Toast: NgToastService,
    private _dialogRef: MatDialogRef<UpdateCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.form = this._fb.group({
      jobcategory: "",

    })
  }


  ngOnInit(): void {
   this.form.patchValue(this.data);
   
  }
  onCategoryUpdate() {
    const oldname = this.data.jobcategory
    const CategoryUpdateData = this.form.value;
    this.http.put<any>(`http://localhost:5000/api/update-Category/${oldname}` , CategoryUpdateData)
    .subscribe((response) => {

      this.snackBar.open(response.message, 'Close', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      });
      this._dialogRef.close();
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
