import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostProfileServiceService {
  private jobData: any;

  constructor() { }

  setJobData(data: any) {
    this.jobData = data;
  }

  getJobData() {
    return this.jobData;
  }

}
