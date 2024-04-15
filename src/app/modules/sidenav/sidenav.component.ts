import { Component, Output, EventEmitter, OnInit, } from '@angular/core';
import { adminData, empData } from './side-data';
import { HttpClient } from '@angular/common/http';
import { Emitter } from '../../emitter/emitter';

interface SidenavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent implements OnInit {


  @Output() onToggleSidenav: EventEmitter<SidenavToggle> = new EventEmitter();

  collapsed = false;
  screenWidth = 0;
  navData: any;

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSidenav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })

  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSidenav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })

  }
  authenticated: boolean;


  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    Emitter.authEmitter.subscribe((auth: boolean) => {
      this.authenticated = auth;
    })

    this.http.get('http://localhost:5000/api/user', {
      withCredentials: true,
    }).subscribe(
      (res: any) => {
        if (res.usertype === "admin") {
          this.navData = adminData;
        }
        else if (res.usertype === "company") {
          this.navData = empData;
        }
      })


  }

  logout(): void {
    this.http.post('http://localhost:5000/api/logout', {},
      { withCredentials: true }
    ).subscribe(() => this.authenticated = false)
  }


}
