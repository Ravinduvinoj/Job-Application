import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-remove-approval',
  templateUrl: './remove-approval.component.html',
  styleUrl: './remove-approval.component.css'
})
export class RemoveApprovalComponent {
  constructor(
    public dialogRef: MatDialogRef<RemoveApprovalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}
