import { Component, DoCheck, HostListener, Input,  OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import {
  NgbModalConfig,
  NgbModal,
  NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements DoCheck {
  
signInForm=new FormGroup({
  email : new FormControl(''),
  password : new FormControl('')
})

  signUpForm= new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl(''),
    phone : new FormControl(''),
    city : new FormControl(''),
    houseNo : new FormControl(''),
    pincode : new FormControl(''),
    landmark : new FormControl('')
  })
 
 isCollapsed = true;
 //cartLength:number=0;
 cart!:number;
 cartLength!:number;
 loginForm=1;
 createForm=0;
 private loginDialog!:NgbModalRef;
 loginSuccess=0;
 //tok=localStorage.getItem('Token');
 tool={name:"fletche",age:23};
 

  constructor(private cartService:CartService,config: NgbModalConfig,  private router: Router,
    private modalService: NgbModal) {
    this.cartLength=this.cartService.cartItems.length
    config.backdrop = 'static';
    config.keyboard = false;
   
   }

  ngOnInit(): void {
    //console.log(tok)
    let tok=localStorage.getItem('Token')
    if(tok){
      this.loginSuccess=1
    }else if(tok==undefined){
      this.loginSuccess=0
    }else{
      this.loginSuccess=0
    }
    this.cartLength=this.cartService.cartItems.length
  }
 
  ngDoCheck(){
    
    //console.log(tok)
    let tok=localStorage.getItem('Token')
    if(tok){
      this.loginSuccess=1
    }else if(tok==undefined){
      this.loginSuccess=0
    }else{
      this.loginSuccess=0
    }
    this.cartLength=this.cartService.cartItems.length
  }
  

  login(loginModal:any){
   this.loginDialog=this.modalService.open(loginModal,{
     size:'lg',
   });
   this.loginDialog.result.then(
     (result)=>{
       console.log('closed')
     },
     (reason)=>{
       console.log('dismissed')
     }
   )
  }
onLoginSubmit(){
 
// console.log(this.signInForm.value);
 

}

onSignUpSubmit(){
 
}

  displayCreateForm(){
    this.loginForm=0;
    this.createForm=1;
  }

  displayLoginForm(){
    this.loginForm=1;
    this.createForm=0;
  }

  loginProfile(){
    this.router.navigate(['/profile'])
  }

  tooltip(){

  }

}
