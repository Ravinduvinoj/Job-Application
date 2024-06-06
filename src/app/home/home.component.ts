import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BotComponent } from '../bot/bot.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {




  constructor(public dialog: MatDialog,
    private router: Router
  ) { }



  onLogin() {
    this.router.navigate(['/login']); // Navigate to login page
  }

  onRegister() {
    this.router.navigate(['/register']); // Navigate to register page
  }

  onSendMessage() {
    this.dialog.open(BotComponent)

  }
}
