import { Component } from "@angular/core";
import { Car } from "./cars.interface";
import { Preowner } from "./cars.interface";

@Component({
  selector: "template-elements",
  template: `
    <div>
      <h1>Template Elements</h1>
      <h2>ngIf</h2>
      <input
        placeholder="Search"
        (input)="showSearchText($event.target.value)"
      />
      <!-- Binding to the standard javascript event of the "input" element -->
      <p *ngIf="searchText.length > 2">
        You are searching for... {{ searchText }}
      </p>
    </div>
    <!-- Alternative implementation using angular template component -->
    <ng-template [ngIf]="searchText.length > 2">
      <div>
        <h2>Template Component - shadow DOM</h2>
        <p>
          Template Component search: you are searching for ... {{ searchText }}
        </p>
      </div>
    </ng-template>

    <div>
      <h2>NgFor</h2>
      <ol>
        <li *ngFor="let car of myCars; let i = index">
          {{ car.producer }}:{{ car.model }} - index ( {{ i }} )
        </li>
      </ol>
      <!-- Alternative implementation using using angular template component -->
      <h2>NgFor with the Template Component</h2>
      <ng-template ngFor let-car let-i="index" [ngForOf]="myCars">
        <ul>
          <li>{{ car.producer }}:{{ car.model }} - index ( {{ i }} )</li>
        </ul>
      </ng-template>
    </div>

    <div>
      <h2>Class Binding</h2>
      <ol>
        <li
          *ngFor="let car of myCars; let i = index"
          [class.sedan]="car.type == 'sedan'"
        >
          {{ car.producer }}:{{ car.model }} - index ( {{ i }} )
        </li>
      </ol>
      <h2>NgClass</h2>
      <ol>
        <li
          *ngFor="let car of myCars; let i = index"
          [ngClass]="{
            sedan: car.type === 'sedan',
            coupe: car.type === 'coupe'
          }"
        >
          {{ car.producer }}:{{ car.model }} - index ( {{ i }} )
        </li>
      </ol>
      <h2>Style Binding</h2>
      <ol>
        <li *ngFor="let car of myCars; let i = index">
          <span
            [style.backgroundColor]="car.type === 'sedan' ? 'green' : 'yellow'"
            >{{ car.producer }}:{{ car.model }} - index ( {{ i }} )</span
          >
        </li>
      </ol>
      <h2>NgStyle</h2>
      <ol>
        <li *ngFor="let car of myCars; let i = index">
          <span
            [ngStyle]="{
              backgroundColor: car.type === 'sedan' ? 'green' : 'yellow'
            }"
            >{{ car.producer }}:{{ car.model }} - index ( {{ i }} )</span
          >
        </li>
      </ol>
    </div>

    <div>
      <h2>Built-in Pipes</h2>
      <ol>
        <li *ngFor="let car of myCars; let i = index">
          {{ car | json }} - {{ car.date | date: "yMMMMd" | uppercase }}
        </li>
      </ol>
    </div>

    <div>
      <h2>Safe navigation operator</h2>
      <ol>
        <li *ngFor="let car of myCars; let i = index">
          <!-- In order not to get the error ERROR TypeError: "_v.context.$implicit.preowner is null", when calling "car.preowner.length", we should use "?" -->
          {{ car.model }} - Preowner:
          {{ car.preowner?.length || "keine" }}
        </li>
      </ol>
    </div>
  `
})
export class TemplateElementsComponent {
  //ngIf
  searchText = "";

  //ngFor
  myCars: Car[] = [
    {
      producer: "FORD",
      model: "C-MAX",
      type: "sedan",
      date: 1577303942,
      preowner: [
        { firstName: "Tom", lastName: "Radler" },
        { firstName: "Nick", lastName: "Johnson" }
      ]
    },
    {
      producer: "BMW",
      model: "2er",
      type: "coupe",
      date: 1431633542,
      preowner: null
    },
    {
      producer: "Opel",
      model: "Mokka",
      type: "sedan",
      date: 902692742,
      preowner: [
        { firstName: "Jolly", lastName: "Lissiki" },
        { firstName: "Kira", lastName: "Johnson" }
      ]
    }
  ];

  constructor() {}

  //ngIf
  showSearchText(searchText: string) {
    this.searchText = searchText;
  }
}
