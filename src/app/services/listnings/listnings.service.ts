import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListningsService {

   private appData: any;

  apiurl = "http://localhost:5000/api/get-application";
  constructor(private http: HttpClient) { }

  getjobapp(): Observable<any> {
    return this.http.get<any>(`${this.apiurl}/${this.appData._id}`);
  }
  setJobData(data: any) {
    this.appData = data;
  }
  

}


