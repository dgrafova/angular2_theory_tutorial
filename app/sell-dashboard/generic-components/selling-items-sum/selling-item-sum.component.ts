import { Component, Input } from "@angular/core";
import { Item } from "../../item.interface";

@Component({
  selector: "selling-item-sum",
  template: `
    <p>Items total: {{ items?.length }}</p>
  `
})
export class SellItemSumComponent {
  @Input()
  items: Item[];

  constructor() {}
}
