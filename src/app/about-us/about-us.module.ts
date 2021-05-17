import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { AboutUsRoutingModule } from './about-us-routing.module';
//import { AboutUsComponent } from './about-us/about-us.component';



@NgModule({
  declarations: [AboutComponent,
  
  ],

  imports: [
    CommonModule,
    AboutUsRoutingModule,
 
  ]
})
export class AboutUsModule { }
