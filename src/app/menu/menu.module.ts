import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { MenuComponent } from './menu/menu.component';
import { MenuRoutingModule } from './menu-routing.module';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    MenuComponent, 
    CartComponent, 
    CheckoutComponent,
    
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MatDividerModule,
    ReactiveFormsModule
  ]
})
export class MenuModule { }
