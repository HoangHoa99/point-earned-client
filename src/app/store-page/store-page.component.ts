import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css']
})
export class StorePageComponent {

  constructor(private router: Router){
  }

  openStoreSetting() {
    this.router.navigate([`store/setting`]);
  }

  logout() {
    this.router.navigate([`login`]);
  }

}
