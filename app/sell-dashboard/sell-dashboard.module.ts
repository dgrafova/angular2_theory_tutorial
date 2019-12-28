import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
//containers
import { SellDashboardComponent } from "./containers/sell-dashboard/sell-dashboard.component";

//generic components
import { SellItemDetailComponent } from "./generic-components/selling-item-detail/selling-item-detail.component";
import { SellItemSumComponent } from "./generic-components/selling-items-sum/selling-item-sum.component";

@NgModule({
  declarations: [
    SellDashboardComponent,
    SellItemDetailComponent,
    SellItemSumComponent
  ],
  imports: [CommonModule],
  exports: [SellDashboardComponent] // here export only the dashboard component, because we are using the Detail and Sum component inside the Dashboard
})
export class SellDashboardModule {}
