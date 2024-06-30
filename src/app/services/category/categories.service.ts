import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {



  private  apiurl = 'http://localhost:5000/api/get-all-Sub-Categories';
  private  apiurl2 = 'http://localhost:5000/api/get-all-category';
  constructor(private http: HttpClient) { }

  loadjobsubcate(): Observable<any> {
    return this.http.get<any>(this.apiurl).pipe(
      catchError(this.handleError)
    )
    
  }
  loadjobmaincate(): Observable<any> {
    return this.http.get<any>(this.apiurl2).pipe(
      catchError(this.handleError)
    )
    
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
