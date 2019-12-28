import { Component, OnInit } from "@angular/core";
import { template } from "@angular/core/src/render3";

import { Item } from "../../../item.interface";

@Component({
  selector: "sell-dashboard",
  template: `
    <h1>Selling Dashboard</h1>
    <p>List of all items:</p>
    <ul>
      <li *ngFor="let item of items">
        Code: {{ item.code }}, category {{ item.category }}, gender
        {{ item.gender }}, brand {{ item.brand }}, size {{ item.size }}
      </li>
    </ul>
    <!-- Presentational (dumb) components -->
    <selling-item-detail></selling-item-detail>
    <selling-item-sum></selling-item-sum>
  `
})
export class SellDashboardComponent implements OnInit {
  items: Item[] = [];

  construction() {}

  //when we are load a dynamic data, we should use ngInit hook, to be sure, that the component is ready loading the data
  //when the SellDashboardComponent is ready, the angular will call the ngOnInit function
  ngOnInit(): void {
    console.log("Loaded ngOnInit");

    this.items = [
      {
        code: "W12320000002",
        category: "cloths",
        gender: "women",
        brand: "GANT",
        size: "M"
      },
      {
        code: "M1120000008",
        category: "shoes",
        gender: "men",
        brand: "LLOYD",
        size: 46
      },
      {
        code: "W3230000009",
        category: "cloths",
        gender: "women",
        brand: "Tommy Hilfiger",
        size: "S"
      }
    ];
  }
}
