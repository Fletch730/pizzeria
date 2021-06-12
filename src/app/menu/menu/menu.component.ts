import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { ItemComponent } from 'src/app/core/components/item/item.component';
import { DataService } from 'src/app/core/services/data.service';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs'
import { menu } from 'src/app/core/entity';




@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dialogConfig: MatDialogConfig<any>;
  pizzaItems!:menu[];
  pastaItems:Array<any>=[];
 drinksItems:Array<any>=[];
  saladItems:Array<any>=[];
  dessertsItems:Array<any>=[];
  isCollapsed = false;
  btn:string='';
  pizza:boolean=true;
  pasta!: boolean;
  drinks!:boolean;
  salad!:boolean;
  deserts!:boolean;


  constructor(private dialog: MatDialog,private dataService: DataService) {

    this.dialogConfig = new MatDialogConfig();
    this.dialogConfig.disableClose = false;
    this.dialogConfig.autoFocus = false;
   // this.dialogConfig.maxWidth = '70vw';
   this.dialogConfig.maxHeight = '450px';
   //this.dialogConfig.position.top = '450px';
    this.dialogConfig.closeOnNavigation = true;
    this.dialogConfig.panelClass = 'custom-dialog-container'
   }

  ngOnInit(){
this.onClickPizza();
  }

  onItemClick(value:any){
    console.log(value)
    this.dialogConfig.data = {
    name:value.name,
    image:value.image,
    description:value.Description,
    price:value.price,
    ingredient1:value.ingredient1,
    ingredient2:value.ingredient2,
    ingredient3:value.ingredient3
    };

    const item = this.dialog.open(  ItemComponent, this.dialogConfig);
   item.afterClosed().subscribe(result => { });
  }

  onClickPizza(){
    
    this.btn='left:0px'
    this.pizza=true
    this.pasta=false
    this.drinks=false
    this.salad=false
    this.deserts=false
  }
 onClickPasta(){
  
  this.btn='left:110px'
  this.pizza=false
  this.pasta=true
  this.drinks=false
  this.salad=false
  this.deserts=false
 }
 onClickDrinks(){
  
  this.btn='left:240px'
  this.pizza=false
  this.pasta=false
  this.drinks=true
  this.salad=false
  this.deserts=false
 }
 onClickSalad(){
 
  this.btn='left:370px'
  this.pizza=false
  this.pasta=false
  this.drinks=false
  this.salad=true
  this.deserts=false
 }
 onClickDeserts(){
 
  this.btn='left:505px'
  this.pizza=false
  this.pasta=false
  this.drinks=false
  this.salad=false
  this.deserts=true
 }
}
