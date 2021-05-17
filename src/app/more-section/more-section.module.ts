import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { MoreSectionRoutingModule } from './more-section-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReservationComponent } from './reservation/reservation.component';



@NgModule({
  declarations: [
    AboutUsComponent,
    ContactUsComponent,
    ReservationComponent
  ],
  imports: [
    CommonModule,
    MoreSectionRoutingModule
  ]
})
export class MoreSectionModule { }
