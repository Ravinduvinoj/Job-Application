import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-delete',
  templateUrl: './add-delete.component.html',
  styleUrl: './add-delete.component.css'
})
export class AddDeleteComponent {
  constructor(
    public dialogRef: MatDialogRef<AddDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}
