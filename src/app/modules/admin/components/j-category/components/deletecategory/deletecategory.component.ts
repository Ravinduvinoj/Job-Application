import { Component ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-deletecategory',
  templateUrl: './deletecategory.component.html',
  styleUrl: './deletecategory.component.css'
})
export class DeletecategoryComponent {
  constructor(
    public dialogRef: MatDialogRef<DeletecategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}
