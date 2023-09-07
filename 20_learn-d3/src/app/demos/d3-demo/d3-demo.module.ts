import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { D3DemoComponent } from './d3-demo.component';
import { D3DemoRoutingModule } from './d3-demo-routing.module';

@NgModule({
  declarations: [D3DemoComponent],
  imports: [CommonModule, D3DemoRoutingModule]
})
export class D3DemoModule {}
