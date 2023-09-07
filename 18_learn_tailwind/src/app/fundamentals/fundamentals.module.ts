import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundamentalsComponent } from './fundamentals.component';
import { FundamentalsRoutingModule } from './fundamentals-routing.module';

@NgModule({
  declarations: [FundamentalsComponent],
  imports: [CommonModule, FundamentalsRoutingModule]
})
export class FundamentalsModule {}
