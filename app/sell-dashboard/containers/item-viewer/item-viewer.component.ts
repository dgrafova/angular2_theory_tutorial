import { Component, OnInit } from "@angular/core";

import { ItemDashboardService } from "../../sell-dashboard.service";

import { Item } from "../../item.interface";
import { Router, ActivatedRoute } from "@angular/router";

import { switchMap } from "rxjs/operators";
import { ObservableInput } from "rxjs";

@Component({
  selector: "item-viewer",
  template: `
    <p>Item detail: {{ item | json }}</p>
    <item-form [detail]="item"></item-form>
  `
})
export class ItemViewerComponent implements OnInit {
  item: Item;
  constructor(
    private itemService: ItemDashboardService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    //dynamic usage of the route
    this.route.params
      .pipe(switchMap((data: Item) => this.itemService.getItem(data.id)))
      .subscribe((data: Item) => (this.item = data));

    /* this.itemService.getItem(1).subscribe((data: Item) => {
      this.item = data;
      console.log("Loading item data form Item-Viewer Component");
    });*/
  }
}
