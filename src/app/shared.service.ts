import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  pendingmess: String;
  tablefunc: boolean=false;

  constructor() {
  }
  setTablefunc(data:boolean){
    this.tablefunc= data;
    console.log(this.tablefunc)
  }
  getTablefunc(){
    return this.tablefunc
  }
  setMessage(data: any) {
    this.pendingmess = data;
  }
  getMessage() {
    return this.pendingmess
  }
}
