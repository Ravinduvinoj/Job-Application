import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  pendingmess: String;

  constructor() {
  }
  setMessage(data: any) {
    this.pendingmess = data;
  }
  getMessage() {
    return this.pendingmess
  }
}
