import { Component, DoCheck, HostListener, Input,  OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import {
  NgbModalConfig,
  NgbModal,
  NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as AuthAction from '../navigation-menu/store/auth.action'
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements DoCheck {
  navigation = this.router.getCurrentNavigation();
  state = this.navigation?.extras.state as {
    
   loginSuccess:number;
  };
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
 storeSub!: Subscription;
 loginSuccess=this.state?.loginSuccess
 

  constructor(private cartService:CartService,config: NgbModalConfig, private store: Store<fromApp.AppState>, private router: Router,
    private modalService: NgbModal) {
    this.cartLength=this.cartService.cartItems.length
    config.backdrop = 'static';
    config.keyboard = false;
   
   }

  ngOnInit(): void {
    let tok=localStorage.getItem('Token')
    console.log(tok)
    if(tok){
      this.loginSuccess=1
    }else{
      this.loginSuccess=0
    }
  }
 
  ngDoCheck(){
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
 
 console.log(this.signInForm.value);
 this.store.dispatch(
  new AuthAction.userLogin({
    ...this.signInForm.value
  })
);
this.storeSub=this.store.select('auth').subscribe((UserState:any)=>{
console.log(UserState);
this.loginSuccess=1
let token = UserState.user?.token;

localStorage.setItem('Token',token);
this.signInForm.reset();
this.modalService.dismissAll();
},
(err: HttpErrorResponse) => {
  console.log(err.error);
})

}

onSignUpSubmit(){
 console.log(this.signUpForm.value);
  
  this.store.dispatch(
    new AuthAction.addUsers({
      ...this.signUpForm.value
    })
  );
  this.signUpForm.reset();
  this.displayLoginForm();

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

}
