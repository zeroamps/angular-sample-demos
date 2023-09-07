import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnsubscribeComponent } from './unsubscribe.component';
import { UnsubscribeRoutingModule } from './unsubscribe-routing.module';

@NgModule({
  declarations: [UnsubscribeComponent],
  imports: [CommonModule, UnsubscribeRoutingModule]
})
export class UnsubscribeModule {}
