import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiurl = 'http://localhost:5000/api/getalltempuser';
  private apiurl2 = 'http://localhost:5000/api/user-accounts';
  private apiurl3 = 'http://localhost:5000/api/user';

  constructor(private http: HttpClient) { }

  loadtempUsers(): Observable<any> {
    return this.http.get<any>(this.apiurl).pipe(
      catchError(this.handleError)
    );
  }

  loadallusers(): Observable<any> {
    return this.http.get<any>(this.apiurl2).pipe(
      catchError(this.handleError)
    );
  }

  loadcurrentuser(): Observable<any> {
    return this.http.get<any>(this.apiurl3, { withCredentials: true }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
