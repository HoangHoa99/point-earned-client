import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-setting',
  templateUrl: './store-setting.component.html',
  styleUrls: ['./store-setting.component.css']
})
export class StoreSettingComponent {

  constructor(private router: Router){
  }

  openStorePage() {
    this.router.navigate([`store`]);
  }

}
