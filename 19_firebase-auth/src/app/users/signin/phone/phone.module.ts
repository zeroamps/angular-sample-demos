import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PhoneComponent } from './phone.component';
import { PhoneRoutingModule } from './phone-routing.module';

@NgModule({
  declarations: [PhoneComponent],
  imports: [CommonModule, ReactiveFormsModule, PhoneRoutingModule]
})
export class PhoneModule {}
