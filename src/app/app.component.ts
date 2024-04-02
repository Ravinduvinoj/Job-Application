import { Component } from '@angular/core';

interface SidenavToggle {
  screenWidth : number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jobapp';

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SidenavToggle): void {
      this.isSideNavCollapsed = data.collapsed;
  }
}
