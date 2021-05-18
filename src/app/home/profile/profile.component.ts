import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    let navigationExtras: NavigationExtras = {
      state: {
        loginSuccess:0
       
      }
    }
    localStorage.removeItem('Token');
        this.router.navigate([ '/' ],navigationExtras);
  }
}
