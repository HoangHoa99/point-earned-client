import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { StorePageComponent } from './store-page/store-page.component';
import { UserPurchasedComponent } from './user-purchased/user-purchased.component';
import { StoreSettingComponent } from './store-setting/store-setting.component';
import { LoginService } from './login-page/login-page.service';
import { SettingService } from './store-setting/store-setting.service';

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
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [LoginService, SettingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
