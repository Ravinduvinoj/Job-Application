import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private  apiurl = 'http://localhost:5000/api/getalltempuser';
   private  apiurl2 = 'http://localhost:5000/api/user-accounts';
   private  apiurl3 = 'http://localhost:5000/api/user';
  constructor(private http: HttpClient) { }

  loadtempUsers(): Observable<any> {
    return this.http.get<any>(this.apiurl).pipe(
      catchError(this.handleError)
    )
    
  }
  loadallusers(): Observable<any> {
    return this.http.get<any>(this.apiurl2).pipe(
      catchError(this.handleError)
    )
    
  }
  loadcurrentuser(): Observable<any> {
    return this.http.get<any>(this.apiurl3,{withCredentials:true}).pipe(
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
