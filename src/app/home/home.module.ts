import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBannerComponent } from './layouts/home-banner/home-banner.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/Card';
import { SpecialityComponent } from './layouts/speciality/speciality.component';
import { SwiperModule } from 'swiper/angular';
import { AboutComponent } from './layouts/about/about.component';
import { RecentNewsComponent } from './layouts/recent-news/recent-news.component';
import { ChefsComponent } from './layouts/chefs/chefs.component';
import { BookTableComponent } from './layouts/book-table/book-table.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import {MatDialogModule } from '@angular/material/dialog';

import {MatDividerModule} from '@angular/material/divider';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: 
  [
    HomeBannerComponent, 
    HomeComponent, 
    SpecialityComponent, 
    AboutComponent, 
    RecentNewsComponent, 
    ChefsComponent, 
    BookTableComponent, ProfileComponent, 
  
  ],
    
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    SwiperModule,
    RouterModule,
    NgbModule,
    MatDialogModule,
    MatDividerModule,
    ReactiveFormsModule
    


  ]
})
export class HomeModule { }
