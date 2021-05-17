import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import{ SharedModule } from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeModule } from './home/home.module';
import { ItemComponent } from './core/components/item/item.component';
import { AlertComponent } from './core/components/alert/alert.component';
import { AboutUsModule } from './about-us/about-us.module';
import{MoreSectionModule} from './more-section/more-section.module'
import { MenuModule } from './menu/menu.module';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ItemComponent,
    AlertComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    NgbModule,
    HomeModule,
    AboutUsModule,
    MoreSectionModule  ,
    MenuModule
  ],
  entryComponents: [
    ItemComponent,
    AlertComponent
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
