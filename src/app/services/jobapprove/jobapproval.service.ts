import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'jquery';
import { Observable } from 'rxjs';

interface jobPostData {
  "_id": "663f80711ed8ed3890e4f120",
  "job_title": "gtfgr",
  "job_description": "tgtryrt",
  "ad_closing_date": "1222-02-01T00:00:00.000Z",
  "position_summary": "rgrg",
  "requirement1": "rtt",
  "requirement2": "tyty",
  "country": "ytyty",
  "city": "tyyt",
  "JobCategory": "663a66c14ef91fe873b74853",
  "jobsubcategory": "663a674e4ef91fe873b7487f",
  "User": "663a3ac513fb309b4af3dec6",
  "post_date": "1715437681876",
  "__v": 0
}
@Injectable({
  providedIn: 'root'
})
export class JobapprovalService {
  apiurl = "http://localhost:5000/api/displayPost";
  constructor(private http: HttpClient) { }

  getjobpost(): Observable<any> {
    return this.http.get<any>(this.apiurl);
  }
}
