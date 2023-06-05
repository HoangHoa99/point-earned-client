import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SettingService } from './store-setting.service';
import { Globals } from '../common/globals';

@Component({
  selector: 'app-store-setting',
  templateUrl: './store-setting.component.html',
  styleUrls: ['./store-setting.component.css']
})
export class StoreSettingComponent {

  storeName: string = '';
  id: number | undefined;

  bronzeSetting: any;
  silverSetting: any;
  goldSetting: any;
  diamondSetting: any;

  dataLoaded: boolean = false;

  constructor(private router: Router, private service: SettingService) {
  }

  ngOnInit() {

    if (!Globals.isStoreLogin && !Globals.isUserLogin) {
      this.router.navigate([`login`]);
      return;
    }

    this.id = Globals.loginResponse.getId;
    this.storeName = Globals.loginResponse.getUsername;

    this.loadStoreSetting(this.id);
  }

  openStorePage() {
    this.router.navigate([`store`]);
  }

  loadStoreSetting(id?: number) {
    let body = {
      "storeId": id
    }

    this.service.getSetting(body).subscribe(data => {
      this.handleSettingData(data);
    })
  }

  handleSettingData(data: any) {
    if (data.error) {
      return;
    }

    if(data.discountSettings) {

      this.bronzeSetting = data.discountSettings['BRONZE'];
      this.silverSetting = data.discountSettings['SILVER'];
      this.goldSetting = data.discountSettings['GOLD'];
      this.diamondSetting = data.discountSettings['DIAMOND'];

      this.dataLoaded = true;
      return;
    }

    // init dummy data
    this.bronzeSetting = {
      "DISCOUNT_VALUE": null,
      "LEAST_NUMBER": null,
      "DISCOUNT_LIMIT": null
    }

    this.silverSetting = {
      "DISCOUNT_VALUE": null,
      "LEAST_NUMBER": null,
      "DISCOUNT_LIMIT": null
    }

    this.goldSetting = {
      "DISCOUNT_VALUE": null,
      "LEAST_NUMBER": null,
      "DISCOUNT_LIMIT": null
    }

    this.diamondSetting = {
      "DISCOUNT_VALUE": null,
      "LEAST_NUMBER": null,
      "DISCOUNT_LIMIT": null
    }
    this.dataLoaded = true;
  }

  onSettingChange(event: any, key: string) {
    let settingKey = event.target.id;
    let settingVal = event.target.value;

    switch (key) {
      case 'BRONZE':
        {
          this.bronzeSetting[settingKey] = settingVal;
          break;
        }
      case 'SILVER':
        {
          this.silverSetting[settingKey] = settingVal;
          break;
        }
      case 'GOLD':
        {
          this.goldSetting[settingKey] = settingVal;
          break;
        }
      case 'DIAMOND':
        {
          this.diamondSetting[settingKey] = settingVal;
          break;
        }
      default: break;
    }
  }

  saveAllSetting() {
    let body = {
      "storeId": this.id,
      "discountSettings": {
        "BRONZE": this.bronzeSetting,
        "SILVER": this.silverSetting,
        "GOLD": this.goldSetting,
        "DIAMOND": this.diamondSetting
      }
    }
    
    this.service.setAllSetting(body).subscribe(data => {
      this.handleSetAll(data);
    });
  }

  handleSetAll(data: any) {
    console.log(data);
  }
}
