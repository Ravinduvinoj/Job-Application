import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListningsService {

   private appData: any;

   private apiurl = "http://localhost:5000/api/get-application";
   private apiurl2 = "http://localhost:5000/api/get/status";
  constructor(private http: HttpClient) { }

  getjobapp(): Observable<any> {
    return this.http.get<any>(`${this.apiurl}/${this.appData._id}`);
  }
  getHistoryapp(): Observable<any> {
    return this.http.get<any>(`${this.apiurl2}/${this.appData._id}`);
  }
  setJobData(data: any) {
    this.appData = data;
  }
  getPostInfo() {
    return this.appData;
  }
}


