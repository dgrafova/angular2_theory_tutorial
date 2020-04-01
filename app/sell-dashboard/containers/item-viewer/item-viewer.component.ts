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
    <button (click)="goBack()">
      Go back
    </button>
    <item-form [detail]="item" (update)="onUpdateItem($event)"></item-form>
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

  goBack() {
    this.router.navigate(["/sell-dashboard"]);
  }

  onUpdateItem(event: Item) {
    this.itemService.updateItemsAsyn(event).subscribe((data: Item) => {
      this.item = Object.assign({}, this.item, event);
    });
  }
}
