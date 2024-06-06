import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  apiurl = "http://localhost:5000/api/companycount";
  apiurl2 = "http://localhost:5000/api/adCount";
  apiurl3 = "http://localhost:5000/api/appCount";
  apiurl4 = "http://localhost:5000/api/Jobseeker-Count";

  apiurlc1 = "http://localhost:5000/api/post/showcount";
  apiurlc2 = "http://localhost:5000/api/appCountApproval";
  apiurlc3 = "http://localhost:5000/api/appCount";
  constructor(private http: HttpClient) { }
//this shows admin
  getAllCompanies(): Observable<any> {
    return this.http.get<any>(this.apiurl);
  }
  getallAd(): Observable<any> {
    return this.http.get<any>(this.apiurl2);
  }
  getAllApp(): Observable<any> {
    return this.http.get<any>(this.apiurl3);
  }
  getAllSeekers(): Observable<any> {
    return this.http.get<any>(this.apiurl4);
  }

 // this shows company
 getcompanyAd(data:any): Observable<any> {
  return this.http.get<any>(`${this.apiurlc1}/${data}`);
}
getlisting(data:any): Observable<any> {
  return this.http.get<any>(`${this.apiurlc2}/${data}`);
}
}
