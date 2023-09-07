import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AccordionComponent } from './accordion/accordion.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ModalComponent } from './modal/modal.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';

@NgModule({
  declarations: [AccordionComponent, CarouselComponent, ModalComponent, TypeaheadComponent],
  imports: [CommonModule, NgbModule, FormsModule],
  exports: [AccordionComponent, CarouselComponent, ModalComponent, TypeaheadComponent]
})
export class ComponentsModule {}
