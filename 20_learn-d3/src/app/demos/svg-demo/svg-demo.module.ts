import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgDemoComponent } from './svg-demo.component';
import { SvgDemoRoutingModule } from './svg-demo-routing.module';

@NgModule({
  declarations: [SvgDemoComponent],
  imports: [CommonModule, SvgDemoRoutingModule]
})
export class SvgDemoModule {}
