import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrl: './new-category.component.css'
})
export class NewCategoryComponent implements OnInit {
  form: FormGroup

  constructor(private _fb: FormBuilder,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private Toast: NgToastService,
    private _dialogRef: MatDialogRef<NewCategoryComponent>) {

  }
  ngOnInit(): void {
    this.form = this._fb.group({
      categoryname: ['', [Validators.required]],


    })
  }
  onCategoryAdd() {
    let category = this.form.getRawValue()


    if (category.categoryname == '') {
      this.snackBar.open("please fill the form", 'Close', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      })
    } else {


      this.http.post("http://localhost:5000/api/addcategory", category, {
        withCredentials: true
      })
        .subscribe(() => {
          this.Toast.success({ detail: "category Created", summary: 'job category creation successfully', duration: 9000, position: 'botomCenter' })
          this._dialogRef.close();

          // swal('Hello world!')

        },
          (err) => {
            this.snackBar.open(err.error.message, 'Close', {
              duration: 3000,
              verticalPosition: 'bottom',
              horizontalPosition: 'center'
            })
          })

    }
  }
}
