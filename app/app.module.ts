import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { SellDashboardModule } from "./sell-dashboard/sell-dashboard.module";
import { AngularBasicsModule } from "./angular-basics/angular-basics.module";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    //angular modules
    BrowserModule,
    //custom modules
    SellDashboardModule,
    AngularBasicsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent]
})
export class AppModule {}
