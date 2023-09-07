import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromiseComponent } from './promise.component';
import { PromiseRoutingModule } from './promise-routing.module';

@NgModule({
  declarations: [PromiseComponent],
  imports: [CommonModule, PromiseRoutingModule]
})
export class PromiseModule {}
