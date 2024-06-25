import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private apiurl = "http://localhost:5000/api/companycount";
  private apiurl2 = "http://localhost:5000/api/adCount";
  private apiurl3 = "http://localhost:5000/api/appCount";
  private apiurl4 = "http://localhost:5000/api/Jobseeker-Count";

  private apiurlc1 = "http://localhost:5000/api/post/showcount";
  private apiurlc2 = "http://localhost:5000/api/appCountApproval";
  private apiurlc3 = "http://localhost:5000/api/TotalappCount";
  constructor(private http: HttpClient) { }
//this shows admin
  getAllCompanies(): Observable<any> {
    return this.http.get<any>(this.apiurl).pipe(
      catchError(this.handleError)
    );
  }
  getallAd(): Observable<any> {
    return this.http.get<any>(this.apiurl2).pipe(
      catchError(this.handleError)
    );
  }
  getAllApp(): Observable<any> {
    return this.http.get<any>(this.apiurl3).pipe(
      catchError(this.handleError)
    );
  }
  getAllSeekers(): Observable<any> {
    return this.http.get<any>(this.apiurl4).pipe(
      catchError(this.handleError)
    );
  }

 // this shows company
 getcompanyAd(data:any): Observable<any> {
  return this.http.get<any>(`${this.apiurlc1}/${data}`).pipe(
    catchError(this.handleError)
  );
}
getlisting(data:any): Observable<any> {
  return this.http.get<any>(`${this.apiurlc2}/${data}`).pipe(
    catchError(this.handleError)
  );
}
getapplications(data:any): Observable<any> {
  return this.http.get<any>(`${this.apiurlc3}/${data}`).pipe(
    catchError(this.handleError)
  );
}
private handleError(error: HttpErrorResponse) {
  let errorMessage = 'Unknown error!';
  if (error.error instanceof ErrorEvent) {
    // Client-side errors
    errorMessage = `Error: ${error.error.message}`;
  } else {
    // Server-side errors
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.error(errorMessage);
  return throwError(errorMessage);
}
}
