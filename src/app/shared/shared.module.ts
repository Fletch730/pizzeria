import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { FooterComponent } from './footer/footer.component';
import { MatDividerModule } from '@angular/material/divider';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';







@NgModule({
  declarations: [NavigationMenuComponent, FooterComponent],
  imports: [
    CommonModule,
    NgbCollapseModule,
    RouterModule,
    MatDividerModule,
    ReactiveFormsModule
  
  ],
  exports:[
    NavigationMenuComponent,
    FooterComponent
  ]
})
export class SharedModule { }
