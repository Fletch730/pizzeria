import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems:Array<any>=[]
  constructor() { }

  addToCart(value:any){
    this.cartItems.push(value)
  }

  getCartItems(){
    return this.cartItems;
  }
}


