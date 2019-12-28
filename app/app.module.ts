import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { SellDashboardModule } from "./sell-dashboard/sell-dashboard.module";
import { AngularBasicsModule } from "./angular-basics/angular-basics.module";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    //angular modules
    BrowserModule,
    //custom modules
    SellDashboardModule,
    AngularBasicsModule
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent]
})
export class AppModule {}
