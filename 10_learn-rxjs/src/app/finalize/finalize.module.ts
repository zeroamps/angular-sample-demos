import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinalizeComponent } from './finalize.component';
import { FinalizeRoutingModule } from './finalize-routing.module';

@NgModule({
  declarations: [FinalizeComponent],
  imports: [CommonModule, FinalizeRoutingModule]
})
export class FinalizeModule {}
