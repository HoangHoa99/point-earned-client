import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { StorePageComponent } from './store-page/store-page.component';
import { UserPurchasedComponent } from './user-purchased/user-purchased.component';
import { StoreSettingComponent } from './store-setting/store-setting.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    StorePageComponent,
    UserPurchasedComponent,
    StoreSettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
