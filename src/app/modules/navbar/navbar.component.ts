import { Component, Output, EventEmitter, OnInit } from '@angular/core';
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
export class NavbarComponent implements OnInit {
  title = 'Navbar';

  @Output() onTogglenav: EventEmitter<navToggle> = new EventEmitter();

  collapsed = false;

  message: any;
  dashboard: any;
  type: any;

  constructor(private http: HttpClient,
    private snackBar: MatSnackBar,
  ) {

  }
  ngOnInit(): void {
    this.get_user()

  }
  get_user(): void {

    try {
      this.http.get('http://localhost:5000/api/user', {
        withCredentials: true,
      }).subscribe(
        (res: any) => {
          this.message = `${res.company}`;
          Emitter.authEmitter.emit(true)
          this.type = res.userRole;
          if (this.type === 'admin') {
            this.dashboard = 'Admin panel';
          } else {
            this.dashboard = 'Company panel';
          }


        },
        (err) => {
          this.message = "you are not logged"
          Emitter.authEmitter.emit(false)
        }
      );
    } catch (e) {
      console.log(e)
    }


  }
}
