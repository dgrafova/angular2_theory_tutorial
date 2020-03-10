import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
//containers
import { SellDashboardComponent } from "./containers/sell-dashboard/sell-dashboard.component";
import { ItemViewerComponent } from "./containers/item-viewer/item-viewer.component";

//generic components
import { SellItemDetailComponent } from "./generic-components/selling-item-detail/selling-item-detail.component";
import { SellItemSumComponent } from "./generic-components/selling-items-sum/selling-item-sum.component";
import { ItemFormComponent } from "./generic-components/item-form/item-form.components";

//providers

import { ItemDashboardService } from "./sell-dashboard.service";

const ROUTES: Routes = [
  {
    path: "sell-dashboard",
    component: SellDashboardComponent,
    pathMatch: "full"
  },
  {
    path: "item-viewer",
    children: [
      { path: ":id", component: ItemViewerComponent, pathMatch: "full" }
    ]
  }
];

@NgModule({
  declarations: [
    //container
    SellDashboardComponent,
    ItemViewerComponent,
    //generic components
    SellItemDetailComponent,
    SellItemSumComponent,
    ItemFormComponent
  ],
  imports: [CommonModule, FormsModule, RouterModule.forRoot(ROUTES)],
  // we dont need to export the module, when we are Using ReouterModule.forChild
  //exports: [SellDashboardComponent], // here export only the dashboard component, because we are using the Detail and Sum component inside the Dashboard
  providers: [ItemDashboardService]
})
export class SellDashboardModule {}
