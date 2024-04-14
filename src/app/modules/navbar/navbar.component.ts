import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { navigationData } from './nav-data';
import { Emitter } from '../../emitter/emitter';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

interface navToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  title = 'Navbar';

  @Output() onTogglenav: EventEmitter<navToggle> = new EventEmitter();

  collapsed = false;
  naviData = navigationData;

  message : any;

  constructor (private http:HttpClient,
    private snackBar: MatSnackBar,
  ){

  }
  ngOnInit(): void {
    this.http.get('http://localhost:5000/api/user', {
    withCredentials:true,
    }).subscribe(
      (res: any)=> {
      this.message = `${res.firstname}`;
      Emitter.authEmitter.emit(true)
    },
    (err)=>{
      this.message = "you are not logged"
      Emitter.authEmitter.emit(false)
    }
  );
    
}
}
