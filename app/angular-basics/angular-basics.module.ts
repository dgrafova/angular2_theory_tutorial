import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { PropertyBindingComponent } from "./containers/property-binding/property-binding.component";
import { TemplateElementsComponent } from "./containers/template-elements/template-elements.component";

const ROUTES: Routes = [
  {
    path: "property-binding",
    component: PropertyBindingComponent,
    pathMatch: "full"
  },
  {
    path: "template-elements",
    component: TemplateElementsComponent,
    pathMatch: "full"
  }
];

@NgModule({
  declarations: [PropertyBindingComponent, TemplateElementsComponent],
  imports: [
    CommonModule,
    FormsModule,
    //router
    RouterModule.forChild(ROUTES)
  ],
  exports: [PropertyBindingComponent, TemplateElementsComponent]
})
export class AngularBasicsModule {}
