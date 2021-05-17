import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {path:'', component:ContentComponent,

  children:[

    {path:'', loadChildren:"./home/home.module#HomeModule"},

    {path:'about', loadChildren:"./about-us/about-us.module#AboutUsModule"},

    {path:'more', loadChildren:"./more-section/more-section.module#MoreSectionModule"},

    {path:'order', loadChildren:"./menu/menu.module#MenuModule"}
  ],

},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
