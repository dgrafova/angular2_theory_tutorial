import { Component } from "@angular/core";

@Component({
  selector: "property-binding",
  template: `
    <h1>{{ title }}</h1>
    <h2 [innerHTML]="header1"></h2>
    <img [src]="logo" width="100" />
    <div>
      <input [value]="testText" />
      <h2>One way data binding</h2>
      <!-- if we update the value of <p>{{testText}}</p>, it won't be change somewhere else -->
      <p>{{ testText }}</p>
    </div>

    <div>
      <h2>Event binding</h2>
      <input placeholder="Give your name" (input)="showTheName($event)" />
      <p>Your name is: {{ name }}</p>
    </div>

    <div>
      <h2>Two-way data binding</h2>
      <input
        placeholder="Favourite animal?"
        [ngModel]="animalName"
        (ngModelChange)="showAnimalName($event)"
      />
      <p>Your favourite animal: {{ animalName }}</p>
      <h2>Two-way data binding with a short syntax</h2>
      <input placeholder="Favourite food?" [(ngModel)]="favFood" />
      <p>Your favourite food: {{ favFood }}</p>
    </div>
    <div>
      <h2>Template #ref binding</h2>
      <input placeholder="Your nickname?" #nickname />
      <button (click)="showGreeting(nickname.value)">Welcome message</button>
      <p>{{ greeting }}</p>
    </div>
  `
})
export class PropertyBindingComponent {
  //Property Binding to the native html attributes
  title: string = "Angular Basics";
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
}
