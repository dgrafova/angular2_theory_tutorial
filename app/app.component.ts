import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div class="app">
      <property-binding></property-binding>
      <template-elements></template-elements>
      <sell-dashboard></sell-dashboard>
    </div>
  `
})
export class AppComponent {
  constructor() {}
}
