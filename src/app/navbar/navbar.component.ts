import { Component, Output, EventEmitter } from '@angular/core';
import { navigationData } from './nav-data';

interface navToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  title = 'Navbar';

  @Output() onTogglenav: EventEmitter<navToggle> = new EventEmitter();

  collapsed = false;
  naviData = navigationData;
}
