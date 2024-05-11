import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { add_data } from '../../adddata';
import { Emitter } from '../../../../../../emitter/emitter';
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
  imageData: string | ArrayBuffer | null;
  selectedCategoryId: string | undefined;
  selectedSubCategoryId: string | undefined;
  subcategoryName: string;

  selectedFile: File;
  authenticated: boolean;
  loginID:'';
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
      // selectcategory: '',
      SubCategory: '',
      Maincategory: '',
      // image: ['', Validators.required],
      jobDescription: ['', [Validators.required]],
      requirement1: "",
      requirement2: '',
      possitionSummary: '',
      add_closing_Date: ['', [Validators.required]],
      çountry: ['', [Validators.required]],
      city: ['', [Validators.required]],
      login_id: ''


    })
    this.get_user()
    this.fetchCategories();
  }

  // OnFileSelect(event: any) {
  //   this.selectedFile = event.target.files[0]; // Access files array
  //   this.form.patchValue({ Image: this.selectedFile });
  //   const allowedimgtype = ["image/png", "image/jpeg", "image/jpg"];
  //   if (this.selectedFile && allowedimgtype.includes(this.selectedFile.type)) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       this.imageData = reader.result; // Assign reader.result directly
  //     };
  //     reader.readAsDataURL(this.selectedFile);
  //   } else {
  //     this.imageData = null; // Reset imageData if file type is not allowed
  //   }
  // }


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
  get_user(): void {
    Emitter.authEmitter.subscribe((auth: boolean) => {
      this.authenticated = auth;
    })

    this.http.get('http://localhost:5000/api/user', {
      withCredentials: true,
    }).subscribe(
      (res: any) => {
        this.loginID=res._id
        console.log('login Id is '+this.loginID)

      })
  }
  onPostAdd() {
    if (this.form.invalid) {
      this.snackBar.open("please  enter all the fields valid data", 'Close', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      })

    } else {
      let post = this.form.getRawValue()
      // post.image = this.selectedFile;
      post.Maincategory = this.selectedCategoryId;
      post.SubCategory = this.selectedSubCategoryId;
      post.login_id= this.loginID;
      console.log(post);
      this.http.post(`http://localhost:5000/api/add-post`, post, {
        withCredentials: true
      })
        .subscribe(() => {
          this.Toast.success({ detail: "job posted", summary: 'sub category creation successfully', duration: 9000, position: 'botomCenter' })
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