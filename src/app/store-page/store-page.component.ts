import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from '../common/globals';
import { LoginResponse } from '../login-page/login-page';
import { BarcodeFormat } from '@zxing/library';
import { BehaviorSubject } from 'rxjs';
import { StoreService } from './store-page.service';
import { NotifierService } from 'angular-notifier';


@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css']
})
export class StorePageComponent {

  private readonly notifier: NotifierService;

  loginInfo: LoginResponse | undefined;

  isStoreLogin: boolean = false;

  userPurchasedList: Array<Map<string, string>> = [];

  /** QR scanning variable */
  openModal: boolean = false;

  qrResultString!: string;

  torchEnabled = false;
  torchAvailable$ = new BehaviorSubject<boolean>(false);
  tryHarder = false;

  availableDevices!: MediaDeviceInfo[];
  currentDevice!: MediaDeviceInfo;

  formatsEnabled: BarcodeFormat[] = [
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.EAN_13,
    BarcodeFormat.QR_CODE,
  ];

  hasDevices!: boolean;

  hasPermission!: boolean;

  /** !QR scanning variable */

  constructor(private router: Router, private service: StoreService, private notification: NotifierService) {
    this.notifier = notification;
  }

  ngOnInit() {
    this.loginInfo = Globals.loginResponse;
    this.isStoreLogin = Globals.isStoreLogin;
    if (!Globals.isStoreLogin && !Globals.isUserLogin) {
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

  /** QR scan action */

  openScanModal() {
    this.openModal = !this.openModal;
  }

  onTorchCompatible(isCompatible: boolean): void {
    this.torchAvailable$.next(isCompatible || false);
  }

  toggleTorch(): void {
    this.torchEnabled = !this.torchEnabled;
  }

  toggleTryHarder(): void {
    this.tryHarder = !this.tryHarder;
  }

  clearResult(): void {
    this.qrResultString = '';
  }

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.availableDevices = devices;
    this.hasDevices = Boolean(devices && devices.length);
  }

  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
    this.openModal = !this.openModal;

    this.accummulatePoint();
  }

  onHasPermission(has: boolean) {
    this.hasPermission = has;
  }

  accummulatePoint() {
    if (!this.qrResultString) {
      return;
    }

    let userInfo = this.qrResultString.split(',');

    let body = {
      "id": this.loginInfo?.getId,
      "phoneNumber": userInfo[0],
      "userType": userInfo[1],
      "purchasedCount": 1
    }

    this.service.accummulate(body).subscribe(data => {
      this.handleAccummulateResponse(data);
    });
  }

  handleAccummulateResponse(data: any) {
    let notificationType;
    if(data.error) {
      notificationType = 'failure';
    }
    else {
      notificationType = 'success';
    }

    this.notifier.notify(notificationType, data.message);
  }

  /** !QR scan action */

}
