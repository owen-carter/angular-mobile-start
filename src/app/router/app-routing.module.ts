import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TortoiseComponent } from '../pages/tortoise/tortoise.component';
import { TabbarComponent } from '../pages/tabbar/tabbar.component';
import { HomepageComponent } from '../pages/homepage/homepage.component';
import { ShopComponent } from '../pages/shop/shop.component';
import { CollectComponent } from '../pages/collect/collect.component';
import { MyComponent } from '../pages/my/my.component';

const routes: Routes = [
  { 
    path: '',
    component: TabbarComponent,
    children: [
      {path: 'home', component: HomepageComponent },
      {path: 'shop', component: ShopComponent },
      {path: 'collect', component: CollectComponent },
      {path: 'my', component: MyComponent }
    ]
  },
  { path: 'tab', component: TortoiseComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
