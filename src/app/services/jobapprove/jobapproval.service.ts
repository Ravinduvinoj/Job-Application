import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JobapprovalService {
  private jobData: any;

  private apiurl = "http://localhost:5000/api/displayPost";
  constructor(private http: HttpClient) { }

  getjobpost(): Observable<any> {
    return this.http.get<any>(this.apiurl);
  }
 
  setJobData(data: any) {
    this.jobData = data;
  }
  getJobData() {
    return this.jobData;
  }
}
