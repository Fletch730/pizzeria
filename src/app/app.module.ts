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
import { StoreModule } from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import { AuthEffects } from './shared/navigation-menu/store/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { MenuEffects } from './menu/menu/store/menu.effects';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpConfigInterceptor } from '../../src/app/core/interceptors/httpconfig.interceptor';


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
    MenuModule,
    HttpClientModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([
      AuthEffects,
      MenuEffects
     
    ]),
    ReactiveFormsModule
  ],
  entryComponents: [
    ItemComponent,
    AlertComponent
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
            useClass: HttpConfigInterceptor,
            multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
