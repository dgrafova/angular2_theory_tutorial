import { Component, OnInit, IterableDiffers } from "@angular/core";

import { Item } from "../../item.interface";

import { ItemDashboardService } from "../../sell-dashboard.service";

//static data
const staticItems: Item[] = [
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

@Component({
  selector: "sell-dashboard",
  template: `
    <!-- Component Architecture and Feature Modules -->
    <h1>Selling Dashboard</h1>
    <!-- Presentational (dumb) components -->
    <h2>Detail Component</h2>
    <selling-item-detail
      *ngFor="let item of items"
      [detail]="item"
      (edit)="handleEdit($event)"
      (remove)="handleRemove($event)"
    ></selling-item-detail>
    <h2>Item Sum Component</h2>
    <selling-item-sum [items]="items"></selling-item-sum>
  `
})
export class SellDashboardComponent implements OnInit {
  items: Item[];

  constructor(private itemService: ItemDashboardService) {
    //when we are injecting depedences in the constructor, angular does the rest like "this.itemService = ItemDashboardService;"
  }

  //when we are load a dynamic data, we should use ngInit hook, to be sure, that the component is ready loading the data
  //when the SellDashboardComponent is ready, the angular will call the ngOnInit function
  ngOnInit(): void {
    console.log("Loaded ngOnInit");

    //in order to use the static data uncommen the line below
    //this.items = staticItems

    //synchronous dynamic data
    //this.items = this.itemService.getItemsSyn();

    //asynchronous data
    this.itemService.getItemsAsyn().subscribe((data: Item[]) => {
      this.items = data;
    });
  }

  handleEdit(event: Item) {
    //edit-Data example for a static data
    //this.items = this.items.map((item: Item) => {
    //  if (item.code === event.code) {
    //immutable state changes (immutable operation) assign
    //old and new changes will be merged
    //    item = Object.assign({}, item, event);
    //  }
    //  return item;
    //});

    //edit-Data example for asynchronous Data
    this.itemService.updateItemsAsyn(event).subscribe((data: Item) => {
      this.items = this.items.map((item: Item) => {
        if (item.code === event.code) {
          item = Object.assign({}, item, event);
        }
        return item;
      });
    });
  }

  handleRemove(event: Item) {
    //delete-Data example for a static data
    //  this.items = this.items.filter((item: Item) => {
    //    return item.brand !== event.brand;
    //  });
    //}

    //asynchronous data
    this.itemService.deleteItemsAsyn(event).subscribe((data: Item[]) => {
      this.items = this.items.filter((item: Item) => {
        return item.brand !== event.brand;
      });
    });
  }
}
