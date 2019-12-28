import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { PropertyBindingComponent } from "./containers/property-binding/property-binding.component";
import { TemplateElementsComponent } from "./containers/template-elements/template-elements.component";

@NgModule({
  declarations: [PropertyBindingComponent, TemplateElementsComponent],
  imports: [CommonModule, FormsModule],
  exports: [PropertyBindingComponent, TemplateElementsComponent]
})
export class AngularBasicsModule {}
