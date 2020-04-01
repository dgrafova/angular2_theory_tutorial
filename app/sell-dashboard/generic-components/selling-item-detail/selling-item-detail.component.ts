import { Component, Input, Output } from "@angular/core";
import { Item } from "../../item.interface";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "selling-item-detail",
  template: `
    <div>
      Code: {{ detail.code }}, category {{ detail.category }}, gender
      {{ detail.gender }}, brand {{ detail.brand }}, size {{ detail.size }}
      <input
        *ngIf="editing"
        type="text"
        [value]="detail.brand"
        (input)="onBrandChange($event.target.value)"
      />
      <!-- alternatively (input)="onBrandChange(brandName.value) #brandName -->

      <button type="button" (click)="viewItem()">
        VIEW
      </button>
      <button type="button" (click)="editItem()">
        {{ editing ? "DONE" : "EDIT" }}
      </button>
      <button type="button" (click)="deleteItem()">
        DELETE
      </button>
    </div>
  `
})
export class SellItemDetailComponent {
  @Input()
  detail: Item;
  editing: boolean = false;

  @Output()
  remove: EventEmitter<Item> = new EventEmitter();

  @Output()
  edit: EventEmitter<Item> = new EventEmitter();

  @Output()
  view: EventEmitter<Item> = new EventEmitter();

  constructor() {}

  onBrandChange(brand: string): void {
    this.detail.brand = brand;
  }

  deleteItem(): void {
    this.remove.emit(this.detail);
  }

  editItem(): void {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

  viewItem(): void {
    this.view.emit(this.detail);
  }
}
