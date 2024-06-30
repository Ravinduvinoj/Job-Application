import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JobapprovalService {
  private jobData: any;

  private apiurl = "http://localhost:5000/api/displayPost";
  constructor(private http: HttpClient) { }

  getjobpost(): Observable<any> {
    return this.http.get<any>(this.apiurl).pipe(
      catchError(this.handleError)
    )
  }
 
  setJobData(data: any) {
    this.jobData = data;
  }
  getJobData() {
    return this.jobData;
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
