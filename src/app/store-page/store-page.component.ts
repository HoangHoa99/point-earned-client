import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from '../common/globals';
import { LoginResponse } from '../login-page/login-page';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css']
})
export class StorePageComponent {

  loginInfo: LoginResponse | undefined;

  isStoreLogin: boolean = false;

  userPurchasedList: Array<Map<string, string>> = [];

  constructor(private router: Router){
  }

  ngOnInit() {
    this.loginInfo = Globals.loginResponse;
    this.isStoreLogin = Globals.isStoreLogin;
    if(!Globals.isStoreLogin && !Globals.isUserLogin) {
      this.router.navigate([`login`]);
    }

    this.userPurchasedList = this.loginInfo?.getUserPurchasedList;
  }

  openStoreSetting() {
    this.router.navigate([`store/setting`]);
  }

  logout() {
    Globals.isStoreLogin = false;
    Globals.isUserLogin = false;
    Globals.loginResponse.clear();

    this.router.navigate([`login`]);
  }

  getLoginUsername() {
    return this.loginInfo?.getUsername;
  }

  getLoginQRUrl() {
    return this.loginInfo?.getQRUrl;
  }
}
