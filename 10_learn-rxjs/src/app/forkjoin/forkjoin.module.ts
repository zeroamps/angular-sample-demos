import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ForkjoinComponent } from './forkjoin.component';
import { ForkjoinRoutingModule } from './forkjoin-routing.module';

@NgModule({
  declarations: [ForkjoinComponent],
  imports: [CommonModule, HttpClientModule, ForkjoinRoutingModule]
})
export class ForkjoinModule {}
