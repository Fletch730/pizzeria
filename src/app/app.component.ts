import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = [
    {name:"Adasdsagfhgfdhgfh" , age:23216767586786},
    {name:"Fdsafdsafgfhgfhgf", age:3123767567}
  ];

  myFunction(){
    var popup = document.getElementById("myPopup");
    popup?.classList.toggle("show");
  }
}
