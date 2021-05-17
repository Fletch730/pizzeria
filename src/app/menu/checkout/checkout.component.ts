import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cartItems:Array<any>=[];
  today=new Date();
  total=0;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartItems=this.cartService.getCartItems();
    for(let i=0;i<this.cartItems.length;i++){
      this.total=this.cartItems[i].subTotal+this.total+150;
    }

  }

}
