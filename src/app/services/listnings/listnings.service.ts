import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListningsService {

   private appData: any;

   private apiurl = "http://localhost:5000/api/get-application";
   private apiurl2 = "http://localhost:5000/api/get/status";
  constructor(private http: HttpClient) { }

  getjobapp(): Observable<any> {
    return this.http.get<any>(`${this.apiurl}/${this.appData._id}`).pipe(
      catchError(this.handleError)
    )
  }
  getHistoryapp(): Observable<any> {
    return this.http.get<any>(`${this.apiurl2}/${this.appData._id}`).pipe(
      catchError(this.handleError)
    )
  }
  setJobData(data: any) {
    this.appData = data;
  }
  getPostInfo() {
    return this.appData;
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


