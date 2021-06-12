import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  userDetailsForm=new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    phone : new FormControl(''),
    city : new FormControl(''),
    houseNo : new FormControl(''),
    pincode : new FormControl(''),
    landmark : new FormControl('')
  })
 
  
  cartItems:Array<any>=[];
  
  today=new Date();
  total=0;
  storeSub!: Subscription;
  userDetails:any;
  constructor(private cartService:CartService,) { }

  ngOnInit(): void {
    console.log(localStorage.getItem("Id"))
    
    //console.log(this.userDetails);
    
    
    this.cartItems=this.cartService.getCartItems();
    for(let i=0;i<this.cartItems.length;i++){
      this.total=this.cartItems[i].subTotal+this.total+150;
    }

  
    

  }

  proceedToCheckout(){
   
    console.log(this.userDetailsForm.value);
  }

}
