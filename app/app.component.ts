import { Component } from "@angular/core";

interface Nav {
  link: string;
  name: string;
  exact: boolean;
}

@Component({
  selector: "app-root",
  template: `
    <div class="app">
      <nav class="nav">
        <a
          *ngFor="let item of nav"
          [routerLink]="item.link"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: item.exact }"
          >{{ item.name }}</a
        >
      </nav>
      <router-outlet></router-outlet>
      <!--<property-binding></property-binding>
      <template-elements></template-elements>
      <sell-dashboard></sell-dashboard>-->
    </div>
  `
})
export class AppComponent {
  readonly nav: Nav[] = [
    { link: "/", name: "Home", exact: true },
    { link: "/oops", name: "Not Found", exact: false },
    { link: "/property-binding", name: "Basics 1", exact: true },
    { link: "/template-elements", name: "Basics 2", exact: true },
    { link: "/sell-dashboard", name: "Selling Dashboard", exact: true },
    { link: "/item-viewer", name: "Item Viewer", exact: true }
  ];

  constructor() {}
}
