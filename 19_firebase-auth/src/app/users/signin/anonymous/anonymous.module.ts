import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnonymousComponent } from './anonymous.component';
import { AnonymousRoutingModule } from './anonymous-routing.module';

@NgModule({
  declarations: [AnonymousComponent],
  imports: [CommonModule, AnonymousRoutingModule]
})
export class AnonymousModule {}
