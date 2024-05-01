import { Component, OnInit } from '@angular/core';
import { NewCategoryComponent } from './components/new-category/new-category.component';
import { NgToastService } from 'ng-angular-popup';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DeletecategoryComponent } from './components/deletecategory/deletecategory.component';

@Component({
  selector: 'app-j-category',
  templateUrl: './j-category.component.html',
  styleUrl: './j-category.component.css'
})
export class JCategoryComponent implements OnInit{
     title = 'Job Category';
     activTable: boolean = true;
     mainCategory: any[];
 constructor(private http: HttpClient,
  private snackBar: MatSnackBar,
  private Toast: NgToastService,
  public dialog: MatDialog){

 }
  ngOnInit(): void {
    this.fetchCategories();
  }


     onNewCategory(){
      this.dialog.open(NewCategoryComponent)
     }
     onCategoryDelete(cat: any): void {
     
        const dialogRef = this.dialog.open(DeletecategoryComponent);
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.http.get<any[]>(`http://localhost:5000/api//delete-category/${cat.jobcategory}`).subscribe({
              next: (data) => {
                this.Toast.success({ detail: "category Deleted", summary: 'Category Deleted successfully', duration: 7000, position: 'botomCenter' })
                console.log('Category deleted successfully');
               this.fetchCategories();
              },
              error: (error) => {
                console.error('Error deleting category:', error);
              }
            });
          }
        });
  
      
  
    }
 
     onCategoryEdit():void {

     }

     displayedColumns: string[] = [
      'index',
      'category',
      'actions'
    ];

    public fetchCategories(): void {
      const apiUrl = 'http://localhost:5000/api/get-all-category'; // Update the API URL as per your backend route
  
      this.http.get<any[]>(apiUrl).subscribe(
        (data) => {
          //this.SearchText
          this.mainCategory = data;
  
        },
        (error) => {
          console.error('Error fetching user accounts:', error);
        }
      );
    }
}
