import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig } from '@angular/material/dialog';
import { CartService } from '../../services/cart.service';
import { AlertComponent } from '../alert/alert.component';
import { Router,ActivatedRoute } from '@angular/router'; 


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
 counter=0;
 item={};
 alertConfig: MatDialogConfig<any>;
 amount!:number


  constructor(private router: Router,private dialog: MatDialog,@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ItemComponent>,private cartService:CartService) {
    this.alertConfig = new MatDialogConfig();
    this.alertConfig.disableClose = false;
    this.alertConfig.autoFocus = false;
    this.alertConfig.minWidth = '30%';
   
    this.alertConfig.closeOnNavigation = true;
    this.alertConfig.panelClass = 'custom-dialog-container'

   }

  ngOnInit(): void {
  
this.amount=0
  }
  onClickAdd(){
    this.counter++;
    this.amount=this.counter*this.data.price
  }
  onClickRemove(){
    if(this.counter<=0){
      this.counter=0
    }else{
      this.counter--
      this.amount=this.counter*this.data.price
    }
  }

  addToCart(){
    if(this.counter==0){
     return
    }else{
    this.item={image:this.data.image,name:this.data.name, price:this.data.price,quantity:this.counter,subTotal:this.amount*this.counter};
    }
    this.cartService.addToCart(this.item);
    this.alertConfig.data = {
        message:"Added To cart",
      };
    const item = this.dialog.open(  AlertComponent, this.alertConfig);
    item.afterClosed().subscribe(result => { });
    this.dialogRef.close();
    }
proceedToCart(){
  if(this.counter==0){
    this.item={image:this.data.image,name:this.data.name, price:this.data.price,quantity:1,subTotal:this.data.price*1};
    this.cartService.addToCart(this.item);
    this.router.navigate(['/order/Cart']);
    this.dialogRef.close();
  }else{
   this.item={image:this.data.image,name:this.data.name, price:this.data.price,quantity:this.counter,subTotal:this.data.price*this.counter};
   this.cartService.addToCart(this.item);
  this.router.navigate(['/order/Cart']);
  this.dialogRef.close();
  }
}
  closeDialog(){
    this.dialogRef.close();
  }

}
