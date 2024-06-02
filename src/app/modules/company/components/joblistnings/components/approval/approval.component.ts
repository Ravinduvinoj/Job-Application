import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgToastService } from 'ng-angular-popup';
import { ViewListningsComponent } from '../view-listnings/view-listnings.component';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrl: './approval.component.css'
})
export class ApprovalComponent {




  @Input() com: (ViewListningsComponent);
  form: FormGroup

  ngOnInit(): void {

  }
  date: Date | null;
  time: string | null;
  minDate: Date;

  constructor(
    private cdr: ChangeDetectorRef,
    private _fb: FormBuilder,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private Toast: NgToastService,
    private _dialogRef: MatDialogRef<ApprovalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.date = null;
    this.time = null;
    this.minDate = new Date(); // Today's date
    this.form = this._fb.group({
      location: ['', Validators.required],
      description: ['', Validators.required],
      interiview_date: ['', Validators.required],
      interiview_time: ['', Validators.required],
    })
  }

  getDateTime(): Date | undefined {
    if (this.date && this.time) {
      const [hours, minutes] = this.time.split(':');
      const dateTime = new Date(this.date);
      dateTime.setHours(parseInt(hours, 10));
      dateTime.setMinutes(parseInt(minutes, 10));
      return dateTime;
    }
    return undefined;
  }

  onApprovalSubmit() {
    let appdata = this.form.getRawValue()
    const id = this.data._id
    console.log(id)
    console.log(appdata);
    if(!this.form.valid) {
      this.snackBar.open("please fill all the fields or enter valid details", 'Close', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      })
    }
    else {
      this.http.post<any>(`http://localhost:5000/api/app/schedule/${id}`, appdata)
      .subscribe(
        (response) => {
          this.snackBar.open('approved and interview schedule succesfully', 'Close', {
            duration: 3000,
            verticalPosition: 'bottom',
            horizontalPosition: 'center'
          });
          // setTimeout(() => {
          //   window.location.href ='/admin/accounts';
          //   this._dialogRef.close();
          // }, 1000);
          this._dialogRef.close();
        },
        (error) => {
          this.snackBar.open('Failed to approve', 'Close', {
            duration: 3000,
            verticalPosition: 'bottom',
            horizontalPosition: 'center'
          });
          console.error('Error approve:', error);
        }
      );
    }
  }
}
