import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  username: string = "Amit Pandey";
  childData: string;
  
  //child event handled here
  catchChildEvent($event){
    this.childData = $event;
    }
}
