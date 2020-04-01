import { Component, Input, OnInit, Output } from "@angular/core";
import { Item } from "../../item.interface";
import { Category } from "../../category.interface";
import { NgForm } from "@angular/forms";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "item-form",
  template: `
    <form
      (ngSubmit)="handleSubmit(form.value, form.valid)"
      #form="ngForm"
      novalidate
    >
      <!-- novalidate means we are going to use Angular's native validation  -->
      Form detail-data as json: {{ detail | json }}
      <div>
        Item code 1:
        <input type="text" name="code" ngModel />
        <!--The binding also works just with the ngModel directory -->
      </div>
      Values of the current ngForm: {{ form.value | json }}
      <div>
        Item code:
        <input type="text" name="code" [ngModel]="detail?.code" />
        <!--One-way binding with [ngModel] -->
        <!--Use safe operator "?" because we load the data from the asynchr. call -->
      </div>
      <div>
        Item id:
        <input
          type="number"
          name="id"
          [ngModel]="detail?.id"
          required
          #id="ngModel"
        />
        <div style="color:red">Id Field Validation:{{ id.errors | json }}</div>
        <div style="color:red" *ngIf="id.errors?.required && id.dirty">
          Id is required.
        </div>
      </div>
      <div>Kollektion: {{ collection || "unknown" }}</div>
      <div>
        <label>
          <input
            type="radio"
            name="gender"
            [ngModel]="detail?.gender"
            value="women"
            (ngModelChange)="toggleGender($event)"
          />
          Weiblich
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            [ngModel]="detail?.gender"
            value="men"
            (ngModelChange)="toggleGender($event)"
          />
          Männlich
        </label>
      </div>
      <div>
        Size
        <select name="size" [ngModel]="detail?.size">
          <option *ngFor="let item of size">{{ item }}</option>
        </select>
      </div>
      <div>
        Category
        <select name="category" [ngModel]="detail?.category">
          <option
            *ngFor="let item of category"
            [ngValue]="item.key"
            [selected]="item.key === detail?.category"
            >{{ item.value }}</option
          >
        </select>
      </div>
      <div>
        Alternative Category Implementation
        <select name="category" [ngModel]="detail?.category">
          <option *ngFor="let item of category" [ngValue]="item.key">{{
            item.value
          }}</option>
        </select>
      </div>
      <div>
        <label>
          <input type="checkbox" name="checked" [ngModel]="checked" />
        </label>
      </div>
      <div style="color:red">Form valid:{{ form.valid | json }}</div>
      <div style="color:red">Form invalid:{{ form.invalid | json }}</div>
      <button type="submit" [disabled]="form.invalid">
        Update
      </button>
    </form>
  `
})
export class ItemFormComponent {
  @Input()
  detail: Item;

  @Output()
  update: EventEmitter<Item> = new EventEmitter<Item>();

  collection: string;
  checked: boolean = true;
  size: (string | number)[] = ["XS", "S", "M", "L", 34, 36, 38, 40];

  category: Category[] = [
    { key: "cloths", value: "Kleidung" },
    { key: "shoes", value: "Schuhe" },
    { key: "accessoires", value: "Accesoires" }
  ];

  constructor() {}

  toggleGender(gender: "women" | "men"): void {
    if (gender === "women") this.collection = "Frauen 2020";
    else this.collection = "Herren 2020";
  }

  handleSubmit(item: Item, isValid: boolean) {
    if (isValid) {
      this.update.emit(item);
    }
  }
}
