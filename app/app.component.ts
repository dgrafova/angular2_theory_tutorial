import { Component } from "@angular/core";
import { Car } from "./cars.interface";
import { Preowner } from "./cars.interface";

@Component({
  selector: "app-root",
  template: `
    <div class="app">
      {{ title }}
      <h1 [innerHTML]="header1"></h1>
      <img [src]="logo" width="100" />
    </div>

    <!-- ==============Property Binding================= -->
    <div>
      <input [value]="testText" />
      <h1>One way data binding</h1>
      <!-- if we update the value of <p>{{testText}}</p>, it won't be change somewhere else -->
      <p>{{ testText }}</p>
    </div>

    <div>
      <h1>Event binding</h1>
      <input placeholder="Give your name" (input)="showTheName($event)" />
      <p>Your name is: {{ name }}</p>
    </div>

    <div>
      <h1>Two-way data binding</h1>
      <input
        placeholder="Favourite animal?"
        [ngModel]="animalName"
        (ngModelChange)="showAnimalName($event)"
      />
      <p>Your favourite animal: {{ animalName }}</p>
      <h1>Two-way data binding with a short syntax</h1>
      <input placeholder="Favourite food?" [(ngModel)]="favFood" />
      <p>Your favourite food: {{ favFood }}</p>
    </div>
    <div>
      <h1>Template #ref binding</h1>
      <input placeholder="Your nickname?" #nickname />
      <button (click)="showGreeting(nickname.value)">Welcome message</button>
      <p>{{ greeting }}</p>
    </div>

    <!-- ==============Template Elements================= -->
    <div>
      <h1>ngIf</h1>
      <input
        placeholder="Search"
        (input)="showSearchText($event.target.value)"
      />
      <p *ngIf="searchText.length > 2">
        You are searching for... {{ searchText }}
      </p>
    </div>
    <--! Alternative implementation using template -->
    <ng-template [ngIf]="searchText.length > 2">
      <div>
        <h1>Template Component - shadow DOM</h1>
        <p>
          Template Component search: you are searching for ... {{ searchText }}
        </p>
      </div>
    </ng-template>

    <div>
      <h1>NgFor</h1>
      <ol>
        <li *ngFor="let car of myCars; let i = index">
          {{ car.producer }}:{{ car.model }} - index ( {{ i }} )
        </li>
      </ol>
      <--! Alternative implementation using template -->
      <h1>NgFor with the Template Component</h1>
      <ng-template ngFor let-car let-i="index" [ngForOf]="myCars">
        <ul>
          <li>{{ car.producer }}:{{ car.model }} - index ( {{ i }} )</li>
        </ul>
      </ng-template>
    </div>

    <div>
      <h1>Class Binding</h1>
      <ol>
        <li
          *ngFor="let car of myCars; let i = index"
          [class.sedan]="car.type == 'sedan'"
        >
          {{ car.producer }}:{{ car.model }} - index ( {{ i }} )
        </li>
      </ol>
      <h1>NgClass</h1>
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
      <h1>Style Binding</h1>
      <ol>
        <li *ngFor="let car of myCars; let i = index">
          <span
            [style.backgroundColor]="car.type === 'sedan' ? 'green' : 'yellow'"
            >{{ car.producer }}:{{ car.model }} - index ( {{ i }} )</span
          >
        </li>
      </ol>
      <h1>NgStyle</h1>
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
      <h1>Built-in Pipes</h1>
      <ol>
        <li *ngFor="let car of myCars; let i = index">
          {{ car | json }} - {{ car.date | date: "yMMMMd" | uppercase }}
        </li>
      </ol>
    </div>

    <div>
      <h1>Safe navigation operator</h1>
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
export class AppComponent {
  //Property Binding to the native html attributes
  title: string = "Ultimate Angular";
  header1: string = "Property Binding";
  logo: string = "./app/fox.png";
  testText: string = "What???";

  //Event binding to the native html events
  name: string;

  //Two-way data binding should be used only for local components, in other cases one-way binding
  //To use it we must 'import { NgModule } from "@angular/core";' to 'app.module.ts'
  animalName: string = "";
  favFood: string = "";

  //Template #ref variables, works without any import
  greeting: string = "";

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

  constructor() {
    this.name = "";
  }

  //Event binding
  showTheName(event: any) {
    this.name = event.target.value;
  }

  //Two-way data binding
  showAnimalName(value: string) {
    this.animalName = value;
  }

  ///Template #ref variables
  showGreeting(nickname: string) {
    this.greeting = "Hello " + nickname;
  }

  //ngIf
  showSearchText(searchText: string) {
    this.searchText = searchText;
  }
}
