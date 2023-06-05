import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-purchased',
  templateUrl: './user-purchased.component.html',
  styleUrls: ['./user-purchased.component.css']
})
export class UserPurchasedComponent {

  @Input() list: Array<Map<string, string>> = [];

  getValue(item: any, key: string) {
    return item[key];
  }

  getRankSVG(item: Map<string, string>): string {
    let rank = this.getValue(item, 'userRank');

    switch(rank) {
      case "BRONZE": {
        return "../../assets/images/bronze.svg";
      }
      case "SILVER": {
        return "../../assets/images/silver.svg";
      }
      case "GOLD": {
        return "../../assets/images/gold.svg";
      }
      case "DIAMOND": {
        return "../../assets/images/diamond.svg";
      }
      default: return "../../assets/images/iron.svg";
    }
  }
}
