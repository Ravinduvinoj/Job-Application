import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrl: './edituser.component.css'
})
export class EdituserComponent implements OnInit{


  form: FormGroup
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

 constructor( private _fb: FormBuilder,
  private _dialogRef: MatDialogRef<EdituserComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any){

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
  }
  onFormSubmit() {
    
    }
}
