import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  
  {path:'Menu', component:MenuComponent},

  {path:'Cart', component:CartComponent},

  {path:'Checkout', component:CheckoutComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
