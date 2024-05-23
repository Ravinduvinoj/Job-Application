import { Component,  OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { MatDialogRef} from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrl: './add-sub-category.component.css'
})

export class AddSubCategoryComponent implements OnInit {
  form: FormGroup
  mainCategory: any[];
  selectedCategoryId: string | undefined;
  subcategoryName: string;
  constructor(private _fb: FormBuilder,
    private matinput: MatInputModule,
    private Matform: MatFormFieldModule,
    private Formmod: FormsModule,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private Toast: NgToastService,
    private select: MatSelectModule,
    private _dialogRef: MatDialogRef<AddSubCategoryComponent>) {

  }


  ngOnInit(): void {
    this.form = this._fb.group({
      SubCategory: ['', [Validators.required]],
      Maincategory: ['', [Validators.required]]


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

  }
 
  

  onSubCategoryAdd() {
    let subCat = this.form.getRawValue()


    if (subCat.SubCategory == '') {
      this.snackBar.open("please enter a category name", 'Close', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      })
    }else if (this.selectedCategoryId==undefined){
      this.snackBar.open("please select a category", 'Close', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      })
    }else{
      this.http.post(`http://localhost:5000/api/add-subcategory/${this.selectedCategoryId}`, subCat, {
        withCredentials: true
      })
        .subscribe(() => {
          this.Toast.success({ detail: "category Created", summary: 'sub category creation successfully', duration: 9000, position: 'botomCenter' })
          setTimeout(() => {
            window.location.href ='/admin/j-category';
            this._dialogRef.close();
           
          }, 1000);
          

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
