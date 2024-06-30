import { Component, OnInit } from '@angular/core';
import { NewCategoryComponent } from './components/new-category/new-category.component';
import { NgToastService } from 'ng-angular-popup';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DeletecategoryComponent } from './components/deletecategory/deletecategory.component';
import { UpdateCategoryComponent } from './components/update-category/update-category.component';
import { AddSubCategoryComponent } from './components/add-sub-category/add-sub-category.component';
import * as XLSX from 'xlsx';
import { UpdateSubCategoryComponent } from './components/update-sub-category/update-sub-category.component';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { CategoriesService } from '../../../../services/category/categories.service';

@Component({
  selector: 'app-j-category',
  templateUrl: './j-category.component.html',
  styleUrl: './j-category.component.css'
})
export class JCategoryComponent implements OnInit {
onTabChange($event: MatTabChangeEvent) {
throw new Error('Method not implemented.');
}
  title = 'Job Category';

  mainActivTable: boolean = false;
  subActivTable: boolean = true;
  mainCategory: any[];
  subCategory : any[];
selectedTabIndex: any;
  constructor(private http: HttpClient,
    private snackBar: MatSnackBar,
    private Toast: NgToastService,
    public dialog: MatDialog,
  private categoryService : CategoriesService) {

  }
  ngOnInit(): void {
    this.fetchCategories();
    this.fetchSubCategories();
  }
  showMainTable(): void{
this.mainActivTable = !this.mainActivTable;
if(this.mainActivTable){
  this.subActivTable = false;
}else{
  this. subActivTable=true;
}
  }

  onNewCategory() {
    this.dialog.open(NewCategoryComponent)
  }
  onNewSubCategory(){
    this.dialog.open(AddSubCategoryComponent)
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

  onCategoryEdit(cat: any): void {
    this.dialog.open(UpdateCategoryComponent, {data: cat}

    );
    console.log(cat);
  }
  // onSubCategoryEdit(sub: any): void {
  //   this.dialog.open(UpdateSubCategoryComponent, {data: sub}

  //   );
  //   console.log(sub);
  // }
  onSubCategoryEdit(sub: any): void {
    this.dialog.open(UpdateSubCategoryComponent, {
        data: sub // Pass the selected subcategory data to the dialog
    });
}



  displayedColumns: string[] = [
    'index',
    'category',
    'Subcategory',
    'actions'
  ];
  displayedmainColumns: string[] = [
    'index',
    'category',
    'actions'
  ];

  public fetchSubCategories():void {
    this.categoryService.loadjobsubcate().subscribe(
      (data)=>{
        this.subCategory= data
      },
    (error)=>{
      console.error('Error fetching sub category:', error);
    })
  }

  public fetchCategories(): void {
    
    this.categoryService.loadjobmaincate().subscribe(
      (data) => {
        //this.SearchText
        this.mainCategory = data;

      },
      (error) => {
        console.error('Error fetching main category:', error);
      }
    );
  }

  filename = 'ExcelSheet.xlsx';
  exportExcel() {
    const data = document.getElementById('table-data');
    if (data) {
      const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(data);
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      XLSX.writeFile(wb, this.filename);
    } else {
      console.error('Element with ID "table-data" not found.');
    }
  }
}
