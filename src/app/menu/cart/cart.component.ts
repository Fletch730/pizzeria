import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems:Array<any>=[];
  total:number=0;
  

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartItems=this.cartService.getCartItems();
    // console.log(this.cartItems)
    for(let i=0;i<this.cartItems.length;i++){
      this.total=this.cartItems[i].subTotal+this.total;
    }
    console.log(this.total)
  }


  onClickRemove(value:any){
    if(this.cartItems[value].quantity<=0){
      this.cartItems[value].quantity=0;
    }else{
    this.cartItems[value].quantity=this.cartItems[value].quantity-1;
    this.cartItems[value].subTotal= this.cartItems[value].subTotal- this.cartItems[value].price;
    this.total=this.total-this.cartItems[value].price
    }
  }

  onClickAdd(value:any){
    this.cartItems[value].quantity=this.cartItems[value].quantity+1;
    this.cartItems[value].subTotal= this.cartItems[value].subTotal+ this.cartItems[value].price;
    this.total=this.total+this.cartItems[value].price
  }

delete(value:any){
  this.total=this.total-this.cartItems[value].subTotal;
  this.cartItems.splice(value,1);
  }

}
