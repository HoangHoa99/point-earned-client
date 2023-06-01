import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { StorePageComponent } from './store-page/store-page.component';
import { StoreSettingComponent } from './store-setting/store-setting.component';

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'user', component: StorePageComponent},
  {path: 'store', component: StorePageComponent},
  {path: 'store/setting', component: StoreSettingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
