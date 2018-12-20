import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './router/app-routing.module';
import { TortoiseComponent } from './pages/tortoise/tortoise.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { TabbarComponent } from './pages/tabbar/tabbar.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CollectComponent } from './pages/collect/collect.component';
import { MyComponent } from './pages/my/my.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';

@NgModule({
  declarations: [
    AppComponent,
    TortoiseComponent,
    HomepageComponent,
    TabbarComponent,
    ShopComponent,
    CollectComponent,
    MyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdMobileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
