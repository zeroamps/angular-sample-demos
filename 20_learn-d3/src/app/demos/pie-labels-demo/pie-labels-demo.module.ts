import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PieLabelsDemoComponent } from './pie-labels-demo.component';
import { PieLabelsDemoRoutingModule } from './pie-labels-demo-routing.module';

@NgModule({
  declarations: [PieLabelsDemoComponent],
  imports: [CommonModule, PieLabelsDemoRoutingModule]
})
export class PieLabelsDemoModule {}
