import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  @Input() collpased = false;
  @Input() screenWidth = 0;


  getBodyClass(): string {
    let styleClass ='';
    if(this.collpased && this.screenWidth >768){
      styleClass = 'body-trimmed';

    } else if (this.collpased && this.screenWidth<= 768&& this.screenWidth > 0){
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }
}
