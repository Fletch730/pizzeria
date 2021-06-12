import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  navigation = this.router.getCurrentNavigation();
  state = this.navigation?.extras.state as {
    
   loginSuccess:number;
  };

  ngOnInit(): void {
    let tok=localStorage.getItem('Token')
  console.log(tok)
  }

}
