import { Component, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { Emitter } from '../../emitter/emitter';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatMenuTrigger, MatMenuModule} from '@angular/material/menu';
import { UsersService } from '../../services/users/users.service';

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
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

openDialog() {

}
  title = 'Navbar';

  @Output() onTogglenav: EventEmitter<navToggle> = new EventEmitter();

  collapsed = false;

  message: any;
  dashboard: any;
  type: any;

  constructor(private http: HttpClient,
    private snackBar: MatSnackBar,
    private currentUser: UsersService
  ) {

  }
  ngOnInit(): void {
    this.get_user()

  }
  get_user(): void {

   this.currentUser.loadcurrentuser().subscribe(
        (res: any) => {
          this.message = `${res?.company}`;
          Emitter.authEmitter.emit(true)
          this.type = res?.userRole;
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
 


  }
}
