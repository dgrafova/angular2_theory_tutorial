import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";

import { SellDashboardModule } from "./sell-dashboard/sell-dashboard.module";
import { AngularBasicsModule } from "./angular-basics/angular-basics.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";
import { NotFoundComponent } from "./notfound.component";
import { HttpClientModule } from "@angular/common/http";

const ROUTES: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  //Redirect from home to sell-dashboard
  //{ path: "", redirectTo: "sell-dashboard", pathMatch: "full" },
  { path: "**", component: NotFoundComponent, pathMatch: "full" }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [
    //angular modules
    BrowserModule,
    //custom modules
    SellDashboardModule,
    AngularBasicsModule,
    HttpClientModule,
    //router
    RouterModule.forRoot(ROUTES)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
