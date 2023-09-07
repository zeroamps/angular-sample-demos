import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DebounceComponent } from './debounce.component';
import { DebounceRoutingModule } from './debounce-routing.module';

@NgModule({
  declarations: [DebounceComponent],
  imports: [CommonModule, ReactiveFormsModule, DebounceRoutingModule]
})
export class DebounceModule {}
