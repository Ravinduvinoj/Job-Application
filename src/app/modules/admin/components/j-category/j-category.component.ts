import { Component } from '@angular/core';
import { NewCategoryComponent } from './components/new-category/new-category.component';
import { NgToastService } from 'ng-angular-popup';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-j-category',
  templateUrl: './j-category.component.html',
  styleUrl: './j-category.component.css'
})
export class JCategoryComponent {
     title = 'Job Category';
 constructor(private http: HttpClient,
  private snackBar: MatSnackBar,
  private Toast: NgToastService,
  public dialog: MatDialog){

 }

     onNewCategory(){
      this.dialog.open(NewCategoryComponent)
     }
}
