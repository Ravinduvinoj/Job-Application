import { Component, Output ,EventEmitter, OnInit ,} from '@angular/core';
import { navbarData} from './side-data';


interface SidenavToggle {
  screenWidth : number;
  collapsed: boolean;
}


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

@Output() onToggleSidenav: EventEmitter<SidenavToggle> = new EventEmitter();

  collapsed = false;
  screenWidth =0;
  navData = navbarData;

// ngOnInit(): void {
//     this.screenWidth = window.innerWidth;
// }

  toggleCollapse():void {
    this.collapsed= true;
    this.onToggleSidenav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})
   
  }

  closeSidenav(): void{
    this.collapsed=false;
    this.onToggleSidenav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})

  }
}
