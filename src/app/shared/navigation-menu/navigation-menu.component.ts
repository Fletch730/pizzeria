import { Component, DoCheck, HostListener, Input,  OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import {
  NgbModalConfig,
  NgbModal,
  NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements DoCheck {
 
 isCollapsed = true;
 //cartLength:number=0;
 cart!:number;
 cartLength!:number;
 loginForm=1;
 createForm=0;
 private loginDialog!:NgbModalRef;
 

  constructor(private cartService:CartService,config: NgbModalConfig,
    private modalService: NgbModal) {
    this.cartLength=this.cartService.cartItems.length
    config.backdrop = 'static';
    config.keyboard = false;
   
   }

  ngOnInit(): void {

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
  displayCreateForm(){
    this.loginForm=0;
    this.createForm=1;
  }

  displayLoginForm(){
    this.loginForm=1;
    this.createForm=0;
  }

}
