import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 public name = 'Angular';
  serverElements = [];
  save(value){
  
  this.serverElements.push({
      type: 'blueprint',
      name: value.bharat,
      content: value.add
    });
  }
}

